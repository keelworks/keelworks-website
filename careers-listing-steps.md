Perfect! Now that you have the Google Sheet, let's create a new Google Apps Script connected to it. Here's how to fix this:

## Step-by-Step Solution

### 1. **Open the Apps Script Editor**
- Open your Google Sheet
- Go to **Extensions → Apps Script**
- This will open a new tab with the script editor

### 2. **Replace the Default Code**
Delete any existing code and paste this:

```javascript
function doGet(e) {
  try {
    // Connect to your specific sheet
    const SHEET_ID = '1lEuDkfigGllE9ZOvocHix4r2ZcYXwNVzhQ1DQHZy68U';
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName('Sheet1'); // Change if your sheet has a different name
    
    // Get all data
    const data = sheet.getDataRange().getValues();
    
    if (data.length === 0) {
      return ContentService
        .createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // First row contains headers
    const headers = data[0];
    const jsonData = [];
    
    // Convert rows to objects
    for (let i = 1; i < data.length; i++) {
      let row = {};
      for (let j = 0; j < headers.length; j++) {
        // Clean up the values
        let value = data[i][j];
        if (value instanceof Date) {
          value = value.toISOString();
        }
        row[headers[j]] = value || '';
      }
      jsonData.push(row);
    }
    
    // Log for debugging
    console.log(`Returning ${jsonData.length} rows`);
    
    // Return as JSON
    return ContentService
      .createTextOutput(JSON.stringify(jsonData))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        error: error.toString(),
        message: 'Failed to fetch data from sheet'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests (for CORS)
function doPost(e) {
  return doGet(e);
}

// Test function - run this to test if it works
function test() {
  const result = doGet();
  const content = result.getContent();
  console.log('Response content:', content);
  
  try {
    const parsed = JSON.parse(content);
    console.log('Number of jobs:', parsed.length);
    if (parsed.length > 0) {
      console.log('First job:', parsed[0]);
    }
  } catch (e) {
    console.error('Failed to parse JSON:', e);
  }
}
```

### 3. **Save and Test**
1. Click the **💾 Save** button (or Ctrl+S)
2. Name your project (e.g., "Job Listings API")
3. Click on the `test` function in the dropdown and click **▶️ Run**
4. It will ask for permissions - grant them
5. Check the console (View → Logs) to see if it's working

### 4. **Deploy the Script**
1. Click **Deploy → New Deployment**
2. Click the **gear ⚙️** → Select **Web app**
3. Configure:
   - **Description**: "Job Listings API v1"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **IMPORTANT**: Copy the Web app URL (it will look like `https://script.google.com/macros/s/AKfycb.../exec`)

### 5. **Update Your React Component**
Replace the old URL in your React component with the new one:

```javascript
useEffect(() => {
  fetch("YOUR_NEW_URL_HERE") // Replace with your new deployment URL
    .then((res) => res.json())
    .then((data) => {
      console.log("Raw data from API:", data);
      
      const normalized = (Array.isArray(data) ? data : []).map(normalizeRow);
      console.log("Normalized data:", normalized);
      
      // Check what status values you actually have
      const statuses = normalized.map(j => j.Status);
      console.log("All status values:", [...new Set(statuses)]);
      
      // You might need to adjust this filter based on actual status values
      const openJobs = normalized.filter((j) => {
        const status = (j.Status || '').toLowerCase().trim();
        // Include jobs that are "open" or have no status
        return status === 'open' || status === '' || status === 'active';
      });
      
      console.log("Filtered jobs:", openJobs);
      setJobs(openJobs);
    })
    .catch((err) => {
      console.error("Error fetching job listings:", err);
    })
    .finally(() => setLoading(false));
}, []);
```

### 6. **Check Your Sheet Structure**
Look at your Google Sheet and make sure:
- The first row has column headers
- There's a "Status" column with "Open" values (or adjust the filter in your code)
- The column names match what your code expects (Title, Location, Type, Description, Status, FormURL)

### 7. **Troubleshooting**
If it's still not working:

**A. Test the API directly:**
- Open the deployment URL in your browser
- You should see JSON data

**B. Check the logs:**
- In Apps Script editor, go to **View → Logs**
- Run the `test()` function to see what data is being returned

**C. Verify sheet access:**
- Make sure the sheet is accessible (not private)
- The script has permission to read it

**D. Update the sheet name if needed:**
```javascript
// If your sheet tab is named something other than 'Sheet1'
const sheet = spreadsheet.getSheetByName('Your Tab Name Here');
```

Let me know what happens when you deploy the new script! Share any error messages you see, and I can help you debug further.