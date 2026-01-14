"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/src/components/ui/skeleton";
import { Sparkles } from "lucide-react";

// Custom Shimmer Component to override default light gray pulse
const DarkSkeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`animate-pulse rounded-md bg-slate-800/60 ${className}`}
    {...props}
  />
);

const SpeakerSection = () => {
  // Create an array of 3 items for our grid structure
  const placeholders = Array.from({ length: 3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="speakers"
      className="py-24 px-6 bg-[#0a0a0c] relative border-t border-slate-900"
    >
      {/* Subtle background aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top, var(--tw-gradient-stops))] from-amber-900/10 via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-amber-500 p-2 bg-amber-500/10 rounded-full"
          >
            <Sparkles size={20} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
          >
            Meet our speakers
          </motion.h2>
          <p className="text-slate-400 max-w-xl">
            Final speaker lineup is being secured for the Jan 16th reveal.
          </p>
        </div>

        {/* The Skeleton Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {placeholders.map((_, index) => (
            <motion.div key={index} variants={itemVariants}>
              {/* Card Container designed to look like the final product */}
              <div className="group relative p-px rounded-2xl bg-linear-to-b from-slate-800 to-slate-950 overflow-hidden">
                {/* subtle golden glow on hover */}
                <div className="absolute inset-0 bg-linear-to-b from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-[#0f1115] rounded-2xl p-6 flex flex-col items-center text-center">
                  {/* Image Skeleton - Portrait Aspect Ratio */}
                  <div className="w-full aspect-3/4 mb-6 relative rounded-lg overflow-hidden">
                    <DarkSkeleton className="h-full w-full absolute inset-0" />
                    {/* Optional "Coming Soon" text overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-serif italic opacity-30 tracking-widest">
                      ANNOUNCING SOON
                    </div>
                  </div>
                  {/* Text Skeletons */}
                  <DarkSkeleton className="h-6 w-3/4 mb-3 rounded-full bg-slate-700/80" />{" "}
                  {/* Name */}
                  <DarkSkeleton className="h-4 w-1/2 rounded-full bg-slate-800/80" />{" "}
                  {/* Title */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerSection;
