"use client";

import React, { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  connections: number[];
  pulseProgress: number;
  pulseSpeed: number;
  isPulsing: boolean;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Grid nodes configuration
    const spacing = 80;
    let nodes: NodePoint[] = [];

    const initNodes = () => {
      nodes = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          const conns: number[] = [];

          // Connect to right neighbor with probability
          if (c < cols - 1 && Math.random() > 0.4) {
            conns.push(index + 1);
          }
          // Connect to bottom neighbor with probability
          if (r < rows - 1 && Math.random() > 0.4) {
            conns.push(index + cols);
          }
          // Connect diagonally (circuit trace look) with low probability
          if (c < cols - 1 && r < rows - 1 && Math.random() > 0.75) {
            conns.push(index + cols + 1);
          }

          nodes.push({
            x: c * spacing,
            y: r * spacing,
            connections: conns,
            pulseProgress: Math.random(),
            pulseSpeed: 0.005 + Math.random() * 0.008,
            isPulsing: Math.random() > 0.6,
          });
        }
      }
    };

    initNodes();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background circuit traces
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(6, 182, 212, 0.06)";

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        for (const targetIdx of node.connections) {
          const target = nodes[targetIdx];
          if (!target) continue;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        }
      }

      // Draw active pulses and junction dots
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        const distMouse = Math.hypot(node.x - mouseX, node.y - mouseY);
        const mouseProximity = Math.max(0, 1 - distMouse / 180);

        // Draw junction dot
        const dotAlpha = 0.12 + mouseProximity * 0.6;
        ctx.fillStyle = mouseProximity > 0.2 ? "rgba(56, 189, 248, " + dotAlpha + ")" : "rgba(6, 182, 212, " + dotAlpha + ")";
        ctx.beginPath();
        ctx.arc(node.x, node.y, mouseProximity > 0.1 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Animate traveling signal pulses along connections
        if (node.isPulsing && node.connections.length > 0) {
          node.pulseProgress += node.pulseSpeed;
          if (node.pulseProgress > 1) {
            node.pulseProgress = 0;
            node.isPulsing = Math.random() > 0.3;
          }

          const target = nodes[node.connections[0]];
          if (target) {
            const px = node.x + (target.x - node.x) * node.pulseProgress;
            const py = node.y + (target.y - node.y) * node.pulseProgress;

            // Pulse glowing head
            const pulseGlow = ctx.createRadialGradient(px, py, 0, px, py, 6);
            pulseGlow.addColorStop(0, "rgba(56, 189, 248, 0.9)");
            pulseGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.4)");
            pulseGlow.addColorStop(1, "rgba(6, 182, 212, 0)");

            ctx.fillStyle = pulseGlow;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(px, py, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (Math.random() < 0.005) {
          node.isPulsing = true;
          node.pulseProgress = 0;
        }

        // Draw interactive connection line to mouse when close
        if (distMouse < 140) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - distMouse / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
        aria-hidden="true"
      />
      {/* Silicon Die Grid Overlay Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,#06080e_85%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,8,14,0.6)_70%,#06080e_100%)]" />
    </div>
  );
}
