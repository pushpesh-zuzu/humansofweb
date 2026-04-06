"use client";

import { useMemo } from "react";

const COLORS = [
  "#e739ae",
  "#162cb9",
  "#E87722",
  "#10b981",
  "#06b6d4",
  "#f43f5e",
  "#8b5cf6",
  "#f59e0b",
];

function createSeededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function FloatingBalls() {
  const balls = useMemo(() => {
    const random = createSeededRandom(42);

    return Array.from({ length: 15 }, (_, index) => {
      const size = 6;
      const left = `${Math.floor(random() * 100)}%`;
      const startY = `${102 + Math.floor(random() * 28)}%`;
      const driftX = `${Math.floor(random() * 120 - 60)}px`;
      const duration = `${6 + random() * 6}s`;
      const delay = `${random() * 6}s`;
      const opacity = 0.45 + random() * 0.4;
      const color = COLORS[Math.floor(random() * COLORS.length)];

      return {
        id: index,
        size,
        left,
        startY,
        driftX,
        duration,
        delay,
        opacity,
        color,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {balls.map((ball) => (
        <span
          key={ball.id}
          className="absolute rounded-full blur-[0.4px] shadow-[0_0_18px_currentColor]"
          style={{
            left: ball.left,
            top: ball.startY,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            backgroundColor: ball.color,
            color: ball.color,
            opacity: ball.opacity,
            animation: `float-up ${ball.duration} ease-in-out ${ball.delay} infinite`,
            "--float-drift-x": ball.driftX,
          }}
        />
      ))}
    </div>
  );
}
