# Govind Yadav — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · GSAP · Three.js

## 1. Requirements
- Node.js 18.18+ (check: `node -v`)
- npm (comes with Node)

## 2. Start the project

```bash
cd /Users/bharat/Documents/Govind
npm install        # only needed the first time (already done)
npm run dev        # development server
```

Open http://localhost:3000 — changes reload automatically.
Stop the server with `Ctrl + C`.

## 3. Commands

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Optimized production build                    |
| `npm run start`     | Serve the production build (run build first)  |
| `npm run lint`      | ESLint check                                  |
| `npm run typecheck` | TypeScript check                              |

To preview exactly what visitors get: `npm run build && npm run start`.

## 4. Sections (single page)

Everything lives on `/`. The navbar scrolls to each section and highlights the one in view.

| Anchor        | Content                                             |
| ------------- | --------------------------------------------------- |
| `#home`       | Hero teaser, photo, stats, skills marquee           |
| `#about`      | Profile, skills, internship, certifications         |
| `#projects`   | Both projects with visuals                          |
| `#education`  | Education timeline                                  |
| `#contact`    | Resume download, email form, social links           |

Old URLs like `/about` redirect to `/#about`.

## 5. How to edit

| I want to…                         | Edit                                        |
| ---------------------------------- | ------------------------------------------- |
| Change any text / skill / project  | `src/data/profile.ts`                       |
| Add GitHub / Instagram links       | `socials` in `src/data/profile.ts` (set `href` + `handle`; empty = hidden) |
| Change profile photo               | Replace `public/govind.jpg` (portrait ~4:5 works best) |
| Update resume                      | Replace `public/Govind_Yadav_Resume.pdf` (keep the name) |
| Change colors                      | `tailwind.config.ts` → `colors.accent`      |
| Tweak the 3D background            | `src/components/three/Scene.tsx`            |
| Add a new section                  | Create a component using `PageShell` (needs an `id`), add it to `src/app/page.tsx` and `navLinks` in `profile.ts` |

## 6. Folder structure

```
src/
  app/            routes (page.tsx per page), layout, global CSS
  components/
    layout/       Navbar, Footer
    sections/     Hero, StatsStrip, Marquee, ProjectCard, ContactForm
    three/        Scene (Three.js) + lazy SceneLoader
    ui/           reusable: Button, Tag, Timeline, Counter, TiltCard, PageShell...
  data/profile.ts all content (single source of truth)
  hooks/          useReveal, useMagnetic, useTyped (GSAP / animation hooks)
  lib/gsap.ts     one-time GSAP plugin setup
public/           photo + resume PDF
```

## 7. Deploy (free, ~2 minutes) — Vercel

1. Push the folder to a GitHub repo (`.gitignore` is already set).
2. Go to https://vercel.com → **Add New Project** → import the repo → **Deploy**.
3. Optional: set env var `NEXT_PUBLIC_SITE_URL=https://your-domain.com` so social previews use the right URL.

Alternative without GitHub: `npx vercel` in this folder.

## 8. Troubleshooting

- **Port in use** → `npm run dev -- -p 3001`
- **Weird errors after changes** → delete `.next` folder (`rm -rf .next`) and restart.
- **Fonts don't load offline** → Google Fonts are fetched at build time; needs internet on first run.
- **Blank 3D background** → the browser/device may have WebGL disabled; the site still works.
