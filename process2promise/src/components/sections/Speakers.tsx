"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Pastor Enoch Agbonifo",
    role: "Keynote Speaker",
    initials: "EA",
    focus: "Word Session",
    image: null
  },
  {
    name: "Pastor Kelechi Tonycheta",
    role: "Keynote Speaker",
    initials: "KT",
    focus: "Questions & Answer",
    image: null
  },
  {
    name: "Wuraola Olalekan",
    role: "Speaker",
    initials: "WO",
    focus: "Evaluating 2025 & Preparing for 2026",
    image: null
  },
  {
    name: "Michael Olomola",
    role: "Speaker",
    initials: "MO",
    focus: "Treasure Within",
    image: null
  },
  {
    name: "Favour Olalekan",
    role: "Speaker",
    initials: "FO",
    focus: "Treasure Within",
    image: null
  },
  {
    name: "Marvellous Agboola",
    role: "Speaker",
    initials: "MA",
    focus: "Treasure Within",
    image: null
  }
];

export const SpeakerSection = () => (
  <section
    id="speakers"
    className="py-24 bg-[#0a0a0c] text-white border-t border-white/5"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">
          Speakers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-16 gap-x-8">
        {speakers.map((speaker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center group text-center"
          >
            {/* COMPACT CIRCULAR HEADSHOT */}
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-white/10 group-hover:border-amber-500/50 transition-all duration-700 relative overflow-hidden bg-slate-900/50 mb-6 shadow-2xl">
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-serif text-slate-700 group-hover:text-amber-500/20 transition-colors select-none italic">
                    {speaker.initials}
                  </span>
                </div>
              )}

              {/* Subtle Reveal Overlay */}
              {!speaker.image && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] uppercase tracking-widest font-bold text-amber-500">
                    Live @ 3PM
                  </span>
                </div>
              )}
            </div>

            {/* SPEAKER TEXT INFO */}
            <div className="max-w-[200px]">
              <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                {speaker.name}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500/80 font-bold mt-1">
                {speaker.role}
              </p>
              <div className="h-px w-4 bg-slate-800 mx-auto my-3 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-500" />
              <p className="text-xs text-slate-500 italic leading-relaxed line-clamp-2">
                "{speaker.focus}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
