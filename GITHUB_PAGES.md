# GitHub Pages Deployment

The repository includes a GitHub Actions workflow for a project-site deployment. After pushing the project to GitHub, open **Settings → Pages**, set the source to **GitHub Actions**, and push to `main`. The workflow sets `VITE_BASE_PATH` to the repository path so internal build asset paths remain correct at `https://<owner>.github.io/<repository>/`.

For a root user or organization site named `<owner>.github.io`, replace the workflow value `/${{ github.event.repository.name }}/` with `/` before the first deployment.

The public interface uses anchor navigation rather than server routes, so it does not require a server rewrite rule on GitHub Pages.

## Persistent content and the Pages fallback

The portfolio now has a persistent database-backed content model for research/work items, profile records, and site settings. The app deployment uses typed procedures under `/api/trpc` to load those records at runtime. **GitHub Pages cannot host that database server or run the `/api/trpc` endpoint.**

For that reason, the interface retains an embedded, versioned static snapshot of approved portfolio content. When the database endpoint is available, the public explorer displays persistent records; when it is not available—as on GitHub Pages—it renders the static snapshot instead. This preserves a fully usable, read-only portfolio on Pages while keeping the database-backed deployment as the source of truth for managed content.

Before publishing a meaningful content update to GitHub Pages, update the approved static snapshot in the repository alongside the database record. Do not place database credentials, service tokens, or admin-only endpoints in the GitHub Pages build.
