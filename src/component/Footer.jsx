import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6 px-4">
        <p className="text-sm sm:text-base font-mono select-text">
          © 2025 Ajit Waman All rights reserved
        </p>

        <div className="flex items-center gap-6">
          <a
            href="ajitwaman43@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 text-green-400 hover:text-green-600 transition"
          >
            <Mail size={20} />
            <span className="hidden sm:inline font-mono text-sm">
              ajitwaman353@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Ajitwaman980"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ajit-waman-143692225/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
