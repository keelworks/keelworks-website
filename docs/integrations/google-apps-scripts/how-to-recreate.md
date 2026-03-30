# How to Recreate a Broken Google Apps Script

Use this guide whenever a script stops working — most commonly when the owning account is deleted or loses access.

---

## Step 1 — Identify which script is broken

Check the browser console (F12 → Console) for network errors, or open the Apps Script dashboard at [script.google.com](https://script.google.com) and look at the **Executions** log for errors.

Cross-reference with the [script inventory](README.md#script-inventory) to find the affected file.

---

## Step 2 — Check if the script still exists

Go to [script.google.com](https://script.google.com) and search for the script by name. If it exists but is just unauthorized:

1. Open the script
2. Click **Run** on any function
3. Authorize with your `@keelworks.org` account (click **Advanced** → **Go to [name] (unsafe)** if prompted)
4. Go to **Deploy** → **Manage deployments** → confirm URL is correct and access is **Anyone**

If the script is gone entirely, continue to Step 3.

---

## Step 3 — Recreate the script

1. Go to [script.google.com](https://script.google.com) → **New project**
2. Name it clearly (e.g. `KeelWorks Contact Form Handler`)
3. Paste the script code from the relevant doc:
   - [Newsletter Subscribe](newsletter-subscribe.md)
   - [Contact Form](contact-form.md)
   - [Blog Media](blog-media.md)
4. Replace `YOUR_SHEET_ID` with the ID from the corresponding Google Sheet
   - Sheet ID is in the URL: `docs.google.com/spreadsheets/d/`**`SHEET_ID`**`/edit`

---

## Step 4 — Deploy as a web app

1. Click **Deploy** → **New deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description:** anything descriptive
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Copy the web app URL

---

## Step 5 — Update the frontend

Find the hardcoded URL in the source file (see [README.md](README.md#script-inventory) for file locations) and replace it with the new URL.

---

## Step 6 — Test

- Open the website locally (`npm run dev`)
- Submit the form
- Check the Google Sheet for a new row
- Check Apps Script **Executions** log for any errors

---

## Important Notes

- **Always use a shared org account** (e.g. `mihir-ravindra.adelkar@keelworks.org`) to own scripts — never a personal account. This prevents scripts from breaking when someone leaves.
- **`mode: "no-cors"`** must be used on any fetch that only writes data (subscribe, contact, sign-up). You cannot read the response in this mode — use try/catch and assume success.
- **Scripts that return data** (job listings, blog media) must NOT use `mode: "no-cors"` — the response needs to be readable.
- **`muteHttpExceptions: true`** is a Google Apps Script server-side option. It has no effect when passed as a browser `fetch` option — do not use it in React code.
