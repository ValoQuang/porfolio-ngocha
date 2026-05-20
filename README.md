# Le Thi Ngoc Ha — Portfolio

A Scandinavian-styled personal portfolio for **Le Thi Ngoc Ha**, Sales Manager turned Product Analyst at Misa Corp.

Built with [Next.js 16](https://nextjs.org/) (App Router), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) and [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling.

## Features

- **Smooth scrolling** powered by Lenis
- **Animated underline** on each role's career highlight
- **Empty-frame gallery** for the 2-day-1-night leadership bootcamp — drop polaroids in later
- **Theme switcher** — soft Scandinavian light + warm dark mode, persisted to localStorage
- **Language switcher** — English / Tiếng Việt with a hand-written i18n layer
- **Responsive layout** with feminine, professional typography (Cormorant Garamond + Inter)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/                 — Next.js App Router pages, fonts, global CSS
components/
  sections/          — Hero, About, Experience, Bootcamp, Skills, Contact
  ui/                — Reveal, AchievementText
  Providers.tsx      — wires i18n + theme + smooth scroll
  Nav.tsx, Utilities.tsx
lib/
  i18n.tsx           — translation dictionary (EN / VI) + context
  theme.tsx          — light / dark theme context
public/images/       — portrait + future bootcamp photos
```

## Adding bootcamp photos

The frames in the **Bootcamp** section are intentionally empty. To drop in real photos, edit `components/sections/Bootcamp.tsx` and replace each `<figure>`'s mat with an `<Image />`.
