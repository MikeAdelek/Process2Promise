"use client";
import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // UPDATED: Target set to Jan 16, 2026, at 15:00 (3 PM)
    const targetDate = new Date("2026-01-16T15:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper to ensure two digits (e.g., "09" instead of "9")
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex gap-4 md:gap-8 justify-center text-white my-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-bold font-serif">
            {value}
          </span>
          <span className="text-xs uppercase tracking-widest text-gold-500">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
