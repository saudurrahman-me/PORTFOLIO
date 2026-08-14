"use client";

import { motion } from "framer-motion";
import { Brain, Smartphone, Server } from "lucide-react";

const domains = [
  {
    title: "Intelligent Systems",
    icon: <Brain className="w-8 h-8 text-blue-400 mb-6" />,
    description: "Machine learning applications, classification, NLP and computer vision projects."
  },
  {
    title: "Mobile Applications",
    icon: <Smartphone className="w-8 h-8 text-purple-400 mb-6" />,
    description: "Cross-platform applications using Flutter."
  },
  {
    title: "Backend & Web",
    icon: <Server className="w-8 h-8 text-indigo-400 mb-6" />,
    description: "Web applications and APIs using Python frameworks such as FastAPI, Django and Flask."
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-[#121212] rounded-2xl border border-white/5 hover:bg-white/[0.03] transition-colors"
            >
              {domain.icon}
              <h3 className="text-xl font-bold text-white mb-4">{domain.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
