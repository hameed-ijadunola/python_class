# Claude Code Prompt — Python Curriculum Website

> **How to use:** Paste this entire prompt into Claude Code in your terminal (`claude`) or VS Code extension. It will scaffold and build the full site. Run `npx serve .` or push to GitHub Pages to preview.

---

## Project brief

Build a **fully static, GitHub Pages–hostable website** for a modern Python programming curriculum. No backend, no build step required — pure HTML, CSS, and vanilla JS in a single `index.html` (with optional linked CSS/JS files if you prefer). The site must work when opened directly from a file system or served from `github.io`.

The site is the **public-facing curriculum portal** for students. It should feel like a premium learning platform — something between Linear's design polish and a great editorial magazine. Students will use it to understand the course, navigate their learning path, and track what's ahead.

---

## Aesthetic direction

**Theme:** Dark, editorial, code-native. Think a terminal that learned to dress well.

- **Background:** Near-black (`#0d0d0d` or similar), not pure black
- **Accent:** A single vivid electric green (`#00e676` or `#39ff14` range) used sparingly — on active states, highlights, and key numbers
- **Secondary text:** Warm off-white (`#e8e6e0`), muted grays for secondary info
- **Typography:**
  - Display/headings: `DM Serif Display` or `Playfair Display` (Google Fonts) — elegant serif contrast against the dark bg
  - Body/UI: `JetBrains Mono` or `Fira Code` (Google Fonts) — monospaced throughout, reinforces the coding context
  - Do NOT use Inter, Roboto, or system-ui
- **Motion:** Subtle — fade-in on scroll (Intersection Observer), smooth tab transitions, a blinking cursor on the hero headline, path cards that lift on hover
- **Layout:** Wide desktop layout with generous whitespace. A fixed left sidebar for navigation on desktop, collapsing to a top hamburger nav on mobile
- **No gradients on backgrounds.** Flat dark surfaces only. Gradients only allowed on the accent text (CSS `background-clip: text`)

---

## Site structure

Build these sections as a **single-page app** with smooth scroll or JS-driven section switching:

### 1. Hero / above the fold
- Full-viewport-height opening panel
- Headline: `"Learn Python."` with a blinking cursor `|`
- Subheadline: `"Modern. Multi-path. Self-paced. 8 weeks to your first real project."`
- Three stat pills in a row: `8 weeks` · `4 learning paths` · `Project-driven`
- A single CTA button: `"Explore the curriculum →"` that smoothly scrolls to the paths section
- Subtle background: a faint grid or dot pattern (CSS only, no images)

### 2. How it works
- Three-column card row explaining the structure:
  1. **Weeks 1–3 — Foundation** (everyone starts here)
  2. **Weeks 4–6 — Core Python** (OOP, testing, tooling)
  3. **Weeks 7–8 — Your path** (choose a specialisation)
- Each card has a large monospaced number, a short title, and 2–3 sentences
- A horizontal timeline bar connecting the three phases, with the branch point visually shown at week 7

### 3. Learning paths (the core interactive section)
Four path cards in a 2×2 grid on desktop, stacked on mobile. Each card:

#### Path 1 — Data & AI
- Icon: a small ASCII-art style chart `▁▃▅▇`
- Duration: weeks 7–8
- Level badge: `intermediate`
- Stack tags: `numpy` `pandas` `matplotlib` `scikit-learn`
- 3-bullet outcome list
- "Explore path →" button that expands a detailed week breakdown inline (accordion or modal)

**Week 7 — Data wrangling**
- Mon: NumPy arrays — vectorised operations, broadcasting
- Tue: pandas Series & DataFrames — load, inspect, clean
- Wed: Groupby, merge, pivot — real dataset exercises
- Thu: Matplotlib & Seaborn — chart types, when to use each
- Fri: Mini-project work + office hours
- Project: Analyse a public dataset (e.g. NYC taxi data). Produce 5 charts and a written summary in a Jupyter notebook.
- Self-learning: Find a Kaggle dataset that interests you. Explore it with `.describe()` and `.info()` before writing any analysis.

**Week 8 — ML fundamentals**
- Mon: scikit-learn API — fit, predict, score. The pipeline metaphor.
- Tue: Regression — linear, polynomial, evaluation metrics (MAE, RMSE)
- Wed: Classification — logistic regression, decision trees, confusion matrix
- Thu: Cross-validation, train/test split, overfitting explained visually
- Fri: Capstone scoping + peer review session
- Project: Train a classifier on a labelled dataset. Beat a baseline. Write a model card explaining what it does and doesn't do.
- Self-learning: Read the scikit-learn "Choosing the right estimator" flowchart. Justify your model choice in your README.

