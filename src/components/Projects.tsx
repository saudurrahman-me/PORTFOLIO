"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Selected projects where software engineering meets practical problem solving.
          </p>
          <div className="w-20 h-1 bg-blue-500 rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full"
            >
              <div className="h-48 bg-[#1a1a1a] relative border-b border-white/5 flex items-center justify-center p-6">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#1a1a1a] to-[#1a1a1a]"></div>
                <h3 className="text-2xl font-bold text-white/40 group-hover:text-white/60 transition-colors tracking-wider text-center z-10">
                  {project.title.toUpperCase()}
                </h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-medium text-blue-400 mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 bg-white/5 hover:bg-blue-600/20 text-white rounded-lg border border-white/10 hover:border-blue-500/50 transition-all font-medium"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="sticky top-0 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center z-10">
                <div>
                  <div className="text-sm font-medium text-blue-400 mb-1">{selectedProject.category}</div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-10 space-y-10 text-gray-300">
                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> Problem
                  </h4>
                  <p className="leading-relaxed">{selectedProject.problem}</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> Solution
                  </h4>
                  <p className="leading-relaxed">{selectedProject.solution}</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> My Contribution
                  </h4>
                  <p className="leading-relaxed">{selectedProject.role}</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> Technical Challenges
                  </h4>
                  <p className="leading-relaxed">{selectedProject.challenges}</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> Outcome
                  </h4>
                  <p className="leading-relaxed">{selectedProject.outcome}</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-500"></span> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white/5 text-white rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {(selectedProject.github || selectedProject.demo) && (
                  <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
                        <FaGithub size={20} /> View Source
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
