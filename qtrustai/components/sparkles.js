"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
}) => {
  const canvasRef = useRef(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * (maxSize - minSize) + minSize;
          // Increased speed and reduced mass effect
          this.mass = Math.random() * 0.5 + 0.5; // Mass between 0.5 and 1
          this.speedX = (Math.random() * 1.5 - 0.75) / this.mass; // Tripled initial speed
          this.speedY = (Math.random() * 1.5 - 0.75) / this.mass;
          this.acceleration = 1.05; // Increased acceleration
      }
  
      update() {
          // Apply stronger acceleration
          this.speedX *= this.acceleration;
          this.speedY *= this.acceleration;
          
          // Increased maximum speed
          const maxSpeed = 5; // Increased from 2 to 5
          this.speedX = Math.min(Math.max(this.speedX, -maxSpeed), maxSpeed);
          this.speedY = Math.min(Math.max(this.speedY, -maxSpeed), maxSpeed);
          
          // Faster movement
          this.x += this.speedX * 3; // Increased multiplier
          this.y += this.speedY * 3;
  
          // Screen wrapping with speed reset
          if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.speedX = (Math.random() * 1.5 - 0.75) / this.mass;
              this.speedY = (Math.random() * 1.5 - 0.75) / this.mass;
          }
      
  }
    
        draw() {
            if (!ctx) return;
            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };t
  }, [maxSize, minSize, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
      }}
    />
  );
};