---

#### Path 2 — Web & APIs
- Icon: `{ }` in accent colour
- Duration: weeks 7–8
- Level badge: `beginner-friendly`
- Stack tags: `fastapi` `pydantic` `sqlite` `docker`
- 3-bullet outcome list
- "Explore path →" button

**Week 7 — Building REST APIs**
- Mon: HTTP verbs, status codes, REST principles — attack the concepts with curl
- Tue: FastAPI hello world — routes, path params, query params, auto /docs
- Wed: Pydantic models — request validation, response schemas, serialisation
- Thu: Database integration — SQLite + SQLAlchemy ORM, dependency injection
- Fri: Mini-project work + office hours
- Project: A fully documented Recipe API with CRUD endpoints, Pydantic schemas, and a SQLite backend. The /docs UI must work.
- Self-learning: Browse a real public API (Open-Meteo weather). Map its endpoints to REST principles. Call it with httpx.

**Week 8 — Auth, testing, deployment**
- Mon: Password hashing with bcrypt/passlib. JWTs — sign, verify, expire.
- Tue: FastAPI auth flow — OAuth2PasswordBearer, protected routes, current_user
- Wed: pytest + TestClient — test auth flows, fixtures, >80% coverage target
- Thu: Docker basics — Dockerfile, docker-compose with Postgres + Redis
- Fri: Deploy to Render/Railway — live URL by end of day
- Project: The Recipe API — with auth, tests, Docker — deployed to a public URL. Submit the live /docs link.
- Self-learning: Break your deployed app intentionally. Read the logs to diagnose it. Document what you find.

---

#### Path 3 — Automation & Scripts
- Icon: `>_` terminal prompt style
- Duration: weeks 7–8
- Level badge: `beginner-friendly`
- Stack tags: `click` `requests` `beautifulsoup4` `schedule`
- 3-bullet outcome list

**Week 7 — CLI tools & file automation**
- Mon: argparse vs click — build a real CLI with subcommands and help text
- Tue: File system automation — pathlib, shutil, glob, batch rename/organise
- Wed: Working with data files — CSV, JSON, Excel (openpyxl), PDF extraction
- Thu: Web scraping — requests + BeautifulSoup, ethics, robots.txt, rate limiting
- Fri: Mini-project work + office hours
- Project: A CLI tool that scrapes a public website and outputs a structured CSV report. Must handle errors gracefully and have a --help flag.
- Self-learning: Find a repetitive task you do manually. Write a script that does it. Time both.

**Week 8 — Bots, scheduling & APIs**
- Mon: schedule and APScheduler — run tasks at intervals, cron expressions
- Tue: Telegram / Discord bot basics — bot tokens, message handlers, commands
- Wed: Email automation — smtplib, email MIME, HTML templates, attachments
- Thu: Putting it together — trigger → fetch → process → notify pipeline
- Fri: Capstone scoping + demo prep
- Project: An automated pipeline: scheduled fetch from an API → process/filter → send a formatted email or Telegram message. Must run unattended for 24 hours.
- Self-learning: Read the Telegram bot API docs. Note how they handle webhooks vs polling — and why.

---

#### Path 4 — Systems & CS
- Icon: `O(n)` in accent colour
- Duration: weeks 7–8
- Level badge: `advanced`
- Stack tags: `algorithms` `asyncio` `concurrent.futures` `pytest`
- 3-bullet outcome list

**Week 7 — Data structures & algorithms**
- Mon: Big O intuition — arrays, linked lists, hash maps, trees with visual comparisons
- Tue: Implement from scratch — stack, queue, linked list, binary search tree in Python
- Wed: Sorting — insertion, merge, quicksort. When each is the right call.
- Thu: Graph algorithms — BFS, DFS, Dijkstra with real use cases
- Fri: Mini-project work + office hours (LeetCode-style problems)
- Project: Solve 10 curated algorithm problems. For each: working solution, Big O analysis, and an alternative approach with trade-off notes.
- Self-learning: Visualise one algorithm using Python turtle or matplotlib animations. Seeing it run cements it.

**Week 8 — Concurrency & architecture**
- Mon: Threading vs multiprocessing vs asyncio — the mental model, GIL explained
- Wed: asyncio deep dive — event loop, tasks, gather, real async HTTP client
- Wed: concurrent.futures — ThreadPoolExecutor, ProcessPoolExecutor, when to use
- Thu: Software design — SOLID principles, dependency injection, clean architecture in Python
- Fri: Capstone scoping + code review session
- Project: A concurrent data pipeline — fetch from 20+ URLs simultaneously with asyncio, process with multiprocessing, output a structured report. Benchmark against the synchronous version.
- Self-learning: Profile your pipeline with cProfile. Find the bottleneck. Try to remove it.

