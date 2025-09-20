"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StarsBackgroundProps {
  starColor?: string;
  className?: string;
  starCount?: number;
  speed?: number;
}

export const StarsBackground = ({ 
  starColor = '#499eab', 
  className,
  starCount = 500,
  speed = 1
}: StarsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate stars with varied sizes and brightness
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 0.8, // Larger, more varied sizes
      vx: (Math.random() - 0.5) * 0.2 * speed,
      vy: (Math.random() - 0.5) * 0.2 * speed,
      opacity: Math.random() * 0.9 + 0.1, // More varied opacity
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      baseOpacity: Math.random() * 0.8 + 0.2,
    }));

    let animationId: number;

    const animate = () => {
      // Clear with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position with slower movement
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Update twinkle with more subtle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkleMultiplier = 0.7 + 0.3 * Math.sin(star.twinklePhase);
        const currentOpacity = star.baseOpacity * twinkleMultiplier;

        // Draw star with no shadow for cleaner look
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = '#499eab'; // Custom star color
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [starColor, starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed inset-0 w-full h-full bg-black z-0",
        className
      )}
    />
  );
};
