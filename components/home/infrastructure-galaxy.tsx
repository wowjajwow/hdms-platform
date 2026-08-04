"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  baseRadius: number;
  radius: number;
  speed: number;
  size: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
  color: string;
};

type InfrastructureGalaxyProps = {
  density?: "normal" | "low";
  interactive?: boolean;
  className?: string;
};

const colors = ["#0f172a", "#0a2540", "#1e1b4b", "#091e3a", "#1e293b", "#031b4e", "#334155"];

function getParticleCount(width: number, density: "normal" | "low") {
  if (density === "low") return width >= 1200 ? 760 : width >= 700 ? 560 : 340;
  return width >= 1200 ? 4000 : width >= 700 ? 2800 : 1500;
}

export function InfrastructureGalaxy({ density = "normal", interactive = true, className = "size-full" }: InfrastructureGalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let frameId = 0;
    let resizeId = 0;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let particles: Particle[] = [];
    let isVisible = true;
    let isRunning = false;
    const mouse = { x: 0, y: 0, active: false };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const ratio = density === "low" ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      width = canvas.width;
      height = canvas.height;
      centerX = width / 2;
      centerY = height / 2;

      const maxRadius = Math.min(width, height) * 0.49;
      const minRadius = Math.min(width, height) * 0.27;
      const count = getParticleCount(rect.width, density);
      const speedRatio = density === "low" ? 0.62 : 1;

      particles = Array.from({ length: count }, () => {
        const radius = minRadius + Math.pow(Math.random(), 1.2) * (maxRadius - minRadius);
        const isArm = Math.random() < 0.82;
        const armAngle = Math.floor(Math.random() * 2) * Math.PI;
        const angle = isArm
          ? armAngle + radius * 0.0075 + (Math.random() - 0.5) * (0.35 + (radius / maxRadius) * 0.55)
          : Math.random() * Math.PI * 2;
        const isBright = Math.random() < 0.05;

        return {
          angle,
          baseRadius: radius,
          radius,
          speed: (0.00028 + (1 - radius / maxRadius) * 0.00055) * (Math.random() * 0.3 + 0.85) * speedRatio,
          size: isBright ? Math.random() * 1 + 1.35 : Math.random() * 0.65 + 0.35,
          baseAlpha: Math.random() * 0.48 + 0.16,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: (Math.random() * 0.018 + 0.006) * speedRatio,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    };

    const draw = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.angle += particle.speed;
          particle.phase += particle.twinkleSpeed;
        }

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius * 0.65;

        if (interactive && mouse.active) {
          const distance = Math.hypot(mouse.x - x, mouse.y - y);
          const target = distance < 150 ? particle.baseRadius + (150 - distance) * 0.016 : particle.baseRadius;
          particle.radius += (target - particle.radius) * 0.018;
        } else {
          particle.radius += (particle.baseRadius - particle.radius) * 0.018;
        }

        const alpha = Math.max(0.1, Math.min(0.76, particle.baseAlpha + Math.sin(particle.phase) * 0.18));
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = alpha;
        context.fill();
      }

      context.globalAlpha = 1;

      if (reduceMotion) {
        isRunning = false;
        return;
      }

      frameId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (isRunning || reduceMotion) return;
      isRunning = true;
      frameId = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const ratio = canvas.width / rect.width;
      mouse.x = (event.clientX - rect.left) * ratio;
      mouse.y = (event.clientY - rect.top) * ratio;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(() => {
        initialize();
        if (reduceMotion) draw();
      }, 160);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else cancelAnimationFrame(frameId);
      },
      { rootMargin: "160px" },
    );

    initialize();
    if (reduceMotion) draw();
    else start();

    visibilityObserver.observe(canvas);
    if (interactive) {
      canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(resizeId);
      visibilityObserver.disconnect();
      if (interactive) {
        canvas.removeEventListener("pointermove", handlePointerMove);
        canvas.removeEventListener("pointerleave", handlePointerLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [density, interactive]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
