"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const ProcessCommitment = () => {
  const [commitment, setCommitment] = useState("");

  return (
    <div className="mt-12 max-w-xl mx-auto">
      <div className="relative group">
        <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 mb-2 block font-bold">
          My 30-Day Process Commitment:
        </label>
        <Input
          value={commitment}
          onChange={(e) => setCommitment(e.target.value)}
          placeholder="e.g., 5am Prayer, Daily Journaling, Strategic Review..."
          className="bg-transparent border-0 border-b-2 border-slate-800 rounded-none h-14 text-lg focus-visible:ring-0 focus-visible:border-amber-500 transition-all placeholder:text-slate-700 text-white"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          // whileInFocus={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 origin-left"
        />
      </div>

      <Button
        className="mt-8 w-full h-14 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-none group"
        disabled={!commitment}
      >
        I COMMIT TO THIS PROCESS
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      <p className="mt-4 text-[10px] text-slate-500 italic uppercase tracking-widest text-center">
        This commitment will be emailed to you as a reminder.
      </p>
    </div>
  );
};
