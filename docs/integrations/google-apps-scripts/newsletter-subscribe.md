# Newsletter Subscribe

The footer form sends subscriber details to a Google Apps Script web app, which writes them to a Google Sheet.

## Frontend

- **File:** `src/Components/Footer/Footer.jsx`
- **Method:** POST with JSON body `{ firstName, lastName, email }`
- **Field limits:** First and last names are limited to 50 characters each; email is limited to 254 characters. The script enforces these limits independently of the form.
- **Mode:** `no-cors`; the browser cannot read the Apps Script response. The form always shows the same thank-you message after submission, which does not confirm that a row was written.
- **Duplicate handling:** The replacement script compares trimmed email addresses without case sensitivity and only adds a new address once. A duplicate is logged as skipped and produces no different user-visible result.
- **Formula protection:** Values beginning with `=`, `+`, `-`, or `@` are prefixed with an apostrophe before being written to the sheet.
- **Operational failures:** Spreadsheet access, missing-tab, lock, and write failures are logged in Apps Script **Executions** and emailed to the address in the `NEWSLETTER_ALERT_EMAIL` script property. Validation rejections and duplicates are logged but do not send alerts.

## Create the replacement

1. Sign in as `automation@keelworks.org`, the account that will own and execute the script.
2. Create a Google spreadsheet named `Newsletter subscribe KeelWorks Main Site`.
3. Rename the first tab to `Subscribers`. Add these headers in row 1: `firstName`, `lastName`, `email`, `timestamp`.
4. Copy the spreadsheet ID from its URL (`/spreadsheets/d/SPREADSHEET_ID/edit`).
5. In a separate tab, open [Google Apps Script](https://script.google.com/) and create a project named `KeelWorks Newsletter Subscribe`.
6. Replace the default script contents with [`Code.gs`](./newsletter/Code.gs).
7. In Apps Script, open **Project Settings → Script properties** and add:
   - **Property:** `NEWSLETTER_SPREADSHEET_ID`
   - **Value:** the ID copied in step 4
   - **Property:** `NEWSLETTER_ALERT_EMAIL`
   - **Value:** `support@keelworks.org`
8. Deploy with **Deploy → New deployment → Web app**:
   - **Execute as:** `automation@keelworks.org`
   - **Who has access:** Anyone, if allowed by the organization
9. Authorize spreadsheet and email permissions and deploy. Copy the web app URL ending in `/exec`.
10. Update the newsletter URL in the footer and [Google Apps Scripts overview](./README.md) to the new deployment.
11. Run the tests below, then record the new owner and spreadsheet ID here.

If the organization does not allow access by anyone, ask the Workspace administrator which approved public form or backend should receive submissions.

## Test changes

The page shows the same thank-you message for every form submission; it cannot report the Apps Script result. Confirm the sheet contents and **Executions** log to determine whether a row was written. For server-side rejection tests that the browser's input validation or `maxLength` prevents, send the test JSON directly to the deployed `/exec` URL with a POST request. A direct POST does not display the website's thank-you alert; it tests the script's rejection behavior.

### Field limits

- **Over-length input:** Send a 51-character first name or last name (or a 255-character email) directly to the script. Expected: the request is logged as rejected and no row is added. A normal site submission still shows the same thank-you message regardless of the script's result.
- **Formula-like name:** Submit `=1+1` as a first name. Expected: the row contains the name as plain text (with a leading apostrophe in the stored value), not a calculated formula.

### Duplicate email

- Submit the same email twice, then submit it again with different capitalization and surrounding whitespace using a direct request. Expected: only the first submission adds a row; later requests are logged as skipped duplicates and look the same to the user as a new submission.

### Test failure cases

Temporarily use the indicated test setup, submit, then restore the valid setting before continuing:

- **Invalid email:** Send an invalid email directly to the script, bypassing browser email validation. Expected: the request is rejected and logged in **Executions**, no row is added, and no alert email is sent. A normal site submission still shows the same thank-you message regardless of the script result.
- **Over-length name:** Send a name longer than 50 characters directly to the script, bypassing the form's `maxLength`. Expected: the request is rejected and logged in **Executions**, no row is added, and no alert email is sent. A normal site submission still shows the same thank-you message regardless of the script result.
- **Wrong `NEWSLETTER_SPREADSHEET_ID`:** Temporarily set the script property to an invalid ID, then submit a valid form entry. Expected: the site shows its normal thank-you message; no row is added to the intended sheet; **Executions** logs the spreadsheet error; `support@keelworks.org` receives an alert.
- **Missing `Subscribers` tab:** Temporarily rename the tab, then submit a valid form entry. Expected: the site shows its normal thank-you message; no row is added; **Executions** logs the missing-tab error; `support@keelworks.org` receives an alert. Restore the tab name afterward.
- **Permission error:** Temporarily remove the automation account's access to the spreadsheet, then submit a valid form entry. Expected: the site shows its normal thank-you message; no row is added; **Executions** logs the access error; `support@keelworks.org` receives an alert.

Operational alerts are sent by `automation@keelworks.org`; authorize it to send email. If notification delivery itself fails, the notification error is logged in **Executions**. Invalid-email and over-length tests must use direct POST requests because the browser prevents those values in the form; direct requests do not display the website's thank-you alert.

### Deployment updates

After editing `Code.gs`, update the deployed version via **Deploy → Manage deployments → Edit → Version → New version → Deploy**. The live `/exec` URL continues running the old code until the deployment is updated.
