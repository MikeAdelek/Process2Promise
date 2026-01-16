"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Vision = () => {
  return (
    <section
      id="vision"
      className="py-24 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. THE IMAGE (Conference Visual) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-20 shadow-2xl"
        >
          Use your actual conference image here. Using a high-end placeholder for now
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070"
            alt="Process to Promise Leadership"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <p className="text-white/80 font-serif italic text-lg md:text-2xl">
              "Transformation is a daily devotion."
            </p>
          </div>
        </motion.div> */}

        {/* 2. THE ABOUT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-6">
              Our Core Vision
            </h2>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-slate-800">
              Process to Promise is a community for people who are{" "}
              <span className="text-slate-400">
                done fantasizing about the future
              </span>{" "}
              and ready to do the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed"
          >
            <p>
              We help members build sustainable routines, take consistent
              action, and stay accountable—because real transformation doesn't
              come from obsession with the promise, but from{" "}
              <strong>devotion to the process.</strong>
            </p>

            {/* TAGLINE */}
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xl italic font-serif text-amber-700">
                "The future you want is reached by the promise you keep."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3. THE CALL TO ACTION (THE COMMITMENT) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#0a0a0c] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif mb-6">
              The promise doesn't start tomorrow. <br />
              <span className="text-amber-500 italic">
                It starts with the process you commit to today.
              </span>
            </h3>

            <p className="text-slate-400 mb-10 text-lg">
              Commit to{" "}
              <span className="text-white font-bold underline decoration-amber-500">
                one process
              </span>{" "}
              for the next 30 days. Your journey to the promise begins with a
              single, consistent step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 rounded-full font-bold w-full sm:w-auto"
              >
                JOIN THE COMMUNITY
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              {/* <div className="flex items-center gap-2 text-slate-400 text-sm italic">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                30-Day Accountability
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
