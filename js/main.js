/* ===========================================================================
   Learn Python — interactivity (vanilla JS, works from file://)
   =========================================================================== */
(function () {
  "use strict";

  /* ----- Theme toggle (persisted, OS-aware) ------------------------------ */
  const root = document.documentElement;
  const setTheme = (theme) => {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("theme", theme); } catch (e) {}
  };
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      setTheme(isLight ? "dark" : "light");
    });
  });

  /* ----- Mobile nav ------------------------------------------------------ */
  const body = document.body;
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", () => body.classList.toggle("nav-open"));
  }
  document.querySelectorAll(".mobile-nav a").forEach((a) =>
    a.addEventListener("click", () => body.classList.remove("nav-open"))
  );

  /* ----- Path accordion (one open at a time) ----------------------------- */
  const pathCards = document.querySelectorAll(".path-card");
  pathCards.forEach((card) => {
    const btn = card.querySelector(".expand-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      pathCards.forEach((c) => {
        c.classList.remove("open");
        const b = c.querySelector(".expand-btn");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        card.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ----- Path filter ----------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((fb) => {
    fb.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      fb.classList.add("active");
      fb.setAttribute("aria-pressed", "true");
      const filter = fb.dataset.filter;
      pathCards.forEach((card) => {
        const match = filter === "all" || card.dataset.level === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });

  /* ----- Week curriculum tabs -------------------------------------------- */
  const weekTabs = document.querySelectorAll(".week-tab");
  const weekPanels = document.querySelectorAll(".week-panel");
  weekTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.week;
      weekTabs.forEach((t) => {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      weekPanels.forEach((p) =>
        p.classList.toggle("active", p.dataset.week === target)
      );
    });
  });

  /* ----- Copy code blocks ------------------------------------------------ */
  document.querySelectorAll(".code").forEach((block) => {
    const code = block.querySelector("code");
    if (!code) return;
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = "copy";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.addEventListener("click", () => {
      const text = code.innerText;
      const done = () => {
        btn.textContent = "✓ copied";
        btn.classList.add("done");
        setTimeout(() => {
          btn.textContent = "copy";
          btn.classList.remove("done");
        }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallback(text, done));
      } else {
        fallback(text, done);
      }
    });
    block.appendChild(btn);
  });

  function fallback(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ----- Scroll reveal (fires once) -------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.querySelectorAll(".stagger").forEach((child, i) => {
              child.style.animationDelay = i * 70 + "ms";
            });
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }

  /* ----- Active nav highlight on scroll ---------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".sidebar__nav a");
  const linkFor = (id) =>
    document.querySelector('.sidebar__nav a[href="#' + id + '"]');

  if ("IntersectionObserver" in window && navLinks.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            const link = linkFor(entry.target.id);
            if (link) link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ----- Curated resources (from js/resources.js) ------------------------ */
  const DATA = window.RESOURCES;

  const TYPE_BADGE = {
    article: "📖",
    docs: "📄",
    video: "🎥",
    course: "🎓",
    book: "📘",
  };
  const TYPE_LABEL = {
    article: "Article",
    docs: "Docs",
    video: "Video",
    course: "Course",
    book: "Book",
  };
  const PATH_LABEL = {
    "data-ai": "Data & AI",
    "web-apis": "Web & APIs",
    automation: "Automation",
    "systems-cs": "Systems & CS",
  };

  // Build the DOM for a single resource row.
  function resourceItem(item, withOrigin) {
    const li = document.createElement("li");
    li.className = "res-item";
    li.dataset.type = item.type;

    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";

    const badge = document.createElement("span");
    badge.className = "res-badge";
    badge.dataset.type = item.type;
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = TYPE_BADGE[item.type] || "🔗";

    const main = document.createElement("span");
    main.className = "res-main";

    const title = document.createElement("span");
    title.className = "res-title";
    title.textContent = item.title;
    if (item.start) {
      const chip = document.createElement("span");
      chip.className = "res-start";
      chip.textContent = "★ start";
      title.appendChild(document.createTextNode(" "));
      title.appendChild(chip);
    }

    const meta = document.createElement("span");
    meta.className = "res-meta";
    const originTxt = withOrigin ? withOrigin + " · " : "";
    meta.textContent = originTxt + item.source + " · " + (TYPE_LABEL[item.type] || item.type);

    main.appendChild(title);
    main.appendChild(meta);
    if (item.note) {
      const note = document.createElement("span");
      note.className = "res-note";
      note.textContent = item.note;
      main.appendChild(note);
    }

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    a.appendChild(badge);
    a.appendChild(main);
    a.appendChild(arrow);
    li.appendChild(a);
    return li;
  }

  // Build a click-to-play YouTube facade (loads the iframe only on demand).
  function videoFacade(id) {
    const wrap = document.createElement("div");
    wrap.className = "video-facade";
    wrap.dataset.id = id;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "video-facade__btn";
    btn.setAttribute("aria-label", "Play featured video");

    const img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
    img.alt = "";
    img.loading = "lazy";

    const play = document.createElement("span");
    play.className = "video-facade__play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";

    const label = document.createElement("span");
    label.className = "video-facade__label";
    label.textContent = "Featured video";

    btn.appendChild(img);
    btn.appendChild(play);
    btn.appendChild(label);
    wrap.appendChild(btn);
    return wrap;
  }

  // Render a TopicGroup ({ featuredVideo?, items[] }) into a container.
  function renderGroup(container, group) {
    if (!group) return;
    const head = document.createElement("p");
    head.className = "res-head";
    head.textContent = "Learn it";
    container.appendChild(head);

    if (group.featuredVideo) {
      container.appendChild(videoFacade(group.featuredVideo));
    }
    const ul = document.createElement("ul");
    ul.className = "res-list";
    (group.items || []).forEach((item) => ul.appendChild(resourceItem(item, null)));
    container.appendChild(ul);
  }

  if (DATA) {
    // Inline resources under each foundation week and each path week.
    document.querySelectorAll(".resources").forEach((box) => {
      const path = box.dataset.path;
      const week = box.dataset.week;
      let group;
      if (path) {
        group = DATA.paths && DATA.paths[path] && DATA.paths[path][week];
      } else if (week) {
        group = DATA.weeks && DATA.weeks[week];
      }
      renderGroup(box, group);
    });

    // Flatten every resource into the Library grid (with origin labels).
    const grid = document.getElementById("lib-grid");
    if (grid) {
      const all = [];
      Object.keys(DATA.weeks || {}).forEach((w) => {
        (DATA.weeks[w].items || []).forEach((it) =>
          all.push({ item: it, origin: "Week " + w })
        );
      });
      Object.keys(DATA.paths || {}).forEach((p) => {
        Object.keys(DATA.paths[p]).forEach((w) => {
          (DATA.paths[p][w].items || []).forEach((it) =>
            all.push({ item: it, origin: (PATH_LABEL[p] || p) + " · W" + w })
          );
        });
      });

      grid.innerHTML = "";
      const ul = document.createElement("ul");
      ul.className = "res-list lib-list";
      all.forEach((row) => ul.appendChild(resourceItem(row.item, row.origin)));
      grid.appendChild(ul);

      const count = document.querySelector(".lib-count");
      if (count) count.textContent = all.length + " resources, all free.";

      // Library type filter (reuses the .filter-btn pattern).
      const rFilterBtns = document.querySelectorAll("[data-rfilter]");
      rFilterBtns.forEach((fb) => {
        fb.addEventListener("click", () => {
          rFilterBtns.forEach((b) => {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          fb.classList.add("active");
          fb.setAttribute("aria-pressed", "true");
          const f = fb.dataset.rfilter;
          ul.querySelectorAll(".res-item").forEach((li) => {
            const match = f === "all" || li.dataset.type === f;
            li.classList.toggle("hidden", !match);
          });
        });
      });
    }
  }

  // Swap a video facade for the real (privacy-friendly) embed on click.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".video-facade__btn");
    if (!btn) return;
    const wrap = btn.closest(".video-facade");
    const id = wrap && wrap.dataset.id;
    if (!id) return;
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    iframe.title = "Featured video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    wrap.innerHTML = "";
    wrap.classList.add("playing");
    wrap.appendChild(iframe);
  });
})();
