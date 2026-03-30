# Contact Form

Handles messages submitted via the Contact Us page.

## Status
❌ Broken — original script was deleted with former team member's account. Needs recreation.

## How to Recreate
1. Create a new Google Sheet with columns: `First Name`, `Last Name`, `Email`, `Subject`, `Message`, `Timestamp`
2. Create a new Apps Script project at [script.google.com](https://script.google.com)
3. Use the script code below, replacing `YOUR_SHEET_ID`
4. Deploy as a web app: Execute as **Me**, Who has access **Anyone**
5. Copy the deployed URL and update `src/Pages/ContactUs/ContactForm/ContactForm.jsx` line 31

## Frontend
- **File:** `src/Pages/ContactUs/ContactForm/ContactForm.jsx`
- **Method:** POST with `FormData`
- **Note:** Currently uses `response.ok` check which will fail due to CORS — should be updated to use `mode: "no-cors"` + try/catch (same fix applied to newsletter subscribe)

## Fields Sent
| FormData Key | Description |
|---|---|
| `firstName` | First name |
| `lastName` | Last name |
| `email` | Email address |
| `subject` | Message subject |
| `message` | Message body |

## Script Code to Recreate
```js
function doPost(e) {
  const ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  const sheet = ss.getSheetByName("Sheet1");

  sheet.appendRow([
    e.parameter.firstName,
    e.parameter.lastName,
    e.parameter.email,
    e.parameter.subject,
    e.parameter.message,
    new Date()
  ]);

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## History
- Original script owned by former team member — deleted in early 2026
- Not yet recreated as of March 30, 2026
