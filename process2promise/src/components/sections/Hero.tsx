"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { CountdownTimer } from "@/src/hook/usecountdown";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0c] text-white px-6"
    >
      {/* Background Aesthetic */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"
          }}
          />
      </div> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat"
          }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" /> */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* AnimateBadge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase">
            2026 Virtual Conference
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-4"
        >
          Process to <span className="italic text-amber-500">Promise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-10 italic"
        >
          "Leading Yourself: A Biblical Perspective to Kingdom Leadership"
        </motion.p>

        {/* Countdown Integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* Meta Info & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-2 text-slate-300 mr-0 md:mr-8">
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
              <CalendarDays className="w-4 h-4 text-amber-500" /> Jan 16th
              Friday — 17th Saturday, 2026
            </div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
              <MapPin className="w-4 h-4 text-amber-500" /> Virtual Conference
              (Global)
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-14 rounded-none font-bold group"
            >
              SECURE YOUR SEAT
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          The Journey
        </span>
        <div className="w-px h-12 bg-linear-to-b from-amber-500 to-transparent" />
      </motion.div>
    </section>
  );
}
