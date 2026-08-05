/* ===========================================================================
   Learn Python — curated learning resources (the "library")
   ---------------------------------------------------------------------------
   This file is the single source of truth for every external resource the
   site recommends. It is loaded as a plain <script> (no fetch / no build step)
   so it works when index.html is opened directly from file:// and on GitHub
   Pages alike.

   SHAPE
     window.RESOURCES = {
       weeks: { 1..6: TopicGroup },
       paths: { "data-ai" | "web-apis" | "automation" | "systems-cs":
                  { 7: TopicGroup, 8: TopicGroup } }
     }

   TopicGroup = {
     featuredVideo: "<youtube-id>",   // optional — rendered as click-to-play
     items: ResourceItem[]
   }

   ResourceItem = {
     title:  string,              // what the resource is called
     source: string,              // who made it (Real Python, official docs…)
     type:   "article" | "docs" | "video" | "course" | "book",
     url:    string,              // must be a free, public, working URL
     note?:  string,              // one short line: why it's worth your time
     start?: boolean              // mark the ONE "start here" resource per group
   }

   CURATION RUBRIC (keep it honest):
     official docs  >  authoritative tutorial (Real Python …)  >
     quality free video (Corey Schafer, ArjanCodes, freeCodeCamp)  >
     free book (Automate the Boring Stuff, Pro Git).
   Keep it to ~4 per foundation week; specialisation weeks (7–8) run to ~7
   because each one has to cover a whole discipline in five days.
   Every specialisation group leads with a SHORT (2–21 min) introductory
   video — listed first, and mirrored as that group's featuredVideo — so the
   week opens with orientation before the docs. Everything must be free.
   =========================================================================== */
