/* ===========================================================================
   Learn Python — interactivity (vanilla JS, works from file://)
   =========================================================================== */
(function () {
  "use strict";

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
})();
