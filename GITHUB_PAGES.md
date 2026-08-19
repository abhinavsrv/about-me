# GitHub Pages Deployment

The repository includes a GitHub Actions workflow for a project-site deployment. After pushing the project to GitHub, open **Settings → Pages**, set the source to **GitHub Actions**, and push to `main`. The workflow sets `VITE_BASE_PATH` to the repository path so internal build asset paths remain correct at `https://<owner>.github.io/<repository>/`.

For a root user or organization site named `<owner>.github.io`, replace the workflow value `/${{ github.event.repository.name }}/` with `/` before the first deployment.

The repository is a static React/Vite project. The page uses anchor navigation rather than server routes, so it does not require a server rewrite rule on GitHub Pages.

