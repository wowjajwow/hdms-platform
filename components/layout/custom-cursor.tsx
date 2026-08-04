"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
};

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ring = ringRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !ring || !finePointer.matches || reducedMotion.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    document.documentElement.classList.add("custom-cursor-active");

    let frameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let isVisible = false;
    let lastParticleX = -100;
    let lastParticleY = -100;
    const pointer = { x: width / 2, y: height / 2 };
    const ringPosition = { x: pointer.x, y: pointer.y };
    const particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const addParticles = (x: number, y: number) => {
      const distance = Math.hypot(x - lastParticleX, y - lastParticleY);
      if (distance < 8) return;

      const count = Math.min(3, Math.max(1, Math.floor(distance / 18)));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: x + (Math.random() - 0.5) * 7,
          y: y + (Math.random() - 0.5) * 7,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75 + 0.25,
          life: 1,
          size: Math.random() * 2.4 + 1.2,
        });
      }

      if (particles.length > 70) particles.splice(0, particles.length - 70);
      lastParticleX = x;
      lastParticleY = y;
    };

    const pointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      addParticles(pointer.x, pointer.y);

      if (!isVisible) {
        isVisible = true;
        ring.classList.add("is-visible");
      }

      const target = event.target instanceof Element ? event.target : null;
      ring.classList.toggle(
        "is-interactive",
        Boolean(target?.closest("a, button, [role='button'], input, textarea, select, summary, video")),
      );
    };

    const pointerDown = () => ring.classList.add("is-pressed");
    const pointerUp = () => ring.classList.remove("is-pressed");
    const pointerLeave = () => {
      isVisible = false;
      ring.classList.remove("is-visible", "is-interactive", "is-pressed");
    };

    const animate = () => {
      ringPosition.x += (pointer.x - ringPosition.x) * 0.28;
      ringPosition.y += (pointer.y - ringPosition.y) * 0.28;
      ring.style.transform = `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`;

      context.clearRect(0, 0, width, height);
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.035;
        particle.size *= 0.985;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(24, 112, 255, ${particle.life * 0.75})`;
        context.shadowColor = "rgba(37, 99, 235, 0.85)";
        context.shadowBlur = 7;
        context.fill();
      }
      context.shadowBlur = 0;

      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("pointerdown", pointerDown, { passive: true });
    window.addEventListener("pointerup", pointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", pointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointerup", pointerUp);
      document.documentElement.removeEventListener("mouseleave", pointerLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </div>
  );
}
