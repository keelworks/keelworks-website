# Job Application Handler

Receives job applications (including resume file upload) submitted via the Careers page.

## Status
⚠️ Needs re-authorization (script exists but lost auth when original owner's account was deleted)

## To Fix
1. Open `KeelWorks Job Application Handler` in [script.google.com](https://script.google.com)
2. Click **Run** on any function to trigger the authorization prompt
3. Authorize with your `@keelworks.org` account
4. Go to **Deploy** → **Manage deployments** → verify the URL matches the one below
5. Ensure **Who has access** is set to **Anyone**

## Frontend
- **File:** `src/Pages/Careers/JobApplicationForm.jsx`
- **Trigger:** User submits the job application form
- **Method:** POST with `FormData`
- **Special:** Resume file is converted to base64 before sending

## Fields Sent
| FormData Key | Description |
|---|---|
| `firstName`, `middleName`, `lastName` | Applicant name |
| `fullName` | Combined full name |
| `birthDate` | Date of birth |
| `address1`, `address2`, `city`, `state`, `zip` | Address |
| `email` | Email address |
| `phone` | Phone number |
| `linkedin` | LinkedIn profile URL |
| `position` | Job title (from URL slug) |
| `source` | How they heard about the role |
| `startDate` | Available start date |
| `fileContent` | Base64-encoded resume file |
| `mimeType` | Resume file MIME type |
| `fileName` | Resume file name |
| `coverLetter` | Cover letter text |

## Script
- **Owner:** `mihir-ravindra.adelkar@keelworks.org` (needs re-auth)
- **Project Name:** `KeelWorks Job Application Handler`
- **URL:** `https://script.google.com/macros/s/AKfycbzyLaq4bWvqApKMgJxkoQNu1tZKWLJvVLfYyKqhUvGVBjoyt37zzC2dH7XO2hmG-2pfWA/exec`
