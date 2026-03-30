# Deployment

The website is hosted on a shared hosting server and deployed via FTP. Deployment is automated through GitHub Actions — every push to `main` triggers a build and deploys the output to the server.

## How it works

1. A push to `main` triggers the workflow at [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)
2. GitHub Actions installs dependencies and runs `npm run build`
3. The contents of `dist/` are uploaded to the FTP server via FTPS

## Server details

| Field | Value |
|---|---|
| Host | `premium254.web-hosting.com` |
| Username | stored in GitHub secret `FTP_USERNAME` |
| Password | stored in GitHub secret `FTP_PASSWORD` |
| Remote directory | `/` (root) |

## GitHub Secrets

The FTP credentials are stored as repository secrets in GitHub. To view or update them:

**GitHub repo → Settings → Secrets and variables → Actions**

| Secret | Value |
|---|---|
| `FTP_USERNAME` | FTP account username |
| `FTP_PASSWORD` | FTP account password |

If the secrets are lost or need to be rotated, get the credentials from whoever manages the hosting account on `premium254.web-hosting.com`.

## Files preserved on the server

The following files exist on the server and are never touched by the deployment:

- `.htaccess` — server configuration
- `.ftpquota` — hosting quota file
- `.well-known/` — used for SSL certificate renewal
- `google*.html` — Google domain verification file

## Rollback

To roll back to a previous deployment:

1. Go to **GitHub repo → Actions**
2. Find the last successful deployment run
3. Click **Re-run jobs**

Or revert the offending commit and push to `main` — this will trigger a fresh deployment.

## Previous process (manual)

Before automation was set up in March 2026, deployment was done manually:

1. Run `npm run build` locally
2. Connect to the FTP server via FileZilla
3. Copy the existing files on the server as a backup
4. Upload the contents of `dist/` to replace them
