import React, { useState } from "react";
import { Database, Server, Code, Send } from "lucide-react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const sections = [
    {
      title: "Backend Development",
      icon: <Server size={24} className="text-green-400" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "Authentication",
        "Authorization",
        "Passport.js",
        "JWT",
        "EJS",
        "Redis",
        "Microservices",
        "Kafka",
        "Autocannon",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code size={24} className="text-green-400" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={24} className="text-green-400" />,
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
  ];

  return (
    <section id="Skills" className="py-8 bg-gray-900 text-white font-mono">
      <div className="container px-2 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            My <span className="text-green-400">Skills</span>
          </h2>
          {/* Center input box horizontally */}
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md border border-green-500 max-w-md w-full">
              <input
                type="text"
                readOnly
                value="GET ajitwaman/skills"
                className="bg-transparent text-green-400 text-sm sm:text-lg w-full outline-none font-mono"
              />
              <button onClick={() => setShowSkills(true)}>
                <Send size={20} className="text-green-400" />
              </button>
            </div>
          </div>
        </div>

        {showSkills && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {section.skills.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center gap-2 hover:text-white"
                    >
                      <span className="text-green-400">→</span>
                      <span className="font-mono">{item}</span>
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
