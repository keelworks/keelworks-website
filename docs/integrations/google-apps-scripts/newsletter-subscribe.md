# Newsletter Subscribe

Allows visitors to subscribe via the footer form on every page.

## Status
✅ Working (recreated March 2026)

## Frontend
- **File:** `src/Components/Footer/Footer.jsx`
- **Trigger:** User submits email in the "Let's Connect!" footer form
- **Method:** POST with JSON body `{ email: "..." }`
- **Mode:** `no-cors` (write-only, response not read)

## Script
- **Owner:** `mihir-ravindra.adelkar@keelworks.org`
- **URL:** `https://script.google.com/macros/s/AKfycbyOKVVVZPGJWOTntJ_uwlPJrdVNe6LET_VMSIJHZUtXki8qR6ZTiKso4UEZs8n0JCHp/exec`
- **Google Sheet:** `Newsletter subscribe KeelWorks Main Site`
  - Sheet ID: `1Wrs2c3voInmDLwPEVCypfLPMon7jPhff2juB8oahBvA`
  - Tab: `Sheet1`
  - Columns: `email`, `timestamp`

## Script Code
```js
function doPost(e) {
  const { email } = JSON.parse(e.postData.contents);

  const ss = SpreadsheetApp.openById("1Wrs2c3voInmDLwPEVCypfLPMon7jPhff2juB8oahBvA");
  const sheet = ss.getSheetByName("Sheet1");

  sheet.appendRow([email, new Date()]);

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## History
- Original script was owned by a former team member whose account was deleted in early 2026
- Recreated March 30, 2026 by Mihir Adelkar
- Frontend was also fixed at the same time: switched from `FormData` to `JSON.stringify`, added `mode: "no-cors"`, and wrapped in try/catch
