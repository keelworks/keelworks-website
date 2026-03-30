# Job Listings

Fetches open job/volunteer opportunities and displays them on the Careers page.

## Status
✅ Working

## Frontend
- **File:** `src/Pages/Careers/Careers.jsx`
- **Trigger:** Page load (useEffect)
- **Method:** GET
- **Response:** JSON array of job objects

## Script
- **Owner:** `mihir-ravindra.adelkar@keelworks.org`
- **Project Name:** `Job Listings API` (in Google Apps Script)
- **URL:** `https://script.google.com/macros/s/AKfycbzEmskmmWo59MhJzsTrJwNGWK9EottKP4CvDNb5F70ZLRJbdSs1Jd1VrjgLQ6r_Ik6CwA/exec`
- **Google Sheet ID:** `1lEuDkfigGllE9ZOvocHix4r2ZcYXwNVzhQ1DQHZy68U`
- **Tab:** `Sheet1`

## Sheet Column Structure
The script uses the first row as headers and returns all rows as JSON objects. The frontend (`Careers.jsx`) is flexible about column names but expects these fields:

| Column Header | Purpose | Fallback |
|---|---|---|
| `Title` / `Job Title` / `Role` | Job title | `"Role (title pending)"` |
| `Location` / `City` | Location | `"Remote"` |
| `Type` / `Role Type` | Role type | `"Volunteer"` |
| `Description` / `Job Description` | Full description | `""` |
| `Status` / `State` | **Must be `open`** to display | hidden |
| `FormURL` / `Form URL` / `Apply Link` | Link for Apply Now button | alert shown |

> Only rows where `Status` = `open` (case-insensitive) are shown on the page.

## Script Code
```js
function doGet(e) {
  const SHEET_ID = '1lEuDkfigGllE9ZOvocHix4r2ZcYXwNVzhQ1DQHZy68U';
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();

  if (data.length === 0) {
    return ContentService
      .createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const headers = data[0];
  const jsonData = [];

  for (let i = 1; i < data.length; i++) {
    let row = {};
    for (let j = 0; j < headers.length; j++) {
      let value = data[i][j];
      if (value instanceof Date) value = value.toISOString();
      row[headers[j]] = value || '';
    }
    jsonData.push(row);
  }

  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  return doGet(e);
}
```
