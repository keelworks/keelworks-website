# KeelWorks Website Documentation

This folder contains technical documentation for maintainers and future developers of the KeelWorks website.

## Structure

```
docs/
├── README.md                          ← You are here
├── deployment/
│   └── README.md                      ← Deployment process + FTP setup
└── integrations/
    └── google-apps-scripts/
        ├── README.md                  ← Overview of all scripts + status
        ├── newsletter-subscribe.md    ← Footer subscribe form
        ├── job-listings.md            ← Careers page job listings
        ├── job-application.md         ← Job application form
        ├── volunteer-signup.md        ← Volunteer sign-up form
        ├── contact-form.md            ← Contact us form
        ├── blog-media.md              ← Blog page YouTube/media feed
        └── how-to-recreate.md         ← Step-by-step guide if a script breaks
```

## Quick Reference

- **Deployment**: Push to `main` — GitHub Actions builds and deploys automatically. See [deployment/README.md](deployment/README.md).
- **Forms & integrations**: The website uses **Google Apps Script** as a lightweight backend for all form submissions and data fetching. If any form stops working, start with [integrations/google-apps-scripts/README.md](integrations/google-apps-scripts/README.md).

## History

In early 2026, the Google account of a former team member (Thomas Garrod) was deleted. This broke several Google Apps Script deployments that were owned by that account. The newsletter subscribe, contact form, and blog media scripts had to be recreated. See [how-to-recreate.md](integrations/google-apps-scripts/how-to-recreate.md) to handle this situation in the future.
