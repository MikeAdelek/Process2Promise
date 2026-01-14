"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md px-6 py-4"
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-serif font-bold text-xl tracking-tighter text-white">
          PROCESS TO <span className="text-amber-500">PROMISE</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
          Virtual Conference
        </span>
      </div>

      {/* <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
        <button
          onClick={() => document.getElementById("speakers")}
          className="hover:text-amber-500 transition-colors"
        >
          Vision
        </button>
        <a href="#agenda" className="hover:text-amber-500 transition-colors">
          Schedule
        </a>
        <button
          onClick={() => document.getElementById("speakers")}
          className="hover:text-amber-500 transition-colors"
        >
          Speakers
        </button>
      </nav> */}

      {/* <Button
        variant="outline"
        className="border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black rounded-none transition-all px-6"
      >
        Register
        Join Live
      </Button> */}
    </div>
  </motion.header>
);
