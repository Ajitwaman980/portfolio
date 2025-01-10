import React from "react";
// import { Mail } from "react-feather";
import { Mail, PhoneIcon, Github, Linkedin } from "lucide-react";
const Contact = () => {
  return (
    <>
      <h3
        id="contact"
        className="text-4xl  font-bold text-center text-white mb-12"
      >
        Contact <span className="text-green-400">Information</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="mailto:ajitwaman353@gmail.com"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          <Mail className="text-green-400" size={20} />
          <span className="text-white">ajitwaman353@gmail.com</span>
        </a>
        <a
          href="tel:+917249491259"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          <PhoneIcon className="text-green-400" size={20} />
          <span className="text-white">+91-7249491259</span>
        </a>
        <a
          href="https://github.com/Ajitwaman980"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          <Github className="text-green-400" size={20} />
          <span className="text-white">GitHub</span>
        </a>
        <a
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          href="https://www.linkedin.com/in/ajit-waman-143692225/"
          aria-label="LinkedIn"
        >
          <Linkedin className="text-green-400" size={20} />
          <span className="text-white">Linkedin</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
