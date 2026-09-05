"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 z-10 relative">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science in Software Engineering</h3>
              <div className="text-xl text-gray-400">COMSATS University Islamabad</div>
              <div className="text-gray-500 mt-1">Abbottabad Campus</div>
              <div className="text-gray-500 mt-1">Graduated 2026</div>
            </div>
            <div className="mt-6 md:mt-0 p-4 bg-white/5 rounded-xl border border-white/10 shrink-0">
              <BookOpen className="text-blue-400" size={32} />
            </div>
          </div>

          <div className="z-10 relative">
            <h4 className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-wider">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Software Engineering",
                "Object-Oriented Programming"
              ].map(course => (
                <span key={course} className="px-4 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded-lg border border-white/5">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
