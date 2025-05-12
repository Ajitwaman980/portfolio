import React from "react";
import { Database, Server, Code } from "lucide-react";

const Skills = () => {
  const sections = [
    {
      title: "Backend Development",
      icon: <Server size={24} />,
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
      icon: <Code size={24} />,
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
      title: "Databases & Devops",
      icon: <Database size={24} />,
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
        "kubernetes",
      ],
    },
  ];

  return (
    <section id="Skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-green-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-400">{section.icon}</div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.skills.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-center gap-2 transition-all duration-300 hover:text-white"
                  >
                    <span className="text-green-400">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
