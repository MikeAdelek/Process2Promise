"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { CheckCircle2, Target, MoveRight, History } from "lucide-react";

export const TransitionSection = () => {
  return (
    <section
      id="transition"
      className="py-24 px-6 bg-[#0f1115] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header         */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            The Strategic Transition
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">
            Honoring the Process, <br />
            <span className="italic">Stepping into the Promise</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* 2025: EVALUATING THE PROCESS */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-6 text-[12rem] font-serif font-bold text-white/[0.03] select-none">
              2025
            </div>
            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm relative z-10 overflow-hidden">
              <div className="h-2 w-full bg-slate-700" />
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400">
                    <History size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-slate-200">
                    {/* The Year of Refinement */}
                    Process
                  </h4>
                </div>

                {/* <p className="text-slate-400 mb-8 leading-relaxed">
                  Leadership begins with self-awareness. We will audit the
                  "Process" of the past year—identifying moments of pruning,
                  character building, and the lessons learned in the wilderness.
                </p> */}

                {/* <ul className="space-y-4">
                  {[
                    "Identifying Leadership Gaps",
                    "Measuring Spiritual Stewardship",
                    "The Cost of Growth"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                      {item}
                    </li>
                  ))}
                </ul> */}
              </CardContent>
            </Card>
          </motion.div>

          {/* 2026: PLANNING THE PROMISE */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-6 text-[12rem] font-serif font-bold text-amber-500/5 select-none text-right w-full">
              2026
            </div>
            <Card className="bg-amber-950/10 border-amber-900/30 backdrop-blur-sm relative z-10 overflow-hidden">
              <div className="h-2 w-full bg-amber-600" />
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-amber-900/30 text-amber-500">
                    <Target size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-amber-100">
                    {/* The Year of Revelation */}
                    Promise
                  </h4>
                </div>

                {/* <p className="text-amber-100/70 mb-8 leading-relaxed">
                  Vision is the bridge to the "Promise." Together, we will map
                  out a strategic leadership blueprint for 2026, aligning your
                  personal influence with divine purpose.
                </p> */}

                {/* <ul className="space-y-4">
                  {[
                    "Defining Your Vision Compass",
                    "Strategic Execution Patterns",
                    "The Rhythm of Rest & Lead"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-amber-200/80"
                    >
                      <CheckCircle2 size={18} className="text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul> */}
              </CardContent>
            </Card>
          </motion.div>

          {/* Center Connection Arrow (Desktop Only) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-amber-600 items-center justify-center border-4 border-[#0f1115] shadow-xl">
            <MoveRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
