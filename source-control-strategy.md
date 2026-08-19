# Source-Control Strategy

The canonical delivery branch will be `main`. Every GitHub Pages deployment will be produced from a successful build of `main`; experimental work will use short-lived feature branches named `feature/<area>` and merged only after the production build succeeds.

The repository will keep source code, configuration, documentation, and small accessibility files under version control. Large or frequently replaced media will remain in managed static storage and be referenced by durable URLs, preventing deployment bloat. The project will not commit build output to the source branch because the GitHub Actions workflow will upload the generated static artifact directly to Pages.

Before publishing, Abhinav will connect this working tree to a GitHub repository under his account. The Pages workflow, generated at the deployment phase, will require repository Actions permission to write Pages artifacts. No account action, repository visibility change, push, or publication will occur without his explicit confirmation.