(function () {
  "use strict";

  window.RESOURCES = {
    /* ------------------------------------------------------------------ */
    /* Shared foundation — weeks 1–6                                       */
    /* ------------------------------------------------------------------ */
    weeks: {
      1: {
        featuredVideo: "rfscVS0vtbw", // freeCodeCamp — Learn Python, full course for beginners
        items: [
          {
            title: "How to Install Python on Your System",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/installing-python/",
            note: "Start here — Windows, macOS & Linux, with the PATH gotcha.",
            start: true
          },
          {
            title: "The Python Tutorial — official",
            source: "docs.python.org",
            type: "docs",
            url: "https://docs.python.org/3/tutorial/",
            note: "The canonical first read. Sections 3–8 cover this week."
          },
          {
            title: "Learn Python — full course for beginners",
            source: "freeCodeCamp",
            type: "video",
            url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
            note: "≈4½ hours; the first third covers all of week 1."
          },
          {
            title: "Pro Git (Ch. 1–2) — free book",
            source: "git-scm.com",
            type: "book",
            url: "https://git-scm.com/book/en/v2",
            note: "init / add / commit / push, explained properly."
          }
        ]
      },

      2: {
        featuredVideo: "3dt4OGnU5sM", // Corey Schafer — Comprehensions
        items: [
          {
            title: "When to Use a List Comprehension",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/list-comprehension-python/",
            note: "Readable vs. clever — and when to stop nesting.",
            start: true
          },
          {
            title: "Comprehensions — how they work & why",
            source: "Corey Schafer",
            type: "video",
            url: "https://www.youtube.com/watch?v=3dt4OGnU5sM"
          },
          {
            title: "Python's f-strings & format spec",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/python-f-strings/",
            note: "The format mini-language, with a runnable cheat sheet."
          },
          {
            title: "PEP 8 — Style Guide for Python Code",
            source: "peps.python.org",
            type: "docs",
            url: "https://peps.python.org/pep-0008/",
            note: "Read it, then run Ruff/flake8 on week 1's project."
          }
        ]
      },

      3: {
        featuredVideo: "FsAPt_9Bf3U", // Corey Schafer — Decorators
        items: [
          {
            title: "Primer on Python Decorators",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/primer-on-python-decorators/",
            note: "Builds decorators from closures up — understand, not copy.",
            start: true
          },
          {
            title: "Decorators — dynamically alter functions",
            source: "Corey Schafer",
            type: "video",
            url: "https://www.youtube.com/watch?v=FsAPt_9Bf3U"
          },
          {
            title: "Introduction to Python Generators",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/introduction-to-python-generators/",
            note: "yield, lazy evaluation and why memory stays flat."
          },
          {
            title: "The Python Data Model — official reference",
            source: "docs.python.org",
            type: "docs",
            url: "https://docs.python.org/3/reference/datamodel.html",
            note: "The source for every dunder method. Pick one and implement it."
          }
        ]
      },

      4: {
        featuredVideo: "ZDa-Z5JzLYM", // Corey Schafer — OOP 1: Classes and Instances
        items: [
          {
            title: "Object-Oriented Programming in Python 3",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/python3-object-oriented-programming/",
            note: "Classes, inheritance, properties — end to end.",
            start: true
          },
          {
            title: "Python OOP Tutorials — full playlist",
            source: "Corey Schafer",
            type: "video",
            url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc",
            note: "Six tight videos: classes → inheritance → dunders → properties."
          },
          {
            title: "Inheritance and Composition: A Python OOP Guide",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/inheritance-composition-python/",
            note: "Exactly the 'favour composition' decision this week asks for."
          },
          {
            title: "abc — Abstract Base Classes",
            source: "docs.python.org",
            type: "docs",
            url: "https://docs.python.org/3/library/abc.html"
          }
        ]
      },

      5: {
        featuredVideo: "dAbpPklX7wo", // Corey Schafer — pytest intro
        items: [
          {
            title: "Effective Python Testing With pytest",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/pytest-python-testing/",
            note: "Fixtures, parametrize, markers — the whole working kit.",
            start: true
          },
          {
            title: "pytest — official documentation",
            source: "docs.pytest.org",
            type: "docs",
            url: "https://docs.pytest.org/en/stable/"
          },
          {
            title: "Getting started with pytest",
            source: "Corey Schafer",
            type: "video",
            url: "https://www.youtube.com/watch?v=dAbpPklX7wo"
          },
          {
            title: "Ruff — the fast linter & formatter",
            source: "Astral docs",
            type: "docs",
            url: "https://docs.astral.sh/ruff/",
            note: "Replaces flake8 + black + isort. Wire it in this week."
          }
        ]
      },

      6: {
        items: [
          {
            title: "Packaging Python Projects — official tutorial",
            source: "packaging.python.org",
            type: "docs",
            url: "https://packaging.python.org/en/latest/tutorials/packaging-projects/",
            note: "pyproject.toml → build → publish to TestPyPI, step by step.",
            start: true
          },
          {
            title: "uv — an extremely fast Python package manager",
            source: "Astral docs",
            type: "docs",
            url: "https://docs.astral.sh/uv/",
            note: "The modern answer to pip/venv/poetry. Try it on this project."
          },
          {
            title: "Logging HOWTO",
            source: "docs.python.org",
            type: "docs",
            url: "https://docs.python.org/3/howto/logging.html",
            note: "Handlers, formatters, levels — stop using print()."
          },
          {
            title: "Python's standard library by example",
            source: "Real Python",
            type: "article",
            url: "https://realpython.com/python-modules-packages/",
            note: "itertools, collections, functools, pathlib, datetime."
          }
        ]
      }
    },

    /* ------------------------------------------------------------------ */
    /* Specialisation paths — weeks 7–8                                    */
    /* ------------------------------------------------------------------ */
    paths: {
      "data-ai": {
        7: {
          featuredVideo: "_T8LGqJtuGc", // Wes McKinney — pandas in 10 minutes (10 min)
          items: [
            {
              title: "pandas in 10 minutes — by the author of pandas",
              source: "PyData · Wes McKinney",
              type: "video",
              url: "https://www.youtube.com/watch?v=_T8LGqJtuGc",
              note: "10 min. Watch first — the whole week in one sitting.",
              start: true
            },
            {
              title: "NumPy: the absolute basics for beginners",
              source: "numpy.org",
              type: "docs",
              url: "https://numpy.org/doc/stable/user/absolute_beginners.html",
              note: "Arrays, vectorisation and broadcasting from zero."
            },
            {
              title: "10 minutes to pandas",
              source: "pandas.pydata.org",
              type: "docs",
              url: "https://pandas.pydata.org/docs/user_guide/10min.html",
              note: "Load, inspect, clean — the daily-driver tour."
            },
            {
              title: "pandas — free interactive course",
              source: "Kaggle Learn",
              type: "course",
              url: "https://www.kaggle.com/learn/pandas",
              note: "Hands-on, runs in the browser, free certificate."
            },
            {
              title: "Matplotlib — Quick start guide",
              source: "matplotlib.org",
              type: "docs",
              url: "https://matplotlib.org/stable/users/explain/quick_start.html"
            },
            {
              title: "pandas GroupBy: Your Guide to Grouping Data",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/pandas-groupby/",
              note: "Split-apply-combine — exactly Wednesday's groupby/merge/pivot."
            },
            {
              title: "seaborn — official tutorial",
              source: "seaborn.pydata.org",
              type: "docs",
              url: "https://seaborn.pydata.org/tutorial.html",
              note: "Which chart answers which question, code alongside."
            }
          ]
        },
        8: {
          featuredVideo: "Gv9_4yMHFhI", // StatQuest — A gentle introduction to machine learning (13 min)
          items: [
            {
              title: "A Gentle Introduction to Machine Learning",
              source: "StatQuest",
              type: "video",
              url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
              note: "13 min. Training, testing and overfitting before any code.",
              start: true
            },
            {
              title: "scikit-learn — Getting Started",
              source: "scikit-learn.org",
              type: "docs",
              url: "https://scikit-learn.org/stable/getting_started.html",
              note: "fit / predict / score and the Pipeline idea."
            },
            {
              title: "Choosing the right estimator (the flowchart)",
              source: "scikit-learn.org",
              type: "docs",
              url: "https://scikit-learn.org/stable/machine_learning_map.html",
              note: "Justify your model choice in your README from this."
            },
            {
              title: "Intro to Machine Learning — free course",
              source: "Kaggle Learn",
              type: "course",
              url: "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              title: "Train/test split & cross-validation, explained",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/train-test-split-python-data/",
              note: "Overfitting made concrete — the heart of Thursday."
            },
            {
              title: "Metrics and scoring — evaluating predictions",
              source: "scikit-learn.org",
              type: "docs",
              url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
              note: "MAE, RMSE and the confusion matrix, all in one reference."
            },
            {
              title: "Model Cards — what to document",
              source: "Hugging Face",
              type: "docs",
              url: "https://huggingface.co/docs/hub/model-cards",
              note: "The shape of the model card this week's project asks for."
            }
          ]
        }
      },

      "web-apis": {
        7: {
          featuredVideo: "SORiTsvnU28", // ArjanCodes — How to use FastAPI (21 min)
          items: [
            {
              title: "How to Use FastAPI — a detailed introduction",
              source: "ArjanCodes",
              type: "video",
              url: "https://www.youtube.com/watch?v=SORiTsvnU28",
              note: "21 min. Routes, models and /docs, built in front of you.",
              start: true
            },
            {
              title: "FastAPI — official tutorial",
              source: "fastapi.tiangolo.com",
              type: "docs",
              url: "https://fastapi.tiangolo.com/tutorial/",
              note: "Genuinely the best docs in Python. Do it in order."
            },
            {
              title: "Pydantic — documentation",
              source: "docs.pydantic.dev",
              type: "docs",
              url: "https://docs.pydantic.dev/latest/",
              note: "Request validation & response schemas."
            },
            {
              title: "HTTP — concepts & methods",
              source: "MDN Web Docs",
              type: "docs",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
              note: "Verbs, status codes, REST — the Monday foundation."
            },
            {
              title: "A close look at a FastAPI example app",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/fastapi-python-web-apis/"
            },
            {
              title: "FastAPI — SQL (relational) databases",
              source: "fastapi.tiangolo.com",
              type: "docs",
              url: "https://fastapi.tiangolo.com/tutorial/sql-databases/",
              note: "Thursday's ORM + dependency-injection day, start to finish."
            },
            {
              title: "HTTPX — a modern HTTP client",
              source: "python-httpx.org",
              type: "docs",
              url: "https://www.python-httpx.org/",
              note: "What you'll call the Open-Meteo API with in the self-learning."
            }
          ]
        },
        8: {
          featuredVideo: "Gjnup-PuquQ", // Fireship — Docker in 100 seconds (2 min)
          items: [
            {
              title: "Docker in 100 Seconds",
              source: "Fireship",
              type: "video",
              url: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
              note: "2 min. Images, containers and Dockerfiles, orientation first.",
              start: true
            },
            {
              title: "FastAPI — Security & OAuth2 with JWT",
              source: "fastapi.tiangolo.com",
              type: "docs",
              url: "https://fastapi.tiangolo.com/tutorial/security/",
              note: "Hashing, tokens, protected routes, current_user."
            },
            {
              title: "Introduction to JSON Web Tokens",
              source: "jwt.io",
              type: "article",
              url: "https://jwt.io/introduction",
              note: "What a JWT actually is before you sign one."
            },
            {
              title: "Docker — Get started",
              source: "docs.docker.com",
              type: "docs",
              url: "https://docs.docker.com/get-started/",
              note: "Dockerfile basics through to compose."
            },
            {
              title: "Deploy a FastAPI app (free tier)",
              source: "Render docs",
              type: "docs",
              url: "https://render.com/docs/deploy-fastapi",
              note: "Get a live /docs URL by Friday."
            },
            {
              title: "FastAPI — Testing with TestClient",
              source: "fastapi.tiangolo.com",
              type: "docs",
              url: "https://fastapi.tiangolo.com/tutorial/testing/",
              note: "Test the auth flow itself — Wednesday's coverage target."
            },
            {
              title: "Containerise a Python application",
              source: "docs.docker.com",
              type: "docs",
              url: "https://docs.docker.com/language/python/",
              note: "Dockerfile → compose, written for Python specifically."
            }
          ]
        }
      },

      "automation": {
        7: {
          featuredVideo: "vJIXr4Kx5oo", // Carberra — Creating CLIs in Python with Click (15 min)
          items: [
            {
              title: "Creating CLIs in Python with Click",
              source: "Carberra",
              type: "video",
              url: "https://www.youtube.com/watch?v=vJIXr4Kx5oo",
              note: "15 min. Monday's argparse-vs-click question, answered.",
              start: true
            },
            {
              title: "Automate the Boring Stuff with Python — free book",
              source: "Al Sweigart",
              type: "book",
              url: "https://automatetheboringstuff.com/",
              note: "The definitive automation text. Read it free online."
            },
            {
              title: "Build a CLI with Click",
              source: "click.palletsprojects.com",
              type: "docs",
              url: "https://click.palletsprojects.com/en/stable/",
              note: "Subcommands, options and --help done right."
            },
            {
              title: "Python's pathlib for filesystem work",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/python-pathlib/",
              note: "Batch rename/organise without string-mangling paths."
            },
            {
              title: "Build a web scraper with Beautiful Soup",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/beautiful-soup-web-scraper-python/",
              note: "Includes robots.txt ethics & rate-limiting."
            },
            {
              title: "Excel spreadsheets in Python with openpyxl",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/openpyxl-excel-spreadsheets-python/",
              note: "Wednesday's Excel half — read, write, style, chart."
            },
            {
              title: "Requests — HTTP for humans",
              source: "requests.readthedocs.io",
              type: "docs",
              url: "https://requests.readthedocs.io/en/latest/",
              note: "Sessions, timeouts, headers — how to scrape politely."
            }
          ]
        },
        8: {
          featuredVideo: "yDPQfj4bZY8", // NeuralNine — Scheduling tasks professionally in Python (14 min)
          items: [
            {
              title: "Scheduling Tasks Professionally in Python",
              source: "NeuralNine",
              type: "video",
              url: "https://www.youtube.com/watch?v=yDPQfj4bZY8",
              note: "14 min. schedule and APScheduler side by side.",
              start: true
            },
            {
              title: "schedule — human-friendly job scheduling",
              source: "schedule.readthedocs.io",
              type: "docs",
              url: "https://schedule.readthedocs.io/en/stable/",
              note: "Run tasks at intervals in a few lines."
            },
            {
              title: "APScheduler — cron-style scheduling",
              source: "apscheduler.readthedocs.io",
              type: "docs",
              url: "https://apscheduler.readthedocs.io/en/3.x/",
              note: "When 'every 5 minutes' isn't enough."
            },
            {
              title: "Sending email with Python (smtplib)",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/python-send-email/",
              note: "MIME, HTML templates and attachments."
            },
            {
              title: "Telegram Bot API",
              source: "core.telegram.org",
              type: "docs",
              url: "https://core.telegram.org/bots/api",
              note: "Note how webhooks vs. polling differ — and why."
            },
            {
              title: "python-telegram-bot — documentation",
              source: "docs.python-telegram-bot.org",
              type: "docs",
              url: "https://docs.python-telegram-bot.org/",
              note: "The library you'll actually write Tuesday's handlers in."
            },
            {
              title: "crontab.guru — cron expressions decoded",
              source: "crontab.guru",
              type: "docs",
              url: "https://crontab.guru/",
              note: "Type a schedule, read it back in plain English."
            }
          ]
        }
      },

      "systems-cs": {
        7: {
          featuredVideo: "XMUe3zFhM5c", // Bro Code — Learn Big O notation in 6 minutes
          items: [
            {
              title: "Learn Big O notation in 6 minutes",
              source: "Bro Code",
              type: "video",
              url: "https://www.youtube.com/watch?v=XMUe3zFhM5c",
              note: "6 min. The vocabulary for the rest of the week.",
              start: true
            },
            {
              title: "Common Python Data Structures (Guide)",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/python-data-structures/",
              note: "Before you implement them, know what Python already gives you."
            },
            {
              title: "Big-O Cheat Sheet",
              source: "bigocheatsheet.com",
              type: "article",
              url: "https://www.bigocheatsheet.com/",
              note: "The complexity table to internalise this week."
            },
            {
              title: "VisuAlgo — algorithms, visualised",
              source: "visualgo.net",
              type: "article",
              url: "https://visualgo.net/en",
              note: "Watch BFS/DFS/Dijkstra and sorts actually run."
            },
            {
              title: "Sorting Algorithms in Python",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/sorting-algorithms-python/",
              note: "Insertion, merge, quicksort — with benchmarks."
            },
            {
              title: "TimeComplexity — Python Wiki",
              source: "wiki.python.org",
              type: "docs",
              url: "https://wiki.python.org/moin/TimeComplexity",
              note: "Big O of list, dict and set operations, from the source."
            },
            {
              title: "Problem Solving with Algorithms & Data Structures",
              source: "Runestone Academy",
              type: "book",
              url: "https://runestone.academy/ns/books/published/pythonds3/index.html",
              note: "Free interactive book — run each structure in the page."
            }
          ]
        },
        8: {
          featuredVideo: "q_yk3oV14hE", // NeuralNine — Python asyncio explained in 9 minutes
          items: [
            {
              title: "Python AsyncIO Explained in 9 Minutes",
              source: "NeuralNine",
              type: "video",
              url: "https://www.youtube.com/watch?v=q_yk3oV14hE",
              note: "9 min. The event loop, before Tuesday's deep dive.",
              start: true
            },
            {
              title: "Uncle Bob's SOLID Principles — in Python",
              source: "ArjanCodes",
              type: "video",
              url: "https://www.youtube.com/watch?v=pTB30aXS77U",
              note: "19 min. Thursday's design principles, worked in Python."
            },
            {
              title: "Async IO in Python: A Complete Walkthrough",
              source: "Real Python",
              type: "article",
              url: "https://realpython.com/async-io-python/",
              note: "Event loop, tasks, gather — the mental model first."
            },
            {
              title: "Threading vs multiprocessing vs asyncio",
              source: "Super Fast Python",
              type: "article",
              url: "https://superfastpython.com/python-concurrency-choose-api/",
              note: "Pick the right tool — and understand the GIL."
            },
            {
              title: "concurrent.futures — official docs",
              source: "docs.python.org",
              type: "docs",
              url: "https://docs.python.org/3/library/concurrent.futures.html"
            },
            {
              title: "asyncio — Asynchronous I/O",
              source: "docs.python.org",
              type: "docs",
              url: "https://docs.python.org/3/library/asyncio.html",
              note: "The reference behind Tuesday: event loop, tasks, gather."
            },
            {
              title: "The Python Profilers — cProfile",
              source: "docs.python.org",
              type: "docs",
              url: "https://docs.python.org/3/library/profile.html",
              note: "Find the bottleneck the self-learning prompt sends you after."
            }
          ]
        }
      }
    }
  };
})();
