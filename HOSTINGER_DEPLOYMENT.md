# Hostinger Staging Deployment

Use the GitHub integration as the primary deployment source.

1. Hostinger hPanel -> Websites -> Add Website -> Deploy Web App.
2. Choose Import Git Repository.
3. Connect/select `davidharbour2024/zs`.
4. Branch: `main`.
5. Framework: Next.js (auto-detected).
6. Node.js: `22.x`.
7. Build command: `npm run build`.
8. Start command: `npm run start`.
9. Add environment variable `NEXT_PUBLIC_SITE_URL` with the temporary Hostinger domain.
10. Deploy.
11. Verify homepage and `/api/health`.

After GitHub is connected, future deployment should come from committed/merged repository code instead of repeatedly uploading ZIP files.
