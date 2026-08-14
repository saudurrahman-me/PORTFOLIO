"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python"]
  },
  {
    title: "Application Development",
    skills: ["Flutter"]
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "Django", "Flask"]
  },
  {
    title: "Machine Learning",
    skills: ["Machine Learning", "Scikit-learn", "Data Preprocessing", "Classification", "Computer Vision"]
  },
  {
    title: "Database",
    skills: ["MySQL"]
  },
  {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
