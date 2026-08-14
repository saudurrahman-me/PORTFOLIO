"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CurrentlyExploring() {
  const topics = [
    "Generative AI",
    "LLM Applications",
    "Backend Architecture",
    "AI-powered Applications",
    "Cloud Deployment"
  ];

  return (
    <section className="py-12 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Sparkles className="text-blue-400" /> Currently Exploring
            </h3>
            <p className="text-gray-400">
              Areas I&apos;m currently learning and exploring to expand my technical horizon.
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-3 justify-center md:justify-end">
            {topics.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-200"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
