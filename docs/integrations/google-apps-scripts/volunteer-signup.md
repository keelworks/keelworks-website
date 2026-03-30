# Volunteer Sign-Up

Handles volunteer applications submitted via the Get Involved page.

## Status
⚠️ Needs verification (script exists — `Volunteer App Drive API` — but URL and auth need to be confirmed)

## To Verify
1. Open `Volunteer App Drive API` in [script.google.com](https://script.google.com)
2. Go to **Deploy** → **Manage deployments**
3. Check the URL matches: `https://script.google.com/macros/s/AKfycbyRoPGVv2_M5LQuwcLpzlQtUX1ciR0wScaDaBxczOqnB2qDrSD8y8Tt0FtMJTfiT9In1gA/exec`
4. If URL changed, update `SIGNUP_SHEET_MASTER_URL` in `src/Pages/GetInvolved/SignUp/SignUp.jsx` line 351
5. Re-authorize if needed (same steps as job application)

## Frontend
- **File:** `src/Pages/GetInvolved/SignUp/SignUp.jsx`
- **Trigger:** User submits volunteer application
- **Method:** POST with `FormData`
- **Note:** There is also a `TESTING_URL` (line 347) that is unused — can be removed

## Script
- **Project Name:** `Volunteer App Drive API`
- **URL:** `https://script.google.com/macros/s/AKfycbyRoPGVv2_M5LQuwcLpzlQtUX1ciR0wScaDaBxczOqnB2qDrSD8y8Tt0FtMJTfiT9In1gA/exec`
