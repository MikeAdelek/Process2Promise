"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export const UrgentBanner = () => {
  const [hoursLeft, setHoursLeft] = useState("");

  useEffect(() => {
    const target = new Date("2026-01-16T15:00:00").getTime();
    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setHoursLeft("CONFERENCE IS LIVE");
      } else {
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setHoursLeft(`LIVE IN ${h}H ${m}M: PREPARE YOUR HEART`);
      }
    };
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-amber-600 text-white py-2 px-4 text-center flex items-center justify-center gap-3 z-[60] relative"
    >
      <Flame size={14} className="animate-pulse" />
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        {hoursLeft}
      </span>
      <Flame size={14} className="animate-pulse" />
    </motion.div>
  );
};
