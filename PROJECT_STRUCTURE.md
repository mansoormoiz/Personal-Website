# Portfolio Website — Project Structure

React + Tailwind CSS portfolio scaffold. Section components and page code are not implemented yet.

## Directory Tree

```
personal website/
├── public/                          # Static assets served as-is
│   └── assets/
│       ├── images/                  # Public images (favicon, og-image, etc.)
│       └── icons/
│
├── src/
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # Root app component (composes sections)
│   │
│   ├── components/
│   │   ├── layout/                  # Site-wide layout & navigation
│   │   │   ├── Layout/              # Page wrapper (header + main + footer)
│   │   │   ├── Header/              # Top bar / branding
│   │   │   ├── Navbar/              # Section navigation links
│   │   │   └── Footer/              # Footer links & copyright
│   │   │
│   │   ├── sections/                # One folder per portfolio section
│   │   │   ├── Home/                # Homepage — hero, intro, CTA
│   │   │   ├── About/               # About — bio, photo, summary
│   │   │   ├── Skills/              # Skills — tech stack, tools
│   │   │   ├── Experience/          # Experience / Work — jobs, roles
│   │   │   ├── Projects/            # Projects — featured work & links
│   │   │   └── Contact/             # Contact — form, email, social links
│   │   │
│   │   └── ui/                      # Reusable UI primitives
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── SectionHeading/
│   │       └── SocialLink/
│   │
│   ├── data/                        # Static content (JSON / JS modules)
│   │   ├── experience/              # Work history entries
│   │   ├── projects/                # Project listings
│   │   └── skills/                  # Skill categories & items
│   │
│   ├── hooks/                       # Custom React hooks
│   ├── utils/                       # Helper functions
│   ├── constants/                   # Nav links, section IDs, site metadata
│   │
│   ├── assets/                      # Imported assets (bundled by Vite)
│   │   ├── images/
│   │   └── icons/
│   │
│   └── styles/
│       └── index.css                # Tailwind directives & global styles
│
├── index.html                       # HTML shell
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS (Tailwind + Autoprefixer)
└── package.json
```

## Section Mapping

| Section              | Folder                              | Purpose                                      |
|----------------------|-------------------------------------|----------------------------------------------|
| Homepage             | `src/components/sections/Home/`     | Hero, name, tagline, primary call-to-action  |
| About                | `src/components/sections/About/`    | Personal bio, background, profile image      |
| Skills               | `src/components/sections/Skills/`   | Technologies, languages, tools               |
| Experience / Work    | `src/components/sections/Experience/` | Employment history, roles, achievements  |
| Projects             | `src/components/sections/Projects/` | Portfolio projects with links & descriptions |
| Contact              | `src/components/sections/Contact/`  | Contact form, email, social profiles         |

## Conventions (for when you add code)

- Each section folder holds its main component (e.g. `Home.jsx`) and any section-specific subcomponents.
- `Layout` wraps all sections; `Navbar` links scroll to section IDs defined in `constants/`.
- Static lists (jobs, projects, skills) live in `src/data/` to keep components presentational.
- Shared styling primitives go in `components/ui/`.

## Getting Started

```bash
npm install
npm run dev
```
