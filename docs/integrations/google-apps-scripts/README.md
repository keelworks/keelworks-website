# Google Apps Scripts — Overview

The KeelWorks website uses Google Apps Script as a lightweight backend. Scripts are deployed as web apps and called directly from the React frontend. Existing scripts were owned by `mihir-ravindra.adelkar@keelworks.org` as of March 2026; the newsletter replacement will run under `automation@keelworks.org` and send operational failure alerts to `support@keelworks.org`.

> **Warning:** If the owning account is ever deleted, all scripts break. See [how-to-recreate.md](how-to-recreate.md).

---

## Script Inventory

| Feature | Status | Script Name (apps script) | Source File |
|---|---|---|---|
| Newsletter Subscribe | ⚠️ Replacement deployment required | `KeelWorks Newsletter Subscribe` (to be created) | `src/Components/Footer/Footer.jsx` |
| Job Listings (fetch) | ✅ Working | `Job Listings API` | `src/Pages/Careers/Careers.jsx` |
| Job Application (submit) | ⚠️ Needs re-auth | `KeelWorks Job Application Handler` | `src/Pages/Careers/JobApplicationForm.jsx` |
| Volunteer Sign-Up | ⚠️ Needs verification | `Volunteer App Drive API` | `src/Pages/GetInvolved/SignUp/SignUp.jsx` |
| Contact Form | ✅ Working | `Contact Form Handler` | `src/Pages/ContactUs/ContactForm/ContactForm.jsx` |
| Blog Media (YouTube) | ❌ Broken | _(deleted with old account)_ | `src/Pages/Blog/Blog_new.jsx` |

---

## Deployed URLs (as of March 2026)

| Feature | URL |
|---|---|
| Newsletter Subscribe | _Pending replacement deployment; see [setup steps](newsletter-subscribe.md)_ |
| Job Listings | `https://script.google.com/macros/s/AKfycbzEmskmmWo59MhJzsTrJwNGWK9EottKP4CvDNb5F70ZLRJbdSs1Jd1VrjgLQ6r_Ik6CwA/exec` |
| Job Application | `https://script.google.com/macros/s/AKfycbzyLaq4bWvqApKMgJxkoQNu1tZKWLJvVLfYyKqhUvGVBjoyt37zzC2dH7XO2hmG-2pfWA/exec` |
| Volunteer Sign-Up | `https://script.google.com/macros/s/AKfycbyRoPGVv2_M5LQuwcLpzlQtUX1ciR0wScaDaBxczOqnB2qDrSD8y8Tt0FtMJTfiT9In1gA/exec` |
| Contact Form | `https://script.google.com/a/macros/keelworks.org/s/AKfycbwzCrtLdH3DM4wdFf5u3wSBtdbeSLGQQPOKmPcKnddDiCq1lcYjRgsFSVK0PIE_opsK/exec` |
| Blog Media | ❌ Needs recreation |

---

## How Scripts Are Called

All scripts receive HTTP POST requests from the browser. There are two patterns used:

### Pattern A — JSON body (newsletter subscribe)
```js
fetch(url, {
  method: "POST",
  body: JSON.stringify({ firstName, lastName, email }),
  mode: "no-cors",
});
```
Script reads: `JSON.parse(e.postData.contents)`

### Pattern B — FormData (job application, volunteer sign-up, contact form)
```js
const data = new FormData();
data.append("fieldName", value);
fetch(url, { method: "POST", body: data });
```
Script reads: `e.parameter.fieldName`

> `mode: "no-cors"` is used for scripts that only write data (subscribe, contact). The browser cannot inspect the response in this mode, so a resolved fetch does not prove that the script wrote the data; verify the destination sheet and Apps Script execution logs. The newsletter form intentionally shows the same thank-you message for every submission, including duplicates and server-side rejections.

---

## Detailed Docs

- [Newsletter Subscribe](newsletter-subscribe.md)
- [Job Listings](job-listings.md)
- [Job Application](job-application.md)
- [Volunteer Sign-Up](volunteer-signup.md)
- [Contact Form](contact-form.md)
- [Blog Media](blog-media.md)
- [How to Recreate a Broken Script](how-to-recreate.md)