---

### 4. Shared curriculum (weeks 1–6)

A full module-by-module breakdown for the foundation period that all students share. Display as an expandable accordion or a tabbed timeline:

**Week 1 — Python fundamentals**
- Variables, types, operators, truthiness
- Control flow: if/elif/else, for, while, break, continue
- Functions: def, arguments, return, scope, default params
- Lists, tuples, dicts, sets — when to use each
- Reading and writing files, basic exception handling
- Git: init, add, commit, push — GitHub account setup
- Project: CLI quiz app — reads questions from a JSON file, scores the user, saves results
- Self-learning: Set up your Python environment from scratch on a fresh machine. Document every step. You'll refer to this later.

**Week 2 — Data structures & comprehensions**
- List/dict/set comprehensions — readable vs clever
- Nested structures — JSON-shaped data, traversal
- String methods, f-strings, format spec mini-language
- Sorting, filtering, map — functional style in Python
- Modules: import, from, as, the module search path
- Error handling: try/except/else/finally, raising custom exceptions
- Project: A data transformation pipeline — read a messy CSV, clean it, reshape it, write clean output
- Self-learning: Read PEP 8. Run flake8 on your week 1 project. Fix every warning.

**Week 3 — Functions & the Python model**
- First-class functions, closures, decorators (understanding, not just using)
- *args and **kwargs — when they're the right tool
- Generators and iterators — yield, lazy evaluation, memory efficiency
- Context managers — with, __enter__, __exit__, contextlib
- The Python data model — __repr__, __str__, __len__, __eq__ preview
- Type hints: basic annotations, Optional, List, Dict from typing
- Project: A decorator library — write 5 decorators (timer, retry, cache, log_calls, validate_types). Test each one.
- Self-learning: Read the Python docs on the data model. Pick one dunder method not covered in class and implement it in a toy class.

**Week 4 — OOP**
- Classes, instances, __init__, self
- Instance vs class vs static methods
- Inheritance, super(), method resolution order (MRO)
- Encapsulation — name mangling, @property, getters/setters
- Abstract base classes — abc module
- Composition vs inheritance — when to favour each
- Project: A card game engine (e.g. Blackjack) built with OOP. Card, Deck, Hand, Player, Game classes. Fully playable in the terminal.
- Self-learning: Find an example of inheritance misuse in the wild. Refactor it to composition.

**Week 5 — Testing & tooling**
- pytest fundamentals — test discovery, assert, fixtures
- Parametrize, monkeypatch, tmp_path
- Test-driven development: write the test first for a real feature
- Coverage — what it measures, why 100% isn't the goal
- Virtual environments — venv, pip, requirements.txt, pyproject.toml
- Linting and formatting — Ruff (replaces flake8 + black + isort)
- Project: Retroactively test week 4's card game to >80% coverage using TDD for one new feature
- Self-learning: Write a test before you write the function. Notice how it changes your thinking about the API.

**Week 6 — Packaging & the ecosystem**
- Project structure — src layout vs flat layout
- pyproject.toml — setuptools, build, publish to TestPyPI
- Virtual envs at scale — pipenv vs poetry vs uv
- The standard library tour — itertools, collections, functools, pathlib, datetime
- Logging — logging module, handlers, formatters, levels
- Environment variables — os.environ, python-dotenv, config patterns
- Project: Package and publish a small utility library to TestPyPI. Must have a README, tests, and a CLI entry point.
- Self-learning: Install your own package in a fresh virtualenv and use it as if you were a stranger. What breaks? Fix it.

---

### 5. Assessment & grading

Display as a clean visual breakdown:

| Component | Weight | Description |
|---|---|---|
| Weekly mini-projects | 30% | Submitted each Sunday. Auto-graded tests + human style review. One resubmit allowed. |
| Peer code review | 20% | Review two peers per sprint. Graded on feedback quality, not just your code. |
| Learning log | 10% | Short weekly note: what clicked, what didn't, one thing looked up. |
| Capstone project | 40% | Real, deployed project. Rubric: functionality 40%, code quality 25%, docs 20%, demo 15%. |

Add a visual pie chart (SVG or canvas) showing the weighting. Style it with the accent colour.

---

### 6. Tools & stack

A grid of tool cards. Each has an icon (use SVG or Unicode), name, and one-line description:

