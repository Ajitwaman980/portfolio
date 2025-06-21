import React, { useState } from "react";
import { Database, Server, Code, Send, TestTube } from "lucide-react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const sections = [
    {
      title: "Backend Development",
      icon: <Server size={20} />,
      skills: [
        "Node.js",
        "Express.js",
        "Hono",
        "REST API",
        "Authentication",
        "Authorization",
        "Passport.js",
        "JWT",
        "Redis",
        "Microservices",
        "Kafka",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code size={20} />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "EJS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={20} />,
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Hoppscotch",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Testing Tools",
      icon: <TestTube size={20} />,
      skills: ["unit testing", "integration testing", "Postman", "Hoppscotch"],
    },
  ];

  return (
    <section id="Skills" className="py-16 bg-gray-900 text-white font-mono">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-3">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-gray-400">
            Click to reveal the technologies I use and love.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-md px-4 py-3 rounded-xl border border-green-500 max-w-md w-full shadow-lg">
            <input
              type="text"
              readOnly
              value="GET ajitwaman/skills"
              className="bg-transparent text-green-400 text-sm sm:text-lg w-full outline-none font-mono placeholder:text-green-300"
            />
            <button
              onClick={() => setShowSkills(true)}
              className="hover:scale-110 transition"
            >
              <Send size={20} className="text-green-400" />
            </button>
          </div>
        </div>

        {showSkills && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 border border-gray-700 rounded-2xl p-6 backdrop-blur-md hover:shadow-green-400/20 hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.skills.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      <span className="text-green-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
