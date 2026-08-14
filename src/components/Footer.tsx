"use client";

import { siteConfig } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="text-white font-bold tracking-widest uppercase text-sm mb-1">
            {siteConfig.name}
          </div>
          <div className="text-gray-500 text-xs">
            {siteConfig.role}
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          © {currentYear} {siteConfig.name}
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          {siteConfig.socialLinks.github && (
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          )}
          {siteConfig.socialLinks.linkedin && (
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          )}
          <a href={siteConfig.socialLinks.email} className="text-gray-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
