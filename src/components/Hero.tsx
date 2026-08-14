"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>SOFTWARE ENGINEER • MACHINE LEARNING</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Building Software. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Exploring Intelligence.
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Software Engineering student with hands-on experience in Machine Learning, Python, Java, Flutter, and backend application development.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href="/Saud_Ur_Rahman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 text-white border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="pt-4">
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
              Let&apos;s connect 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10" />
            <Image
              src="/profile.png"
              alt="Saud Ur Rahman — Software Engineer and Machine Learning Enthusiast"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
