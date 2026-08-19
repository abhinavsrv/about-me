# Portfolio Improvement Audit

## Scope and evaluation basis

This audit reviews the current **Home**, **Research Atlas**, **Profile**, and **Contact** routes at desktop and mobile breakpoints, the current GitHub Pages fallback strategy, and the latest production build output. The portfolio already has a distinctive Obsidian Precision identity: the research-first language, dark technical field, portrait treatment, and information hierarchy are coherent. The recommendations below focus on the opportunities most likely to improve **research credibility, conversion, accessibility, discoverability, performance, and long-term maintainability**.

> **Priority rule:** Address the first four items before adding more visual polish. They improve the site’s usefulness for research supervisors, recruiters, and collaborators rather than simply making it look busier.

| Rank | Improvement | Primary gain | Effort | Recommended sequence |
|---:|---|---|---|---|
| 1 | Turn work cards into evidence-rich case studies | Credibility and depth | High | First major build |
| 2 | Make the primary calls to action route-specific | Conversion and clarity | Low | Immediate |
| 3 | Reduce the repeated content architecture | Navigation and information value | Medium | After case-study design |
| 4 | Add a publication, writing, and artifact record | Academic trust | Medium | As materials become available |
| 5 | Improve mobile typography and interaction targets | Accessibility | Medium | Immediate polish pass |
| 6 | Ship route-specific static SEO previews | Discoverability and sharing | Medium | Before GitHub Pages launch |
| 7 | Reduce initial JavaScript and image cost | Performance | Medium | Before broad outreach |
| 8 | Strengthen active navigation and wayfinding | Usability | Low | Immediate |
| 9 | Establish a disciplined image system | Editorial consistency | Medium | Next visual pass |
| 10 | Instrument meaningful portfolio actions | Iteration quality | Low | After launch |

---

## 1. Convert the project grid into evidence-rich case studies

### Current observation

The Research Atlas gives each project a strong title, concise summary, tags, and an expandable note. However, the most consequential claims—including the Mental-RoBERTa accuracy reference and applied system descriptions—remain several clicks or scroll positions away from a clear account of the question, method, evidence, limitations, and source artifact. The card layout reads as a polished index rather than an auditable record of work.

### Why this matters

For an undergraduate researcher, a reviewer is usually looking for **how you thought**, not merely what you named. The portfolio currently communicates range very well, but it gives limited proof of technical judgment. A project page that states the research question, data boundary, model choice, evaluation setup, result, and limitation would make the work much more credible without adding unverified claims.

### Genuine improvement

Create a reusable `/work/:slug` case-study route for the three strongest pieces first: **Mental-RoBERTa**, **Alignment-Free Dense Distillation**, and **Region Infinity Model Systems**. Use the same five-part record every time: “Context,” “Method,” “Evidence,” “What I learned,” and “Scope / limitation.” Add source links only where they are available and approved, such as a repository, paper, demo, or credential. Do not invent a benchmark, a dataset, or a publication status.

### Definition of done

A recruiter should be able to open any flagship project and understand the contribution in under two minutes, including what is known, what is not claimed, and where to inspect the artifact.

---

## 2. Make every primary CTA route to the exact next task

### Current observation

The homepage’s main button says **“Examine research”** but currently takes the visitor to the homepage research-orientation anchor rather than directly to the Research Atlas. The site now has a dedicated `/research` route, which is the more complete destination for that intent.

### Why this matters

The first action on a portfolio should remove uncertainty. Sending a visitor to a broad orientation section creates an extra decision: continue scrolling or use the top navigation. This is minor friction, but it occurs at the site’s highest-value action.

### Genuine improvement

Point the hero CTA to `/research` and rename it to **“Open research atlas”** or **“View selected work.”** Keep a secondary in-page link for visitors who want the home-page overview. On Profile, make the primary action “View trajectory”; on Contact, make it “Email Abhinav.” The action label, destination, and page promise should match exactly.

### Definition of done

Every page has one dominant next step, and each primary button reaches its promised destination in one click.

---

## 3. Reduce duplication between Home and the dedicated pages

### Current observation

The Home route contains the research/work explorer, trajectory, capabilities, notes, résumé, and contact sections. The routed pages then repeat substantial portions of that same material: Research repeats the explorer and notes; Profile repeats About, trajectory, and résumé; Contact repeats a contact-focused hero and the existing contact section.

