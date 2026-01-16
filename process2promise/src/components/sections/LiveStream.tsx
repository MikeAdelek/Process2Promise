"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Radio, Users, ShieldCheck } from "lucide-react";

export const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);

  // Set the start time for Jan 16, 2026 at 9:00 AM
  useEffect(() => {
    const startTime = new Date("2026-01-16T09:00:00").getTime();
    const checkTime = () => {
      const now = new Date().getTime();
      if (now >= startTime) setIsLive(true);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-black border-y border-amber-500/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stream Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`h-3 w-3 rounded-full ${
                isLive ? "bg-red-600 animate-pulse" : "bg-slate-700"
              }`}
            />
            <h2 className="text-white font-bold tracking-widest text-sm uppercase">
              {isLive
                ? "Live Broadcast: Session 01"
                : "Broadcasting Room: Offline"}
            </h2>
          </div>
          <div className="flex gap-4 text-xs text-slate-400 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <Users size={14} /> 2.4k Waiting
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} /> Secure Stream
            </span>
          </div>
        </div>

        {/* The Player Frame */}
        <div className="relative aspect-video w-full bg-[#0a0a0c] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
          <AnimatePresence mode="wait">
            {!isLive ? (
              /* WAITING ROOM STATE */
              <motion.div
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                {/* Visual "Pulse" for the waiting room */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

                <Radio
                  size={48}
                  className="text-amber-500/20 mb-6 animate-bounce"
                />
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 italic">
                  Preparing the Vessel
                </h3>
                <p className="text-slate-500 max-w-md">
                  The "Process to Promise" livestream begins January 16th at
                  09:00 AM. Ensure your audio is tested and your heart is
                  prepared.
                </p>

                <div className="mt-8 px-6 py-2 border border-amber-500/30 text-amber-500 text-xs font-bold rounded-full">
                  AUTO-START ENABLED
                </div>
              </motion.div>
            ) : (
              /* LIVE STREAM STATE */
              <motion.div
                key="live"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-900"
              >
                {/* Replace with your actual iFrame from YouTube/Vimeo */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Play
                    size={64}
                    className="text-white fill-white cursor-pointer hover:scale-110 transition-transform"
                  />
                  <p className="mt-4 text-white font-bold">
                    CLICK TO ENTER STREAM
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Player Controls Overlay (Visual Only) */}
          <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-4">
              <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-amber-500" />
              </div>
            </div>
            <div className="text-[10px] text-white/50 tracking-widest font-bold uppercase">
              4K High Definition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
