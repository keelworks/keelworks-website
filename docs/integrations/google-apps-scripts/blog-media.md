# Blog Media (YouTube Feed)

Fetches YouTube video rows for the Media tab on the Blog page.

## Status
❌ Broken — original script was deleted with former team member's account. Needs recreation.

## How to Recreate
1. Create a new Google Sheet with columns: `title`, `videoId` (YouTube video ID, not full URL)
2. Create a new Apps Script project at [script.google.com](https://script.google.com)
3. Use the script code below, replacing `YOUR_SHEET_ID`
4. Deploy as a web app: Execute as **Me**, Who has access **Anyone**
5. Copy the deployed URL and update `SHEET_URL` in `src/Pages/Blog/Blog_new.jsx` line 17

## Frontend
- **File:** `src/Pages/Blog/Blog_new.jsx`
- **Constant:** `SHEET_URL` (line 17)
- **Trigger:** Page load when Media tab is active
- **Method:** GET
- **Response:** JSON array of video objects

## Script Code to Recreate
```js
function doGet() {
  const ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  const sheet = ss.getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();

  const headers = data[0];
  const rows = data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Note on Blog Articles
Blog articles (not videos) are fetched from a separate WordPress instance at `https://blog.keelworks.org/wp-json/wp/v2/posts?_embed`. This is independent of Google Apps Script and is working separately.

## History
- Original script owned by former team member — deleted in early 2026
- Not yet recreated as of March 30, 2026