### Why this matters

The duplication makes the site feel larger, but it dilutes the reason for each route to exist. It also increases maintenance cost: changes to a core record appear in several contexts, and a returning visitor may feel they are seeing the same page with a different hero.

### Genuine improvement

Reposition Home as an **editorial index**, not a full dossier. Keep the hero, a one-screen research orientation, three featured project links, a concise trajectory preview, and a contact invitation. Let `/research`, `/profile`, and `/contact` contain the full modules. This will make each route sharper and reduce the home page’s extreme length, especially on mobile.

### Definition of done

Each route answers a distinct visitor question: “What is the research?”, “Who is the researcher?”, and “How do I start a conversation?”

---

## 4. Build a real research-output and artifact record

### Current observation

The site responsibly states that no verified publication, preprint, or citation has been supplied. This is a strong transparency decision. At the same time, visitors have no dedicated place to distinguish publications, reproductions, software, presentations, coursework, certificates, and writing.

### Why this matters

Research portfolios are judged by evidence trails. Even before formal publications, a carefully scoped record of software, reproductions, notebooks, posters, technical notes, and credentials can demonstrate rigor. Mixing all outputs into project cards makes it harder to understand what is peer-reviewed, independently reproduced, production work, or still exploratory.

### Genuine improvement

Add an `/outputs` route with clear categories and status labels such as **Publication**, **Preprint**, **Reproduction**, **Software**, **Technical Note**, **Credential**, and **In progress**. Start with only approved content. Each item should have an external source link or a visible “source unavailable” statement. When a verified paper or preprint exists, add the exact DOI, arXiv, or publisher link rather than a paraphrased citation.

### Definition of done

A visitor can tell the provenance and maturity of every research output without needing to infer it from styling or prose.

---

## 5. Raise the usability floor for mobile typography and controls

### Current observation

The mobile compositions preserve the dark editorial system successfully, but many labels, tags, footer details, filters, and metadata use very small type. The dense project cards also make the mobile Research Atlas long and visually repetitive. Several important pieces of context are therefore easy to miss on a phone.

### Why this matters

Luxury should feel deliberate, not difficult to read. Small all-caps labels can be effective as accents, but they should not carry essential meaning. On a portfolio, the user may be a recruiter scanning quickly from a mobile device; reducing readability at that moment weakens the work.

### Genuine improvement

Set a mobile minimum of **12 px** for essential metadata and **14–16 px** for body copy. Keep decorative micro-labels small only when the meaning is duplicated by a nearby heading. Ensure every interactive control has at least a 44×44 px target area. Replace the long research-card stack with category jump links, collapsible filters, or three featured records followed by “View all projects.”

### Definition of done

At 375 px wide, visitors can identify project type, outcome boundary, and outbound links without zooming or relying on hover.

---

## 6. Give routed pages static, shareable SEO and social previews

### Current observation

The current application updates document titles and descriptions after client-side navigation, and the GitHub Pages fallback restores routes through a 404 redirect. This is a pragmatic SPA solution, but social crawlers and some search systems may only receive the homepage HTML or the redirect shell rather than route-specific content and preview metadata.

### Why this matters

When someone shares `/research` or `/profile` in a message, a strong preview can determine whether the recipient opens it. Search engines and platforms do not all execute client-side JavaScript consistently. Route-aware metadata in the browser is useful but does not fully replace route-specific static HTML.

### Genuine improvement

At build time, prerender a small static HTML entry for `/research`, `/profile`, and `/contact`, each with a route-specific `<title>`, description, canonical URL, and Open Graph image. Keep the SPA for interaction, but make the first HTML response meaningful. For GitHub Pages, this can be done with a lightweight prerender step that writes `research/index.html`, `profile/index.html`, and `contact/index.html` into the distribution directory.

### Definition of done

Pasting each public route into a messaging service produces the correct title, description, and visual preview without requiring the recipient to run JavaScript first.

---

## 7. Reduce the initial JavaScript footprint and formalize image delivery

### Current observation

The latest production build emits a primary JavaScript bundle of about **733 kB uncompressed** and **204 kB gzip-compressed**. The build also reports a chunk-size warning. The portfolio now contains several photo-heavy pages, while the route pages are all bundled into the initial application.

### Why this matters