- **VS Code** — Editor. With Pylance, Ruff, Jupyter extensions
- **GitHub Copilot** — AI assist. Taught alongside code literacy, not as a crutch
- **JupyterLab** — Notebooks. For data path; concept exploration for all
- **GitHub** — Version control. PRs, issues, Actions from week 1
- **pytest** — Testing. TDD mindset introduced in week 5
- **Docker** — Containers. Used in Web & APIs path, demoed for all
- **Anki** — Spaced repetition. For syntax and concept retention
- **Discord** — Community. Channels by track, study groups, office hours

---

### 7. Self-learning philosophy

A short editorial section — not a feature list, but a statement of values. Three principles:

1. **"Read the source."** Every week has a primary resource that is the authoritative docs, not a tutorial. You learn to navigate real documentation.
2. **"Break it first."** Self-learning prompts always end with intentionally misusing or stressing the concept. Understanding failure modes is understanding.
3. **"Build the habit."** The learning log isn't graded for quality — it's graded for consistency. Reflection compounds.

Style this section with large pull-quote typography. One principle per "card" with an oversized numeral.

---

### 8. Footer

- Course name + tagline
- Links: GitHub repo · Discord · License (MIT)
- A single line: `Built with Python. Taught with care.`

---

## Navigation

**Desktop:** Fixed left sidebar, 220px wide
- Logo / course name at top
- Nav links: Overview · Paths · Curriculum · Assessment · Tools · Philosophy
- Active state: accent green left border + text
- At bottom: a small "GitHub" link with the octocat icon

**Mobile:** Hamburger menu, full-screen overlay on open, close on link click. Animate in from the top.

---

## Interactivity requirements

Implement all of these in vanilla JS (no React, no Vue — this must work from a file):

1. **Path accordion:** Clicking "Explore path →" on a path card expands an inline week-by-week breakdown. Only one path open at a time. Smooth height animation with CSS transitions.

2. **Week curriculum tabs:** In the shared curriculum section (weeks 1–6), clicking a week tab swaps the visible content. Animate the transition with a fade.

3. **Scroll-triggered reveals:** Sections fade in as they enter the viewport using IntersectionObserver. Stagger child elements with animation-delay.

4. **Active nav highlight:** As the user scrolls, the left sidebar nav item for the current section highlights.

5. **Copy code blocks:** Any code snippet (wrap inline code examples in `<code>` blocks) gets a small "copy" button that copies to clipboard and shows a ✓ for 1.5s.

6. **Path filter (optional stretch):** Three filter buttons above the path cards — `All` · `Beginner-friendly` · `Advanced`. Clicking filters the visible cards with a fade transition.

---

## GitHub Pages compatibility requirements

- No build step. The site must work as a static file.
- All fonts loaded from Google Fonts via `<link>` in `<head>`
- No Node.js, no npm, no bundler
- All assets (if any) referenced with relative paths
- Include a `README.md` in the repo root explaining:
  - What the site is
  - How to fork and host on GitHub Pages (Settings → Pages → main branch → / root)
  - How to customise the content (which variables/sections to edit)
- Include a `.github/workflows/pages.yml` GitHub Actions file that auto-deploys on push to `main`

---

## File structure to produce

```
/
├── index.html          ← entire site (HTML + inline CSS + inline JS, OR linked files below)
├── css/
│   └── style.css       ← if you prefer linked CSS
├── js/
│   └── main.js         ← if you prefer linked JS
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

If everything fits cleanly in `index.html` without becoming unmanageable, prefer that. If the CSS exceeds ~400 lines, split it out.

---

## Quality checklist — verify before finishing

- [ ] Opens correctly from `file://` (no CORS errors, no 404s)
- [ ] All 4 path accordions open and close correctly
- [ ] Week tabs work in the foundation section
- [ ] Scroll reveals fire on first load and don't re-fire
- [ ] Active nav updates while scrolling
- [ ] Mobile nav opens/closes; all links work
- [ ] No horizontal scroll on 375px viewport (iPhone SE)
- [ ] All Google Fonts load (test by throttling network)
- [ ] Lighthouse accessibility score ≥ 85 (semantic HTML, alt text, ARIA labels on interactive elements)
- [ ] `README.md` has clear GitHub Pages deploy instructions
- [ ] `pages.yml` is valid YAML and references the correct branch

---

## Content tone

- Direct and confident — no filler phrases like "In this exciting course..."
- Technical but not intimidating — assume students are smart adults, not beginners to learning
- Every project description answers: what does it do, what does it prove, what will the student submit
- Self-learning prompts end with a *doing* verb: explore, build, break, read, time, profile, document

---

*End of prompt. Build the complete site.*
