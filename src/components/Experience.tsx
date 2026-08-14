"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 py-4">
          {/* Dot marker */}
          <div className="absolute top-4 -left-[9px] w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#0a0a0a]"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Machine Learning Intern</h3>
                <div className="text-lg text-blue-400 font-medium">Ezitech Institute</div>
                <div className="text-gray-500 text-sm">Rawalpindi</div>
              </div>
              <div className="mt-2 md:mt-0 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 inline-block md:inline-flex w-fit">
                January 2026 – April 2026
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Completed a 3-month Machine Learning internship focused on Python, data analysis, and machine learning model development.
            </p>
            
            <ul className="space-y-3">
              {[
                "Worked with Python for machine learning tasks.",
                "Performed data analysis and preprocessing.",
                "Developed machine learning models.",
                "Evaluated machine learning approaches.",
                "Gained practical experience working with ML workflows."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
