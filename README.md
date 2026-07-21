# pjb0811.github.io

Personal portfolio and library showcase, built with [Astro](https://astro.build) + Tailwind CSS.

Live at [pjb0811.github.io](https://pjb0811.github.io).

## Stack

- Astro (static output)
- Tailwind CSS 4
- React (for interactive islands)

## Commands

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm install`      | Install dependencies                           |
| `npm run dev`      | Start local dev server at `localhost:4321`     |
| `npm run build`    | Build production site to `./dist/`             |
| `npm run preview`  | Preview the production build locally           |

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages via GitHub Actions.
