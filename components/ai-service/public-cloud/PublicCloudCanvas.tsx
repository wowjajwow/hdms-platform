"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
};

type PublicCloudCanvasProps = {
  className?: string;
};

function getNodeCount(width: number) {
  if (width >= 1280) return 72;
  if (width >= 768) return 54;
  return 36;
}

export function PublicCloudCanvas({ className = "size-full" }: PublicCloudCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let ratio = 1;
    let nodes: Node[] = [];
    let frameId = 0;
    let resizeId = 0;
    let lastFrame = 0;
    let isVisible = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      width = Math.floor(rect.width * ratio);
      height = Math.floor(rect.height * ratio);
      canvas.width = width;
      canvas.height = height;

      const count = getNodeCount(rect.width);
      const rowCount = Math.ceil(count / 12);
      nodes = Array.from({ length: count }, (_, index) => {
        const column = index % 12;
        const row = Math.floor(index / 12);
        const jitterX = (Math.random() - 0.5) * width * 0.045;
        const jitterY = (Math.random() - 0.5) * height * 0.07;

        return {
          x: ((column + 0.5) / 12) * width + jitterX,
          y: ((row + 0.75) / rowCount) * height + jitterY,
          radius: (Math.random() * 1.2 + 1.1) * ratio,
          alpha: Math.random() * 0.22 + 0.18,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const draw = (time = 0) => {
      if (!isVisible) return;
      if (!reduceMotion && time - lastFrame < 42) {
        frameId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;

      context.clearRect(0, 0, width, height);
      context.lineWidth = 1 * ratio;

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        const next = nodes[index + 1];
        const below = nodes[index + 12];
        const pulse = reduceMotion ? 0 : Math.sin(time * 0.0012 + node.phase) * 0.5 + 0.5;

        for (const target of [next, below]) {
          if (!target) continue;

          const distance = Math.hypot(node.x - target.x, node.y - target.y);
          if (distance > width * 0.18) continue;

          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(target.x, target.y);
          context.strokeStyle = `rgba(13, 82, 206, ${0.055 + pulse * 0.045})`;
          context.stroke();
        }

        context.beginPath();
        context.arc(node.x, node.y, node.radius + pulse * 0.55 * ratio, 0, Math.PI * 2);
        context.fillStyle = `rgba(13, 82, 206, ${node.alpha + pulse * 0.16})`;
        context.fill();
      }

      const sweepX = reduceMotion ? width * 0.55 : ((time * 0.035) % (width * 1.35)) - width * 0.18;
      const gradient = context.createLinearGradient(sweepX - width * 0.18, 0, sweepX + width * 0.18, height);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.12)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(() => {
        initialize();
        draw();
      }, 180);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) draw();
        else cancelAnimationFrame(frameId);
      },
      { rootMargin: "120px" },
    );

    initialize();
    draw();
    visibilityObserver.observe(canvas);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(resizeId);
      visibilityObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
