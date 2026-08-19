# GitHub Pages Architecture

## Selected implementation strategy

The portfolio will remain a **static React and Vite application**. A GitHub Actions workflow will install dependencies with `pnpm`, build the Vite client, upload the static output as a Pages artifact, and deploy it to GitHub Pages. This is the appropriate deployment model because Vite requires a build step before its files are hosted.[1] [2]

The site will expose a single configurable `VITE_BASE_PATH`. Local development will use `/`; GitHub Pages will pass the repository-aware base path during the production build. This avoids broken JavaScript, CSS, image, and internal links whether the site is published as a repository page (`https://abhinavsrv.github.io/<repository>/`) or later moved to the root GitHub Pages repository (`https://abhinavsrv.github.io/`). Vite documents these distinct base requirements.[1]

Project exploration will use an accessible static-content model with in-page anchors and hash-based detail state where needed. This is deliberate: GitHub Pages serves static artifacts and does not provide a server-side SPA fallback, so the approach preserves refresh and deep-link reliability without relying on fragile redirect workarounds. The final project will still include an explicit `404.html` page for unknown paths.

## Delivery boundary

The project will include the Pages workflow and concise configuration instructions, but publication will remain under Abhinav’s control in GitHub. Before he enables Pages, he will choose **GitHub Actions** as the repository’s publishing source and push the workflow to the default branch.[1] [2]

## References

[1]: https://vite.dev/guide/static-deploy "Vite — Deploying a Static Site"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages "GitHub Docs — Using custom workflows with GitHub Pages"

