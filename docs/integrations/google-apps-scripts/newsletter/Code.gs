function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (error) {
    return reject("Invalid JSON request.");
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reject("Invalid JSON request.");
  }

  const firstName = String(data.firstName || "").trim();
  const lastName = String(data.lastName || "").trim();
  const email = String(data.email || "").trim();

  if (!firstName || !lastName || !email) {
    return reject("First name, last name, and email are required.");
  }
  if (firstName.length > 50 || lastName.length > 50 || email.length > 254) {
    return reject("Field length exceeds the allowed limit.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reject("Invalid email address.");
  }

  try {
    const spreadsheetId = PropertiesService.getScriptProperties()
      .getProperty("NEWSLETTER_SPREADSHEET_ID");
    if (!spreadsheetId) {
      throw new Error("Missing NEWSLETTER_SPREADSHEET_ID script property.");
    }

    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName("Subscribers");
    if (!sheet) {
      throw new Error('Missing "Subscribers" sheet tab.');
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      throw new Error("Could not acquire lock to save newsletter subscription.");
    }

    try {
      const normalizedEmail = email.toLowerCase();
      const lastRow = sheet.getLastRow();
      const existingEmails = lastRow > 1
        ? sheet.getRange(2, 3, lastRow - 1, 1).getDisplayValues()
        : [];
      const alreadySubscribed = existingEmails.some(
        ([existingEmail]) => String(existingEmail).trim().toLowerCase() === normalizedEmail
      );

      if (alreadySubscribed) {
        console.log("Skipped duplicate newsletter subscription.");
        return respond({ ok: true });
      }

      sheet.appendRow([
        toPlainText(firstName),
        toPlainText(lastName),
        toPlainText(email),
        new Date(),
      ]);
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    notifyFailure(error);
    return respond({ ok: false, error: "Unable to save newsletter subscription." });
  }

  return respond({ ok: true });
}

function reject(message) {
  console.error(message);
  return respond({ ok: false, error: message });
}

function toPlainText(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

const ALERT_INTERVAL_MS = 60 * 60 * 1000;

function notifyFailure(error) {
  console.error("Newsletter subscription failed.", error);

  try {
    const props = PropertiesService.getScriptProperties();
    const alertEmail = props.getProperty("NEWSLETTER_ALERT_EMAIL");
    if (!alertEmail) {
      console.error("Missing NEWSLETTER_ALERT_EMAIL script property; failure alert was not sent.");
      return;
    }

    const lastAlertAt = Number(props.getProperty("LAST_ALERT_AT") || 0);
    if (Date.now() - lastAlertAt < ALERT_INTERVAL_MS) {
      console.log("Failure alert suppressed; one was already sent within the last hour.");
      return;
    }

    MailApp.sendEmail(
      alertEmail,
      "Newsletter subscription automation failure",
      `The newsletter subscription could not be processed.\n\nTime: ${new Date().toISOString()}\n\n${error.stack || error}`
    );
    props.setProperty("LAST_ALERT_AT", String(Date.now()));
  } catch (notificationError) {
    console.error("Could not send newsletter failure alert.", notificationError);
  }
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
