# GitHub Pages Deployment

The repository includes a GitHub Actions workflow for a project-site deployment. After pushing the project to GitHub, open **Settings → Pages**, set the source to **GitHub Actions**, and push to `main`. The workflow sets `VITE_BASE_PATH` to the repository path so internal build asset paths remain correct at `https://<owner>.github.io/<repository>/`.

For a root user or organization site named `<owner>.github.io`, replace the workflow value `/${{ github.event.repository.name }}/` with `/` before the first deployment.

The public interface now combines homepage anchors with routed Research, Profile, and Contact pages. `client/public/404.html` restores a requested client-side route before the application initializes, so direct links such as `/research` continue to work on GitHub Pages without a server rewrite rule. Keep this file in the Pages build whenever routes are added.

The three routed pages also set their own document title and description after client initialization. The static `index.html` metadata remains the fallback for the homepage and for clients that do not execute JavaScript.

The build now writes static HTML shells for the routed editorial pages and flagship case studies. When GitHub Actions runs, `VITE_SITE_URL` is derived from the repository owner and name, allowing those route shells to include a canonical URL and Open Graph metadata. For a root user or organization site, set `VITE_SITE_URL` to the root site URL alongside the base-path change described above.

## Publish this portfolio on GitHub Pages

The repository is prepared for a **project site** such as `https://abhinavsrv.github.io/<repository-name>/`. Use the following sequence after the code is on GitHub.

1. Push the current branch to the repository's `main` branch. The included `.github/workflows/deploy-pages.yml` workflow is triggered by that push.
2. In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not select a branch-based Pages source; the workflow creates the deployable static artifact.
3. Open the repository's **Actions** tab and wait for the **Deploy GitHub Pages** workflow to complete. If the run requests approval, approve the deployment in GitHub's Pages environment.
4. Return to **Settings → Pages** to copy the published URL. Check the homepage, `/research`, `/outputs`, `/profile`, `/contact`, and a case-study link in a private browser window.

For a local production check before pushing, use the project-site base path:

```bash
VITE_BASE_PATH=/YOUR-REPOSITORY-NAME/ \
VITE_SITE_URL=https://YOUR-GITHUB-USER.github.io/YOUR-REPOSITORY-NAME \
pnpm build
```

### Required repository checks

| Check | Required state | Why it matters |
|---|---|---|
| Workflow file | `.github/workflows/deploy-pages.yml` committed to `main` | Builds and publishes the static artifact. |
| Pages source | **GitHub Actions** | Lets the workflow control routing and base-path handling. |
| Repository visibility | Public, or Pages-enabled on your GitHub plan | Determines whether visitors can access the portfolio. |
| `VITE_BASE_PATH` | `/<repository-name>/` for a project site | Keeps assets and internal links working after deployment. |
| `client/public/404.html` | Included in the build | Restores direct links to client-side routes on Pages. |

### Common deployment fixes

If styles or images are missing, verify that the repository name matches the `VITE_BASE_PATH` passed by the workflow. If a direct page link returns a 404, confirm `client/public/404.html` remains committed. If data does not load on Pages, that is expected for runtime-only database content: Pages uses the reviewed static fallback rather than the `/api/trpc` server endpoint.

## Persistent content and the Pages fallback

The portfolio now has a persistent database-backed content model for research/work items, profile records, and site settings. The app deployment uses typed procedures under `/api/trpc` to load those records at runtime. **GitHub Pages cannot host that database server or run the `/api/trpc` endpoint.**

For that reason, the interface retains an embedded, versioned static snapshot of approved portfolio content. When the database endpoint is available, the public explorer displays persistent records; when it is not available—as on GitHub Pages—it renders the static snapshot instead. This preserves a fully usable, read-only portfolio on Pages while keeping the database-backed deployment as the source of truth for managed content.

Before publishing a meaningful content update to GitHub Pages, update the approved static snapshot in the repository alongside the database record. Do not place database credentials, service tokens, or admin-only endpoints in the GitHub Pages build.
