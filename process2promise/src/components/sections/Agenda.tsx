"use client";
import { motion } from "framer-motion";

const schedule = [
  {
    day: "Day 01",
    date: "Jan 16",
    theme: "The Process: Leading Inward",
    events: [
      "Self-Governance & Discipline",
      "The Silence of the Wilderness",
      "Refining the Leader's Heart"
    ]
  }
  // {
  //   day: "Day 02",
  //   date: "Jan 17",
  //   theme: "The Promise: Leading Outward",
  //   events: [
  //     "Strategic Vision Mapping 2026",
  //     "Building Kingdom Culture",
  //     "Q&A: The Burden of Leadership"
  //   ]
  // }
];

export const Agenda = () => (
  <section
    id="agenda"
    className="py-24 bg-[#0a0a0c] text-white overflow-hidden"
  >
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold mb-16 text-center italic">
        The Summit <span className="text-amber-500">Curriculum</span>
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-amber-500/50 via-slate-800 to-transparent" />

        {schedule.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative mb-20 flex flex-col ${
              idx % 2 === 0
                ? "md:items-end md:pr-12"
                : "md:items-start md:pl-12"
            } ml-8 md:ml-0`}
          >
            {/* Date Circle */}
            <div className="absolute left-[-40px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

            <div
              className={`w-full md:w-5/12 ${
                idx % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <span className="text-amber-500 font-bold tracking-widest text-sm">
                {item.day} • {item.date}
              </span>
              <h3 className="text-2xl font-serif font-bold mt-2 mb-4">
                {item.theme}
              </h3>
              <ul className="space-y-3">
                {item.events.map((event, i) => (
                  <li
                    key={i}
                    className="text-slate-400 text-sm flex items-center gap-2 justify-start md:justify-normal"
                  >
                    <div className="w-1 h-1 bg-amber-500/50 rounded-full" />{" "}
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
