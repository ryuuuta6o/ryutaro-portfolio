"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number };

// Original renderer. Motion/camera values were measured from the public reference;
// its production bundle, shaders and assets are not used by this application.
export function MotionBackdrop({ stopped }: { stopped: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    let width = 0;
    let height = 0;
    let visible = true;
    let points: Point[] = [];
    const random = (seed: number) => {
      const n = Math.sin(seed * 127.1 + 37.9) * 43758.5453;
      return n - Math.floor(n);
    };
    const point = (seed: number): Point => ({ x: (random(seed) - .5) * 10, y: (random(seed + 19001) - .5) * 10, z: (random(seed + 37003) - .5) * 10 });
    const lines = Array.from({ length: 40 }, (_, index) => [point(index + 51001), point(index + 71001)]);
    const project = (p: Point, angleX: number, angleY: number, angleZ = 0) => {
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      // Three's default XYZ Euler order: Y then X, followed by the parent Z rotation.
      const x = p.x * cosY + p.z * sinY;
      const z = -p.x * sinY + p.z * cosY;
      const y = p.y * cosX - z * sinX;
      const depth = 5 - (p.y * sinX + z * cosX);
      const focal = height / (2 * Math.tan(75 * Math.PI / 360));
      return { x: width / 2 + (x * Math.cos(angleZ) - y * Math.sin(angleZ)) * focal / depth, y: height / 2 - (x * Math.sin(angleZ) + y * Math.cos(angleZ)) * focal / depth, depth, focal };
    };
    const draw = () => {
      const start = performance.now();
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = "rgba(59,130,246,.2)";
      context.lineWidth = .65;
      context.beginPath();
      for (const [a, b] of lines) {
        const p = project(a, 0, elapsed / 20);
        const q = project(b, 0, elapsed / 20);
        if (p.depth < .12 || q.depth < .12) continue;
        context.moveTo(p.x, p.y);
        context.lineTo(q.x, q.y);
      }
      context.stroke();
      // Batch similarly sized particles into six paths rather than 5000 draw calls.
      const buckets = Array.from({ length: 6 }, () => new Path2D());
      for (const p of points) {
        const q = project(p, -elapsed / 10, -elapsed / 15, Math.PI / 4);
        if (q.depth < .15) continue;
        const radius = Math.min(10, Math.max(.22, .0075 * q.focal / q.depth));
        if (q.x < -radius || q.x > width + radius || q.y < -radius || q.y > height + radius) continue;
        const bucket = Math.min(5, Math.floor(radius * 1.6));
        buckets[bucket].moveTo(q.x + radius, q.y);
        buckets[bucket].arc(q.x, q.y, radius, 0, Math.PI * 2);
      }
      context.globalCompositeOperation = "lighter";
      buckets.forEach((path, i) => {
        context.fillStyle = "rgba(153,231,239," + (.38 + i * .045) + ")";
        context.fill(path);
      });
      context.globalCompositeOperation = "source-over";
      canvas.dataset.drawMs = (performance.now() - start).toFixed(2);
      canvas.dataset.sceneTime = elapsed.toFixed(2);
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, width < 700 ? 1.25 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from({ length: width < 700 ? 2000 : 5000 }, (_, index) => point(index + 1));
      draw();
    };
    const tick = (now: number) => {
      if (visible && !document.hidden) {
        const interval = width < 700 ? 1000 / 30 : 1000 / 60;
        if (!last || now - last >= interval - 1) {
          elapsed += last ? Math.min((now - last) / 1000, .1) : 0;
          last = now;
          draw();
        }
      } else last = 0;
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) last = 0;
    });
    observer.observe(canvas);
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    if (!stopped) frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect(); };
  }, [stopped]);
  return <canvas aria-hidden="true" className="starfield" ref={canvasRef} />;
}
