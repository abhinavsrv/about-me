# Folio 2027 — Portfolio Planning Document

## Purpose and intended audience

Folio 2027 will be a large, dark luxury personal portfolio for **Abhinav Srivastava**, an undergraduate researcher in machine learning. It will serve three audiences at once: prospective research collaborators who need an immediate sense of fit, internship teams who need evidence of technical depth and execution, and peers who want to understand the thinking behind the work.

The site will remain a **static frontend** so that it can be built into deployable files and hosted through GitHub Pages. The supplied portrait is an approved personal asset and will appear as an editorial image—not a generic profile thumbnail—within the homepage introduction and About narrative.

## Success criteria

| Area | Success condition |
| --- | --- |
| First impression | Within one screen, visitors understand who the portfolio represents, the kind of work shown, and the clearest next action. |
| Credibility | Each featured project communicates its context, role, process, outcomes, and relevant links without invented claims or testimonials. |
| Usability | Navigation, work discovery, contact pathways, and downloadable materials work by pointer, keyboard, and mobile touch. |
| Visual identity | The Obsidian Precision direction is unmistakable across typography, color, image treatment, motion, and layout. |
| Ownership | Personal information, projects, social links, and images are driven by clear content files so they can be updated without redesigning the site. |
| Deployment | One production build outputs a Pages-ready static artifact with a configurable repository base path. |

## Working assumptions

Until personal copy and project records are supplied, the site will use clearly identified structural placeholders rather than fabricated achievements, client relationships, results, awards, or testimonials. The current build will be designed to accept the owner’s name, professional title, biography, résumé, contact email, social links, and project details in a structured content layer.

## Deployment decision

The project will use Vite’s static build and a GitHub Actions deployment workflow. For a repository site, Vite requires a repository-specific base path such as `/<REPOSITORY>/`; for a user or organization root site, it uses `/`. GitHub Pages will publish the built static artifact through its Actions source. This approach preserves the requested GitHub Pages compatibility while retaining the React interface and visual system.[1] [2]

## Fifty-phase roadmap

| Phase | Focus | Planned outcome |
| ---: | --- | --- |
| 1 | Project context and constraints | Static frontend, supplied portrait, and GitHub Pages requirements confirmed. |
| 2 | Repository baseline | Existing scaffold and deployment baseline inspected. |
| 3 | Goals and success criteria | Audience, value proposition, and measurable definition of done documented. |
| 4 | Deployment architecture | Pages-compatible build, base-path, and workflow strategy selected. |
| 5 | Scaffold alignment | Static project template aligned to the portfolio’s needs. |
| 6 | Source-control conventions | Main branch, documentation, and deployment handoff conventions established. |
| 7 | Information architecture | Page, section, and route map defined. |
| 8 | Brand system | Conservatory Editorial direction committed in `ideas.md`. |
| 9 | Design tokens | Typography, color, spacing, and elevation system established. |
| 10 | Content inventory | Personal profile inputs, projects, and links gathered into a content model. |
| 11 | Asset strategy | Portrait placement, generated graphics, and media rules documented. |
| 12 | Responsive foundations | Mobile-to-desktop layout principles designed. |
| 13 | Navigation patterns | Header, navigation rail, footer, and route escape paths designed. |
| 14 | Interface primitives | Buttons, labels, cards, panels, and status patterns designed. |
| 15 | Application shell | Global layout, theme tokens, and shared providers implemented. |
| 16 | Homepage hero | Opening statement, portrait treatment, and primary action implemented. |
| 17 | About narrative | Biography and working approach section implemented. |
| 18 | Featured work | Curated work overview implemented. |
| 19 | Work filtering | Accessible project category and discovery interactions implemented. |
| 20 | Project detail template | Reusable individual project page structure implemented. |
| 21 | Case-study components | Context, process, outcomes, media, and next-project modules implemented. |
| 22 | Experience timeline | Career and collaboration chronology implemented. |
| 23 | Skills and capabilities | Tools, disciplines, and strengths section implemented. |
| 24 | Writing or insights | Notes and thinking section implemented when source content is available. |
| 25 | Résumé area | Résumé summary and download link area implemented. |
| 26 | Contact section | Clear collaboration and inquiry pathway implemented. |
| 27 | Static contact behavior | GitHub Pages-safe `mailto` or approved external form behavior implemented. |
| 28 | Theme support | Accessible light and dark appearances implemented. |
| 29 | Motion system | Responsive motion plus reduced-motion support implemented. |
| 30 | Device refinement | Phone and tablet-specific layout refinement completed. |
| 31 | Search and sharing metadata | Title, description, canonical, and social preview support added. |
| 32 | Semantic accessibility | Landmark, heading, image, and control semantics audited. |
| 33 | Keyboard interaction | Focus order, focus visibility, and control behavior audited. |
| 34 | Asset optimization | Images, fonts, and static media optimized for page speed. |
| 35 | Pages base path | Build accepts root-site and repository-site GitHub Pages bases. |
| 36 | Routing resilience | Direct-link and refresh strategy accommodates static hosting. |
| 37 | Error resilience | 404 and meaningful empty-state experiences implemented. |
| 38 | Analytics readiness | Optional privacy-conscious analytics hook documented and isolated. |
| 39 | Content model | Projects and profile data made easy to maintain. |
| 40 | Content population | Owner-approved portfolio records and copy populated. |
| 41 | Personal assets | Supplied portrait and approved external profile links integrated. |
| 42 | Build validation | Production build, type, and formatting checks completed. |
| 43 | Journey testing | Navigation, work discovery, theme, and contact journeys tested. |
| 44 | Visual review | Desktop, tablet, and mobile composition reviewed. |
| 45 | Quality audit | Performance, accessibility, and SEO checks reviewed. |
| 46 | Refinement | Issues and content-hierarchy improvements resolved. |
| 47 | Actions workflow | GitHub Pages deployment workflow added. |
| 48 | Pages configuration | Repository hosting settings prepared for the owner. |
| 49 | Deployment verification | Hosted result and maintenance steps documented. |
| 50 | Delivery | Final version, source, and operational handoff delivered. |

## Required owner inputs before content population

The next content-gathering milestone will require the owner’s preferred name, one-line professional title, location or availability statement if desired, a short biography, a contact email, social and code profile links, résumé file or text, and three to six projects. Each project should include its title, timeframe, role, short description, key responsibilities, outcome or learning, technologies or methods, and a live or source link if one may be published.

## References

[1]: https://vite.dev/guide/static-deploy "Vite — Deploying a Static Site"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages "GitHub Docs — Using custom workflows with GitHub Pages"
