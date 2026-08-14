"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3 Months", label: "Machine Learning Internship" },
  { value: "B.S.", label: "Software Engineering" },
  { value: "Multiple", label: "Technical Projects" },
  { value: "Python + Java", label: "Core Programming" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-[#121212] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-blue-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
