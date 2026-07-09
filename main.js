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
        const readingProgress = Math.min(1, Math.max(0, (self.progress - 0.02) / 0.64));
        illuminate(readingProgress);
        const step = Math.min(2, Math.floor(readingProgress * 3));
        document.querySelectorAll(".signal-story__steps p").forEach((item, index) => {
          item.classList.toggle("is-active", index === step);
        });
        window.dispatchEvent(new CustomEvent("signal-progress", { detail: { progress: readingProgress } }));
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

  const interactionCanvas = document.querySelector("#interaction-fx");
  const interactionContext = interactionCanvas.getContext("2d");
  const interactionEffects = [];
  let interactionFrame = 0;
  let interactionDpr = 1;

  function resizeInteractionCanvas() {
    interactionDpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.25 : 1.6);
    interactionCanvas.width = Math.round(window.innerWidth * interactionDpr);
    interactionCanvas.height = Math.round(window.innerHeight * interactionDpr);
    interactionContext.setTransform(interactionDpr, 0, 0, interactionDpr, 0, 0);
  }

  resizeInteractionCanvas();
  window.addEventListener("resize", resizeInteractionCanvas, { passive: true });

  function polygonPath(context, x, y, radius, sides, rotation = 0) {
    context.beginPath();
    for (let index = 0; index < sides; index += 1) {
      const angle = rotation + (Math.PI * 2 * index) / sides;
      const px = x + Math.cos(angle) * radius;
      const py = y + Math.sin(angle) * radius;
      if (index === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.closePath();
  }

  function createBits(count, speedMin, speedMax) {
    return Array.from({ length: count }, (_, index) => {
      const angle = (Math.PI * 2 * index) / count + Math.random() * 0.32;
      return {
        angle,
        speed: speedMin + Math.random() * (speedMax - speedMin),
        size: 1.5 + Math.random() * 3.5,
        spin: Math.random() * Math.PI
      };
    });
  }

  function addInteractionEffect(effect) {
    interactionEffects.push({ ...effect, startedAt: performance.now() });
    if (!interactionFrame) interactionFrame = window.requestAnimationFrame(renderInteractionEffects);
  }

  function drawSignalRipple(effect, progress) {
    const fade = Math.pow(1 - progress, 1.7);
    interactionContext.save();
    interactionContext.globalCompositeOperation = "lighter";
    [0, 0.11, 0.22].forEach((delay, index) => {
      const local = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
      if (local <= 0) return;
      polygonPath(
        interactionContext,
        effect.x,
        effect.y,
        12 + local * (84 + index * 22),
        6,
        Math.PI / 6 + local * 0.16
      );
      interactionContext.strokeStyle = `rgba(91,200,255,${fade * (0.68 - index * 0.13)})`;
      interactionContext.lineWidth = index === 0 ? 1.8 : 1;
      interactionContext.stroke();
    });
    effect.bits.forEach((bit) => {
      const distance = progress * bit.speed;
      const x = effect.x + Math.cos(bit.angle) * distance;
      const y = effect.y + Math.sin(bit.angle) * distance;
      interactionContext.save();
      interactionContext.translate(x, y);
      interactionContext.rotate(bit.spin + progress * 2.4);
      interactionContext.fillStyle = `rgba(124,255,197,${fade * 0.82})`;
      interactionContext.fillRect(-bit.size / 2, -bit.size / 2, bit.size, bit.size);
      interactionContext.restore();
    });
    interactionContext.restore();
  }

  function drawNeuralBloom(effect, progress) {
    const ease = 1 - Math.pow(1 - Math.min(1, progress * 1.45), 3);
    const fade = progress < 0.66 ? 1 : 1 - (progress - 0.66) / 0.34;
    const points = effect.nodes.map((node) => ({
      x: effect.x + node.x * ease,
      y: effect.y + node.y * ease
    }));
    interactionContext.save();
    interactionContext.globalCompositeOperation = "lighter";
    interactionContext.strokeStyle = `rgba(91,200,255,${fade * 0.48})`;
    interactionContext.lineWidth = 1;
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      const cross = points[(index + 3) % points.length];
      interactionContext.beginPath();
      interactionContext.moveTo(point.x, point.y);
      interactionContext.lineTo(next.x, next.y);
      interactionContext.lineTo(cross.x, cross.y);
      interactionContext.stroke();
    });
    points.forEach((point, index) => {
      const pulse = 2.2 + Math.sin(progress * 20 + index) * 1.1;
      interactionContext.beginPath();
      interactionContext.arc(point.x, point.y, pulse, 0, Math.PI * 2);
      interactionContext.fillStyle = `rgba(124,255,197,${fade * 0.9})`;
      interactionContext.fill();
    });
    interactionContext.restore();
  }

  function drawCoreIgnition(effect, progress) {
    const beamProgress = Math.min(1, progress * 2.8);
    const fade = Math.pow(1 - progress, 1.2);
    const headX = effect.x + (effect.targetX - effect.x) * beamProgress;
    const headY = effect.y + (effect.targetY - effect.y) * beamProgress;
    const gradient = interactionContext.createLinearGradient(effect.x, effect.y, headX, headY);
    gradient.addColorStop(0, "rgba(91,200,255,0)");
    gradient.addColorStop(0.55, `rgba(91,200,255,${fade * 0.62})`);
    gradient.addColorStop(1, `rgba(183,237,255,${fade})`);
    interactionContext.save();
    interactionContext.globalCompositeOperation = "lighter";
    interactionContext.beginPath();
    interactionContext.moveTo(effect.x, effect.y);
    interactionContext.lineTo(headX, headY);
    interactionContext.strokeStyle = gradient;
    interactionContext.lineWidth = 2.2;
    interactionContext.stroke();
    if (progress > 0.22) {
      const burst = (progress - 0.22) / 0.78;
      [0, 0.12, 0.24].forEach((delay, index) => {
        const local = Math.max(0, Math.min(1, (burst - delay) / (1 - delay)));
        if (!local) return;
        polygonPath(interactionContext, effect.targetX, effect.targetY, 18 + local * (110 + index * 28), 6, local * 0.22);
        interactionContext.strokeStyle = `rgba(${index === 1 ? "124,255,197" : "91,200,255"},${fade * (0.8 - index * 0.16)})`;
        interactionContext.lineWidth = index === 0 ? 2 : 1;
        interactionContext.stroke();
      });
      effect.bits.forEach((bit) => {
        const distance = burst * bit.speed;
        const x = effect.targetX + Math.cos(bit.angle) * distance;
        const y = effect.targetY + Math.sin(bit.angle) * distance;
        interactionContext.fillStyle = `rgba(183,237,255,${fade * 0.8})`;
        interactionContext.fillRect(x, y, bit.size, bit.size);
      });
    }
    interactionContext.restore();
  }

  function renderInteractionEffects(timestamp) {
    interactionContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let index = interactionEffects.length - 1; index >= 0; index -= 1) {
      const effect = interactionEffects[index];
      const progress = Math.min(1, (timestamp - effect.startedAt) / effect.duration);
      if (effect.type === "signal") drawSignalRipple(effect, progress);
      if (effect.type === "neural") drawNeuralBloom(effect, progress);
      if (effect.type === "ignition") drawCoreIgnition(effect, progress);
      if (progress >= 1) interactionEffects.splice(index, 1);
    }
    if (interactionEffects.length) {
      interactionFrame = window.requestAnimationFrame(renderInteractionEffects);
    } else {
      interactionFrame = 0;
      interactionContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function clickPoint(event) {
    if (event.clientX || event.clientY) return { x: event.clientX, y: event.clientY };
    const rect = event.target.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  document.addEventListener("click", (event) => {
    if (document.documentElement.classList.contains("motion-off")) return;
    if (event.target.closest(".motion-toggle")) return;
    const point = clickPoint(event);
    const cta = event.target.closest(".button, .header-cta, .mobile-cta");
    const card = event.target.closest(".work-card");

    if (cta) {
      cta.classList.remove("is-fx-active");
      void cta.offsetWidth;
      cta.classList.add("is-fx-active");
      window.setTimeout(() => cta.classList.remove("is-fx-active"), 700);
      addInteractionEffect({
        type: "ignition",
        x: point.x,
        y: point.y,
        targetX: window.innerWidth * (window.innerWidth < 700 ? 0.78 : 0.76),
        targetY: window.innerHeight * 0.43,
        duration: 920,
        bits: createBits(window.innerWidth < 700 ? 12 : 22, 70, 190)
      });
      window.dispatchEvent(new CustomEvent("core-ignite"));
      return;
    }

    if (card) {
      card.classList.remove("is-fx-active");
      void card.offsetWidth;
      card.classList.add("is-fx-active");
      window.setTimeout(() => card.classList.remove("is-fx-active"), 760);
      const nodeCount = window.innerWidth < 700 ? 7 : 11;
      addInteractionEffect({
        type: "neural",
        x: point.x,
        y: point.y,
        duration: 820,
        nodes: Array.from({ length: nodeCount }, (_, index) => {
          const angle = (Math.PI * 2 * index) / nodeCount + Math.random() * 0.24;
          const radius = 42 + Math.random() * (window.innerWidth < 700 ? 66 : 105);
          return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
        })
      });
      return;
    }

    addInteractionEffect({
      type: "signal",
      x: point.x,
      y: point.y,
      duration: 760,
      bits: createBits(window.innerWidth < 700 ? 8 : 14, 45, 120)
    });
  });

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
