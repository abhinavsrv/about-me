# Information Architecture

## Primary navigation

The desktop header will show the signal-aperture mark, an abbreviated nameplate, and five anchors: **Research**, **Work**, **Trajectory**, **Capabilities**, and **Contact**. The primary call to action will be **View research**. On smaller devices, these anchors will move into a focused overlay menu with the same order and a visible close control.

## Homepage sequence

| Order | Section | Purpose | Primary content |
| ---: | --- | --- | --- |
| 1 | Hero | Establish identity and research thesis in one screen. | Abhinav’s name, research-intern positioning, concise statement, portrait, GitHub and LinkedIn links. |
| 2 | Research signal | Introduce the core problem space. | Reliability, high-stakes healthcare data, calibration, and transformer systems. |
| 3 | Selected research | Present the two research outputs with clear publication status. | Mental-RoBERTa manuscript and Clinical Use of Transformers for Mental Health. |
| 4 | Selected work | Surface interactive project records. | Mental-RoBERTa, medical-image distillation reproduction, credit-risk simulator, and retail decision intelligence. |
| 5 | Research approach | Explain the owner’s methods without overwhelming visitors. | Calibration, imbalanced learning, knowledge distillation, bootstrapping, interpretability. |
| 6 | Trajectory | Show education and research experience as a concise timeline. | BIT Mesra and NTNU. |
| 7 | Technical field | Organize languages, ML systems, deployment tools, and data tools. | Python, C++, PyTorch, transformers, CUDA, FastAPI, Docker, PostgreSQL, and related skills. |
| 8 | Notes | Display a concise research-notes preview or a deliberate empty state. | Research themes and future writing area. |
| 9 | Contact | Make research and internship outreach effortless. | Email, GitHub, LinkedIn, résumé link, and availability framing. |

## Work exploration model

The Work section will have accessible category controls for **Research Systems**, **Reproductions**, and **Applied ML**. Selecting an item will open a self-contained project detail view in the page sequence, preserving a reliable hash-based URL such as `#work/mental-roberta`. Each record includes context, Abhinav’s role, methods, documented outcomes, technical stack, and an external source link when approved.

## Content hierarchy safeguards

The portfolio will distinguish between published outputs, manuscripts, accepted conference work, reproductions, and independent applied projects. Status labels will appear next to each item so visitors do not mistake a manuscript for a published journal article or a reproduction study for original clinical deployment research. Claims will retain the qualifications present in the résumé and LinkedIn content.
