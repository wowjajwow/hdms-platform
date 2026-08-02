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

const colors = ["#0f172a", "#0a2540", "#1e1b4b", "#091e3a", "#1e293b", "#031b4e", "#334155"];

export function InfrastructureGalaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, active: false };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      width = canvas.width;
      height = canvas.height;
      centerX = width / 2;
      centerY = height / 2;

      const maxRadius = Math.min(width, height) * 0.49;
      const minRadius = Math.min(width, height) * 0.27;
      const count = rect.width >= 1200 ? 5000 : rect.width >= 700 ? 3200 : 1800;

      particles = Array.from({ length: count }, () => {
        const radius = minRadius + Math.pow(Math.random(), 1.2) * (maxRadius - minRadius);
        const isArm = Math.random() < 0.82;
        const armAngle = Math.floor(Math.random() * 2) * Math.PI;
        const angle = isArm
          ? armAngle + radius * 0.0075 + (Math.random() - 0.5) * (0.35 + (radius / maxRadius) * 0.55)
          : Math.random() * Math.PI * 2;
        const isBright = Math.random() < 0.06;

        return {
          angle,
          baseRadius: radius,
          radius,
          speed: (0.00035 + (1 - radius / maxRadius) * 0.00075) * (Math.random() * 0.3 + 0.85),
          size: isBright ? Math.random() * 1.2 + 1.6 : Math.random() * 0.8 + 0.4,
          baseAlpha: Math.random() * 0.55 + 0.18,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.025 + 0.008,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.angle += particle.speed;
          particle.phase += particle.twinkleSpeed;
        }

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius * 0.65;

        if (mouse.active) {
          const distance = Math.hypot(mouse.x - x, mouse.y - y);
          const target = distance < 180 ? particle.baseRadius + (180 - distance) * 0.02 : particle.baseRadius;
          particle.radius += (target - particle.radius) * 0.02;
        } else {
          particle.radius += (particle.baseRadius - particle.radius) * 0.02;
        }

        const alpha = Math.max(0.12, Math.min(0.85, particle.baseAlpha + Math.sin(particle.phase) * 0.22));
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = alpha;
        context.fill();
      });

      context.globalAlpha = 1;
      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const ratio = canvas.width / rect.width;
      mouse.x = (event.clientX - rect.left) * ratio;
      mouse.y = (event.clientY - rect.top) * ratio;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    initialize();
    draw();
    window.addEventListener("resize", initialize);
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", initialize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="size-full" />;
}
