import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="text-center flex-1">
          <p>© 2025 Ajit Waman All rights reserved.</p>
        </div>

        <div className="flex gap-4 justify-end items-center">
          <a href="https://github.com/Ajitwaman980" aria-label="Github">
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajit-waman-143692225/"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:ajitwamam353@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
