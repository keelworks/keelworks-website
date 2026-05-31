# Contact Form

Handles messages submitted via the Contact Us page.

## Status
✅ Working (recreated May 2026)

## How to Recreate
1. Create a new Google Sheet with columns: `First Name`, `Last Name`, `Email`, `Subject`, `Message`, `Timestamp`
2. Create a new Apps Script project at [script.google.com](https://script.google.com)
3. Use the script code below, replacing `YOUR_SHEET_ID`
4. Deploy as a web app: Execute as **Me**, Who has access **Anyone**
5. Copy the deployed URL and update `src/Pages/ContactUs/ContactForm/ContactForm.jsx` line 31

## Frontend
- **File:** `src/Pages/ContactUs/ContactForm/ContactForm.jsx`
- **Method:** POST with JSON body (`JSON.stringify`)
- **Mode:** `no-cors` (write-only, response not read)

## Fields Sent (JSON body)
| Key | Description |
|---|---|
| `firstName` | First name |
| `lastName` | Last name |
| `email` | Email address |
| `subject` | Message subject |
| `message` | Message body |

## Script Code to Recreate
```js
function doPost(e) {
  const { firstName, lastName, email, subject, message } = JSON.parse(e.postData.contents);

  const ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  const sheet = ss.getSheetByName("Sheet1");

  sheet.appendRow([firstName, lastName, email, subject, message, new Date()]);

  const recipient = "YOUR_NOTIFICATION_EMAIL@keelworks.org";
  MailApp.sendEmail(
    recipient,
    "New Contact Form Submission: " + (subject || "(no subject)"),
    `From: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
  );

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## History
- Original script owned by former team member — deleted in early 2026
- Recreated May 2026 by Mihir Adelkar
- Frontend fixed at the same time: switched from FormData to JSON.stringify, added mode: "no-cors", wrapped in try/catch
