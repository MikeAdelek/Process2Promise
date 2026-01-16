"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProcessCommitment } from "./ProcessCommitment";
import { ArrowRight, CheckCircle, Share2 } from "lucide-react"; // For the share button
import { Button } from "../ui/button";

export const Vision = () => {
  return (
    <section
      id="vision"
      className="py-24 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. THE IMAGE POST (Card Style) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl mx-auto mb-24"
        >
          {/* Subtle Outer Glow/Shadow to lift the 'Post' */}
          <div className="absolute -inset-4 bg-amber-500/5 rounded-[2.5rem] blur-2xl" />

          <div className="relative bg-[#0a0a0c] p-2 md:p-4 rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-200">
            {/* Aspect Ratio Box to keep the post shape */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
              <Image
                src="/ptop.png"
                alt="Process to Promise Summit Official"
                fill
                className="object-contain" // Ensures no text is cut off
                priority
              />
            </div>

            {/* Post "Footer" Interaction Bar */}
            <div className="flex justify-between items-center px-4 py-4 md:px-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Official Announcement
                </span>
              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Process to Promise Summit",
                      url: window.location.href
                    });
                  }
                }}
                className="flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-widest"
              >
                <Share2 size={14} />
                Share Post
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. THE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 font-sans">
              The Vision
            </h2>
            <p className="text-2xl md:text-3xl font-serif leading-tight text-slate-800">
              A community for those{" "}
              <span className="text-slate-400">done fantasizing</span> and ready
              to devote themselves to the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              We help members build sustainable routines, take consistent
              action, and stay accountable—because real transformation doesn't
              come from obsession with the promise, but from{" "}
              <strong>devotion to the process.</strong>
            </p>
            <div className="pt-6 border-t border-slate-100 italic font-serif text-amber-700 text-xl">
              "The future you want is reached by the promise you keep."
            </div>
          </motion.div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 font-sans">
              The Vision
            </h2>
            <p className="text-3xl md:text-4xl font-serif leading-tight text-slate-900 italic">
              A gathering for the{" "}
              <span className="text-slate-400">disciplined few</span> ready to
              master their path.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 text-lg leading-relaxed font-sans">
              We help leaders move beyond the excitement of the "Promise" and
              into the consistency of the "Process." Real impact is built in the
              daily, quiet devotion to your craft and your calling.
            </p>
          </motion.div>
        </div> */}

        {/* 3. THE COMMITMENT SECTION (Dark Theme Contrast) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-slate-100 max-w-2xl mx-auto text-center"
        >
          {/* Minimalist Heading */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-serif text-slate-800 italic">
              The promise doesn&apos;t start tomorrow. It starts with the
              process you commit to today.
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-2 font-bold">
              Commit to one process for the next 30 days Join the Process to
              Promise community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 rounded-full font-bold w-full sm:w-auto"
            >
              <a
                href="https://chat.whatsapp.com/Cd5IInxAETpKJq0pAaAdvC"
                target="_blank"
                rel="noopener"
              >
                JOIN THE COMMUNITY
              </a>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 text-slate-400 text-sm italic">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              30-Day Accountability
            </div>
          </div>

          {/* The Functional Form (Subtle & In-Line) */}
          {/* <div className="bg-transparent px-4">
            <ProcessCommitment />
          </div> */}

          {/* Micro-Affirmation */}
          {/* <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest">
            <div className="w-1 h-1 bg-amber-500 rounded-full" />
            Private & Personal Accountability
            <div className="w-1 h-1 bg-amber-500 rounded-full" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
