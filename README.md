# learn.py — Python Curriculum Portal

A fully static, single-page website for a modern, project-driven Python
curriculum: **8 weeks · 4 learning paths · self-paced**. Dark, editorial,
code-native design. No backend, no build step — pure HTML, CSS, and vanilla JS.

It works two ways:

- **Open directly** — double-click `index.html` (runs from `file://`).
- **Serve locally** — `npx serve .` then visit the printed URL.
- **Host on GitHub Pages** — see below.

---

## What's in the box

```
/
├── index.html              ← the entire site (content + structure)
├── css/
│   └── style.css           ← all styling and design tokens
├── js/
│   └── main.js             ← all interactivity (vanilla JS)
├── README.md
└── .github/
    └── workflows/
        └── pages.yml       ← auto-deploys to GitHub Pages on push to main
```

## Sections

Overview (hero) · How it works · Learning paths · Shared curriculum (weeks 1–6)
· Assessment & grading · Tools & stack · Self-learning philosophy · Footer.

## Interactivity

- **Path accordions** — expand any of the 4 path cards for a day-by-day breakdown (one open at a time).
- **Path filter** — filter paths by level (All / Beginner / Intermediate / Advanced).
- **Week tabs** — swap between weeks 1–6 in the shared curriculum, with a fade.
- **Copy buttons** — every code block gets a copy-to-clipboard button.
- **Scroll reveals** — sections fade in on first view (IntersectionObserver, fires once).
- **Active nav** — the sidebar highlights the section you're reading.
- **Mobile nav** — hamburger opens a full-screen overlay; links close it.

---

## Host on GitHub Pages

You have two options. The repo includes a workflow for the automated route.

### Option A — Automated (GitHub Actions, recommended)

1. Fork or push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The included [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
   builds and deploys automatically. Your site appears at
   `https://<your-username>.github.io/<repo-name>/`.

### Option B — Classic (deploy from a branch)

1. Go to **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute; your site goes live at the URL above.

> All asset paths are relative, so the site works whether it's served from a
> domain root or a project subpath (`/<repo-name>/`).

---

## Customise the content

Everything is plain HTML — no templating, no rebuild. Edit and refresh.

| What to change | Where |
|---|---|
| Hero headline, subheadline, stat pills | `index.html` → `<section id="overview">` |
| The three phase cards / timeline | `index.html` → `<section id="how">` |
| Learning paths (titles, tags, outcomes, day-by-day) | `index.html` → `<section id="paths">`, each `<article class="path-card">` |
| Weeks 1–6 topics, code samples, projects | `index.html` → `<section id="curriculum">`, each `.week-panel` |
| Grade weights + pie chart | `index.html` → `<section id="assessment">` |
| Tools grid | `index.html` → `<section id="tools">` |
| Philosophy cards | `index.html` → `<section id="philosophy">` |
| Footer links | `index.html` → `<footer>` |

### Colours, fonts, spacing

All design tokens live at the top of `css/style.css` under `:root`:

```css
:root {
  --bg:     #0d0d0d;   /* near-black background        */
  --accent: #00e676;   /* the single electric green    */
  --text:   #e8e6e0;   /* warm off-white body text     */
  --serif: "DM Serif Display", Georgia, serif;   /* headings */
  --mono:  "JetBrains Mono", monospace;          /* body / UI */
}
```

Change `--accent` once and the whole site re-themes. Fonts are loaded from
Google Fonts in the `<head>` of `index.html` — swap the `<link>` and the two
font-family variables together.

### Adding a curriculum week

To add a week tab in the shared curriculum:

1. Add a `<button class="week-tab" data-week="7" ...>` to `.week-tabs`.
2. Add a matching `<div class="week-panel" data-week="7" ...>` with the content.

The tab logic in `js/main.js` wires them up automatically by `data-week`.

### Updating the pie chart

The chart is pure SVG (`<section id="assessment">`). Each slice is a `<circle>`
with `stroke-dasharray="<arc> 502.65"` where `502.65` is the full circumference
(`2 × π × 80`). An *N%* slice has arc length `5.0265 × N`. Set each slice's
`stroke-dashoffset` to the negative cumulative arc of the slices before it.

---

## Accessibility & compatibility notes

- Semantic HTML5 landmarks, ARIA labels on interactive controls, `role="tab"`/`tabpanel`.
- Respects `prefers-reduced-motion` (animations collapse to instant).
- No horizontal scroll down to a 375px viewport.
- No external JS dependencies — only Google Fonts via `<link>`.

## License

MIT. Built with Python. Taught with care.
