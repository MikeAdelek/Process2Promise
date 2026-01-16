"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, Users, LineChart, Compass } from "lucide-react";

const highlights = [
  {
    title: "Interactive Sessions",
    desc: "Move from theory to practice with live leadership workshops.",
    icon: <Users className="text-amber-500" />
  },
  {
    title: "Questions & Answers",
    desc: "Direct access to kingdom leaders for real-time guidance.",
    icon: <MessageSquare className="text-amber-500" />
  },
  {
    title: "Evaluating 2025",
    desc: "An honest audit of your leadership 'Process' this past year.",
    icon: <LineChart className="text-amber-500" />
  },
  {
    title: "Planning for 2026",
    desc: "Mapping out the 'Promise' with a strategic vision roadmap.",
    icon: <Compass className="text-amber-500" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-[#0f1115] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Card className="bg-slate-900/50 border-white/5 hover:border-amber-500/30 transition-all duration-500 group h-full">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-amber-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
