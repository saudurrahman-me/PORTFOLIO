"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python", "Java", "Flutter", "Machine Learning", "FastAPI", "Django", "Flask", "MySQL"
];

export default function TechnologyStrip() {
  return (
    <div className="w-full bg-[#0d0d0d] border-y border-white/5 py-8 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">
          Core Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-medium"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
