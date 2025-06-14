import React, { useState, useEffect } from "react";
import { Terminal, Mail, Phone, Linkedin, Github, Eye } from "lucide-react";
import ProfilePhoto from "../assets/my github profile.jpg";

const title_devloper = {
  Frontend: "Frontend  ",
  Backend: "Backend ",
  FullStack: "FullStack",
};

export const About = () => {
  const [currentDevloperAbout, setCurrentDevloperAbout] = useState(
    title_devloper.Backend
  );

  const randomTitle = () => {
    const title = Object.values(title_devloper);
    const randomTitle = Math.floor(Math.random() * title.length);
    setCurrentDevloperAbout(title[randomTitle]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomTitle();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      id="about"
      className="pt-16 px-4  min-h-[340px] flex items-center bg-gray-900 text-white "
    >
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-3xl mb-8 md:mb-0">
          <div className="flex flex-col gap-3 mb-6 ">
            <Terminal className="text-green-400  " size={32} />

            <h2 className="text-xl font-mono text-green-400">~/developer$</h2>
            <div className="flex flex-col">
              <span className="text-xl font-mono text-green-400">
                $ node --version
              </span>
              <span className="text-xl font-mono text-green-400">v22.12.3</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ">
            Hello, I’m <span className="text-green-400">Ajit waman</span>
            <span className="text-blue-400">
              {" "}
              {currentDevloperAbout} Developer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-mono sm:text-2xl">
            Backend developer focused on building scalable, secure systems with
            tools like <span className="text-blue-300">Node.js</span>,{" "}
            <span className="text-blue-300">Express</span>, and{" "}
            <span className="text-blue-300">Express</span>. Always learning,
            always improving.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:ajitwaman353@gmail.com"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Mail className="text-green-400" size={20} />
              <span>ajitwaman43@gmail.com</span>
            </a>

            <a
              href="https://drive.google.com/file/d/17bVNcpi5xs9bxmoYMCjma3-WPVzW--5v/view?usp=drive_link"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Eye className="text-green-400" size={20} />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/Ajitwaman980"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Github className="text-green-400" size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0  items-center  pt-20 sm: h-100 ">
          <img
            src={ProfilePhoto}
            alt="my profile image"
            className="rounded-full h-80 w-80 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
