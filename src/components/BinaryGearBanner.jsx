import React, { useEffect, useRef } from "react";

export const BinaryGearBanner = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = 420;
    let dpr = window.devicePixelRatio || 1;

    const particles = [];
    let gears = [];

    const setupCanvas = () => {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    };

    const createGears = () => {
      gears = [
        { x: width * 0.35, y: height / 2, r: 70 },
        { x: width * 0.55, y: height / 2, r: 100 },
        { x: width * 0.75, y: height / 2, r: 60 },
      ];
    };

    const createParticles = () => {
      particles.length = 0;

      const count = 180;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          value: Math.random() > 0.5 ? "1" : "0",
          baseX: 0,
          baseY: 0,
        });
      }
    };

    const assignTargets = (t) => {
      particles.forEach((p, i) => {
        const g = gears[i % gears.length];

        const angle = (i / particles.length) * Math.PI * 2;
        const radius = g.r + Math.sin(t * 0.001 + i) * 8;

        p.baseX = g.x + Math.cos(angle) * radius;
        p.baseY = g.y + Math.sin(angle) * radius;
      });
    };

    const animate = (t) => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#05070d";
      ctx.fillRect(0, 0, width, height);

      assignTargets(t);

      particles.forEach((p) => {
        p.x += (p.baseX - p.x) * 0.08;
        p.y += (p.baseY - p.y) * 0.08;

        ctx.fillStyle = "rgba(0, 255, 255, 0.75)";
        ctx.font = "14px monospace";
        ctx.fillText(p.value, p.x, p.y);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      setupCanvas();
      createGears();
      createParticles();
      animate(0);
    };

    start();

    const handleResize = () => {
      width = window.innerWidth;
      height = 420;

      setupCanvas();
      createGears();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] bg-[#05070d] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-cyan-300 text-4xl md:text-6xl font-semibold tracking-[0.3em] opacity-80">
          SERVICES
        </h1>
      </div>
    </div>
  );
};