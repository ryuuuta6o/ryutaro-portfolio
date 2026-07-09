(() => {
  "use strict";

  const { gsap, ScrollTrigger } = window;
  const body = document.body;
  const loader = document.querySelector(".loader");
  const loaderCount = document.querySelector(".loader__count");
  const loaderBar = document.querySelector(".loader__track span");
  const motionToggle = document.querySelector(".motion-toggle");
  const mediaReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let progress = 0;
  let loaderFinished = false;

  body.classList.add("is-loading");

  try {
    if (sessionStorage.getItem("portfolio-motion") === "off") {
      document.documentElement.classList.add("motion-off");
    }
  } catch (error) {
    console.info("Motion preference storage is unavailable.");
  }

  function updateMotionButton() {
    const isOff = document.documentElement.classList.contains("motion-off");
    motionToggle.setAttribute("aria-pressed", String(isOff));
    motionToggle.lastChild.textContent = isOff ? " MOTION OFF" : " MOTION ON";
  }

  updateMotionButton();
  if (mediaReduced) motionToggle.classList.add("is-recommended");

  motionToggle.addEventListener("click", () => {
    const willStop = !document.documentElement.classList.contains("motion-off");
    document.documentElement.classList.toggle("motion-off", willStop);
    try {
      sessionStorage.setItem("portfolio-motion", willStop ? "off" : "on");
    } catch (error) {
      console.info("Motion preference could not be saved.");
    }
    updateMotionButton();
    window.dispatchEvent(new CustomEvent("portfolio-motion", { detail: { stopped: willStop } }));
    if (!willStop && ScrollTrigger) ScrollTrigger.refresh();
  });

  const loaderTimer = window.setInterval(() => {
    if (progress >= 92) return;
    progress = Math.min(92, progress + Math.ceil(Math.random() * 9));
    loaderCount.value = String(progress).padStart(2, "0");
    loaderBar.style.transform = `scaleX(${progress / 100})`;
  }, 90);

  function finishLoader() {
    if (loaderFinished) return;
    loaderFinished = true;
    window.clearInterval(loaderTimer);
    progress = 100;
    loaderCount.value = "100";
    loaderBar.style.transform = "scaleX(1)";

    window.setTimeout(() => {
      loader.classList.add("is-complete");
      body.classList.remove("is-loading");
      body.classList.add("is-loaded");
      window.setTimeout(() => loader.remove(), 1000);
      startHeroSequence();
    }, 220);
  }

  window.addEventListener("load", finishLoader, { once: true });
  window.setTimeout(finishLoader, 5000);

  function startHeroSequence() {
    if (!gsap || document.documentElement.classList.contains("motion-off")) return;
    gsap.fromTo(
      [".kicker", ".hero .title-line", ".hero__lead", ".hero__actions", ".hero__telemetry"],
      { y: 34, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        clearProps: "transform,opacity"
      }
    );
  }

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    if (document.documentElement.classList.contains("motion-off")) {
      element.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(element);
  });

  const statement = document.querySelector("[data-illuminate]");
  const sentenceLines = statement.innerHTML
    .split(/<br[^>]*>/i)
    .map((line) => line.replace(/<[^>]*>/g, "").trim())
    .filter(Boolean);
  statement.innerHTML = "";
  const characters = [];

  sentenceLines.forEach((sentence) => {
    const line = document.createElement("span");
    line.className = "story-line";
    Array.from(sentence).forEach((character) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = character;
      line.appendChild(span);
      characters.push(span);
    });
    statement.appendChild(line);
  });

  function illuminate(progressValue) {
    const count = Math.ceil(characters.length * progressValue);
    characters.forEach((character, index) => {
      const active = index < count;
      character.style.opacity = active ? "1" : "0.28";
      character.style.color = active ? "var(--text)" : "rgba(243,246,247,.28)";
      character.style.textShadow = active && index >= count - 3 ? "0 0 24px rgba(91,200,255,.78)" : "none";
    });
  }

  illuminate(document.documentElement.classList.contains("motion-off") ? 1 : 0);

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".hero",
      start: "80px top",
      end: "bottom top",
      onEnter: () => document.querySelector(".site-header").classList.add("is-scrolled"),
      onLeaveBack: () => document.querySelector(".site-header").classList.remove("is-scrolled")
    });

    ScrollTrigger.create({
      trigger: ".signal-story",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (document.documentElement.classList.contains("motion-off")) return;
        illuminate(self.progress);
        const step = Math.min(2, Math.floor(self.progress * 3));
        document.querySelectorAll(".signal-story__steps p").forEach((item, index) => {
          item.classList.toggle("is-active", index === step);
        });
        window.dispatchEvent(new CustomEvent("signal-progress", { detail: { progress: self.progress } }));
      },
      onEnter: () => dispatchStage(1),
      onEnterBack: () => dispatchStage(1),
      onLeaveBack: () => dispatchStage(0)
    });

    const desktop = window.matchMedia("(min-width: 901px)");
    const buildHorizontalWorks = () => {
      ScrollTrigger.getAll()
        .filter((trigger) => trigger.vars.id === "works-horizontal")
        .forEach((trigger) => trigger.kill());
      gsap.set(".works__track", { clearProps: "transform" });

      if (!desktop.matches || document.documentElement.classList.contains("motion-off")) return;
      const track = document.querySelector(".works__track");
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          id: "works-horizontal",
          trigger: ".works__viewport",
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    };

    buildHorizontalWorks();
    desktop.addEventListener("change", buildHorizontalWorks);

    [
      [".hero", 0],
      [".signal-story", 1],
      [".works", 2],
      [".profile", 3],
      [".contact", 4]
    ].forEach(([selector, stage]) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => dispatchStage(stage),
        onEnterBack: () => dispatchStage(stage)
      });
    });
  } else {
    illuminate(1);
  }

  function dispatchStage(stage) {
    window.dispatchEvent(new CustomEvent("signal-stage", { detail: { stage } }));
  }

  if (window.matchMedia("(hover:hover) and (pointer:fine)").matches && gsap) {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        if (document.documentElement.classList.contains("motion-off")) return;
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.22;
        gsap.to(button, { x, y, duration: 0.35, ease: "power2.out" });
      });
      button.addEventListener("pointerleave", () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });
      });
    });
  }
})();
