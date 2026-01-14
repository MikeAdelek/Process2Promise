"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { motion } from "framer-motion";

const highlights = [
  { title: "Interactive Sessions" },
  { title: "Questions & Answers" },
  { title: "Evaluating 2025" },
  { title: "Planning for 2026" }
];

export const Highlights = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                {/* <p className="text-muted-foreground">{item.desc}</p> */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
