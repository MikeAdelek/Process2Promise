"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Pastor Enoch Agbonifo",
    role: "Keynote Speaker",
    initials: "EA",
    image: null, // Image coming soon
    focus: "Spiritual Governance"
  },
  {
    name: "Pastor Kelechi Tonycheta",
    role: "Keynote Speaker",
    image: null, // Image present
    initials: "KT",
    focus: "Consistent Action"
  },
  {
    name: "Wuraola Olalekan",
    role: "Speaker",
    initials: "WO",
    image: null, // Image coming soon
    focus: "Sustainable Growth"
  }
];

export const SpeakerSection = () => (
  <section id="speakers" className="py-24 bg-[#0a0a0c] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">
          Speakers
        </h2>
        {/* <h3 className="text-4xl font-serif">
          Vessels of <span className="italic text-amber-500/80">Process & Promise</span>
        </h3> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {speakers.map((speaker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            {/* Image / Initial Container */}
            <div className="aspect-[4/5] bg-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-500">
              {/* CONDITIONAL RENDERING: IMAGE VS INITIALS */}
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <span className="text-8xl font-serif text-slate-800 group-hover:text-amber-500/20 transition-colors select-none italic tracking-tighter">
                  {speaker.initials}
                </span>
              )}

              {/* Gradient Overlay - Always present for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Reveal Badge */}
              {!speaker.image && (
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold mb-1">
                    Revealing Today
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    Jan 16th • 3:00 PM
                  </p>
                </div>
              )}
            </div>

            {/* Speaker Info */}
            <div className="mt-6">
              <h4 className="text-xl font-serif font-bold group-hover:text-amber-500 transition-colors">
                {speaker.name}
              </h4>
              <p className="text-slate-500 text-sm uppercase tracking-widest mt-1">
                {speaker.role}
              </p>
              <div className="mt-4 h-[1px] w-8 bg-amber-500 group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
