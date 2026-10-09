"use client";

import { useEffect, type RefObject } from "react";

// A single owner for pointer translation; entrance/hover use separate wrappers.
export function useSiteMotion(rootRef: RefObject<HTMLDivElement | null>, stopped: boolean, ready: boolean, showAll: boolean) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !ready || stopped) return;
    const observers = [0, 100].map((margin) => new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observers[margin === 0 ? 0 : 1].unobserve(entry.target);
      });
    }, { rootMargin: `0px 0px -${margin}px 0px`, threshold: 0 }));
    root.querySelectorAll<HTMLElement>(".reveal").forEach((node) => {
      if (node.classList.contains("is-visible")) return;
      const index = Number(node.dataset.motionIndex || 0);
      node.style.setProperty("--reveal-delay", `${index * .1}s`);
      observers[node.classList.contains("project-card") ? 1 : 0].observe(node);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [rootRef, stopped, ready, showAll]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !ready || stopped || !matchMedia("(min-width: 741px) and (hover: hover) and (pointer: fine)").matches) return;
    const light = root.querySelector<HTMLElement>(".pointer-light");
    const nodes = [...root.querySelectorAll<HTMLElement>(".magnetic-wrap")];
    const magnets = nodes.map((node) => ({ node, x: 0, y: 0, vx: 0, vy: 0, targetX: 0, targetY: 0, left: 0, top: 0, width: 0, height: 0 }));
    let frame = 0;
    let last = 0;
    let pointerX = 0, pointerY = 0;
    let lightDirty = false;
    const tick = (now: number) => {
      const dt = Math.min(last ? (now - last) / 1000 : 1 / 60, 1 / 30);
      last = now;
      let moving = false;
      if (lightDirty && light) {
        light.style.setProperty("--pointer-x", `${pointerX}px`);
        light.style.setProperty("--pointer-y", `${pointerY}px`);
        lightDirty = false;
      }
      for (const m of magnets) {
        // Smaller integration steps keep the measured stiff/.1 mass spring stable.
        for (let n = 0; n < 8; n++) {
          const step = dt / 8;
          m.vx += ((m.targetX - m.x) * 150 - m.vx * 15) / .1 * step;
          m.vy += ((m.targetY - m.y) * 150 - m.vy * 15) / .1 * step;
          m.x += m.vx * step; m.y += m.vy * step;
        }
        if (Math.abs(m.targetX - m.x) + Math.abs(m.targetY - m.y) + Math.abs(m.vx) + Math.abs(m.vy) > .05) moving = true;
        else { m.x = m.targetX; m.y = m.targetY; m.vx = 0; m.vy = 0; }
        m.node.style.transform = `translate3d(${m.x}px,${m.y}px,0)`;
      }
      frame = moving ? requestAnimationFrame(tick) : 0;
      if (!moving) last = 0;
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const pointer = (event: PointerEvent) => {
      pointerX = event.clientX; pointerY = event.clientY; lightDirty = true;
      if (light) light.style.opacity = "1";
      request();
    };
    const handlers = magnets.map((m) => {
      const enter = () => {
        const r = m.node.getBoundingClientRect();
        m.left = r.left - m.x; m.top = r.top - m.y; m.width = r.width; m.height = r.height;
      };
      const move = (event: PointerEvent) => {
        m.targetX = event.clientX - m.left - m.width / 2;
        m.targetY = event.clientY - m.top - m.height / 2;
        request();
      };
      const leave = () => { m.targetX = 0; m.targetY = 0; request(); };
      m.node.addEventListener("pointerenter", enter);
      m.node.addEventListener("pointermove", move);
      m.node.addEventListener("pointerleave", leave);
      return () => {
        m.node.removeEventListener("pointerenter", enter); m.node.removeEventListener("pointermove", move); m.node.removeEventListener("pointerleave", leave);
        m.node.style.transform = "";
      };
    });
    const leaveWindow = () => { if (light) light.style.opacity = "0"; };
    window.addEventListener("pointermove", pointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", leaveWindow);
    return () => {
      cancelAnimationFrame(frame); handlers.forEach((cleanup) => cleanup());
      window.removeEventListener("pointermove", pointer);
      document.documentElement.removeEventListener("pointerleave", leaveWindow);
      if (light) light.style.opacity = "0";
    };
  }, [rootRef, stopped, ready]);
}