The site can still feel fast on a modern laptop, but the combination of JavaScript, external font loading, and large editorial images can delay meaningful content on slower mobile connections. This affects first impressions precisely when a new visitor arrives from a shared link or a recruiter’s browser.

### Genuine improvement

Lazy-load the three route pages with `React.lazy` and a compact loading boundary; keep the homepage shell and header in the initial bundle. Split large icon or UI libraries where practical. For portraits, prepare responsive WebP/AVIF variants, add `width` and `height` attributes, use `srcset`/`sizes`, and reserve `loading="lazy"` for below-the-fold imagery. Keep the main above-the-fold portrait eager only when it is the page’s visual focal point.

### Definition of done

The initial route loads only the code and imagery needed for that route, with no build warning caused by a single all-purpose application chunk.

---

## 8. Add active route context and stronger navigation wayfinding

### Current observation

The new navigation successfully links to Research, Work, Profile, and Contact, but it does not visibly mark the current route. “Work” remains an in-page home anchor while “Research” is a full route, so the navigation mixes two different interaction models without communicating that distinction.

### Why this matters

Visitors need a quick answer to “Where am I?” and “What will happen if I click this?” This matters even more after adding routes, because the previously single-page navigation model is no longer the whole experience.

### Genuine improvement

Use the current location to apply `aria-current="page"` and a visible signal-line state to the active route. Rename “Work” to **“Selected work”** and link it to `/research#work`, or create a dedicated `/work` index if the project collection grows. On mobile, place the active page’s index and name above the menu links.

### Definition of done

At any screen width, a visitor can identify the current section or route and can predict whether a navigation item will scroll or open a new page.

---

## 9. Turn portrait usage into a single controlled editorial system

### Current observation

The new images are handled more carefully than casual gallery images: they have darkened overlays, captions, crops, and measurement corners. The suit portrait reads particularly well as a formal research image. The café and window portraits are warmer and more lifestyle-oriented, so they carry a different visual energy despite the overlay system.

### Why this matters

The photos humanize the site, but a research portfolio benefits when every image feels intentional rather than selected from a general camera roll. Inconsistency is subtle: it does not make the page unusable, but it weakens the sense that the portfolio is one authored artifact.

### Genuine improvement

Define three explicit image roles: **Formal portrait** for Research, **Context portrait** for Profile, and **Conversation portrait** for Contact. Apply fixed crops, image-specific focal points, a common monochrome/contrast treatment, and a consistent evidence overlay. Avoid using more photos solely to fill space. A future photo should enter the site only if it has a defined role and a fitting caption.

### Definition of done

Every image can be described in one sentence as a purposeful part of the research narrative, not just a personal portrait.

---

## 10. Measure real visitor intent without collecting unnecessary personal data

### Current observation

The site includes analytics infrastructure, but the current experience offers no visible decision loop for which project cards, résumé actions, route entries, or contact paths are actually valuable to visitors. Without this evidence, later design decisions will be based mostly on taste.

### Why this matters

A portfolio has a small number of valuable outcomes: research-page exploration, project inspection, résumé download, GitHub visit, LinkedIn visit, and email contact. Measuring those actions makes it possible to focus improvement work on actual visitor behavior rather than visual speculation.

### Genuine improvement

Add privacy-conscious event tracking for `research_atlas_opened`, `project_case_study_opened`, `resume_downloaded`, `github_opened`, `linkedin_opened`, and `email_initiated`. Do not track message content, personal form fields, or visitor identity. Review the data monthly and use it to improve CTA labels, project ordering, and page depth.

### Definition of done

You can answer which projects lead to résumé views or contact attempts while collecting only aggregate interaction data.

---

## Recommended 30-day implementation order

| Week | Workstream | Tangible outcome |
|---|---|---|
| 1 | CTA alignment, active navigation, mobile text/control sizing | A clearer and more accessible visitor path |
| 2 | Three flagship case studies | Evidence-rich technical records for the strongest work |
| 3 | Home-page simplification and outputs taxonomy | Distinct route purposes and a clearer research record |
| 4 | Static route previews, bundle splitting, and intent analytics | Better sharing, faster delivery, and measured iteration |

The site does **not** need a generic dashboard, a social feed, or additional decorative sections. Its next level comes from making the existing research narrative more inspectable, more route-specific, and easier to evaluate quickly.
