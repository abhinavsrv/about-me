# Portfolio Persistence Architecture

The portfolio will persist `projects`, `research_records`, `experiences`, `education_records`, `credentials`, `site_settings`, and optional `external_links`. Each record will have a stable identifier, ordering field, publication state, source reference, summary metadata, tags, and timestamps so the public interface can be updated without rewriting page components.

The database-backed application requires a server runtime for authenticated management and data access. **GitHub Pages cannot run that server**, so the public GitHub Pages build must use a generated static content snapshot. The same approved records will be exported to a versioned JSON file during a build or editorial update. The database-backed deployment remains the live management source; the Pages deployment remains a portable, read-only portfolio representation.

| Surface | Data source | Capability |
|---|---|---|
| Database-backed portfolio | Persistent database and application server | Live content updates and authenticated management |
| GitHub Pages portfolio | Versioned static content snapshot | Public read-only portfolio with no runtime database connection |

This dual path avoids exposing database credentials to the browser and preserves the existing GitHub Pages workflow.
