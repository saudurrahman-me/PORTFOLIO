"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Build Something Useful.</h2>
          <p className="text-gray-400 text-lg">
            Interested in working together, discussing a project, or exploring an opportunity? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Mail className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Email</div>
                <a href={siteConfig.socialLinks.email} className="text-lg text-white hover:text-blue-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <MapPin className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Location</div>
                <div className="text-lg text-white">
                  {siteConfig.location}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 justify-center"
          >
            <a 
              href={siteConfig.socialLinks.email} 
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail size={20} /> Email Me
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.socialLinks.linkedin && (
                <a 
                  href={siteConfig.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaLinkedin size={20} /> LinkedIn
                </a>
              )}
              {siteConfig.socialLinks.github && (
                <a 
                  href={siteConfig.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
