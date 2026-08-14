"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-12 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20">
            <FileText className="text-blue-400 w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to know more?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Download my resume for a complete overview of my education, experience, skills, and projects.
          </p>
          
          <a
            href="/Saud_Ur_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-900/20"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
