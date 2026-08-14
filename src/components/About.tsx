"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-white font-medium">
              I&apos;m a Software Engineering student at COMSATS University Islamabad, Abbottabad Campus, with a strong interest in software development and machine learning.
            </p>
            <p>
              I enjoy building practical applications and exploring how intelligent systems can solve real-world problems. My background covers a mix of core software engineering principles and hands-on experience with modern tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              Throughout my academic journey and my recent Machine Learning Internship, I&apos;ve developed a solid foundation in Python, Java, and Flutter. I&apos;ve worked on building backend APIs, training machine learning models, and connecting them to robust frontend interfaces.
            </p>
            <p>
              I am driven by the intersection of reliable software architecture and data-driven intelligence, constantly looking to apply my skills to ambitious technical challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
