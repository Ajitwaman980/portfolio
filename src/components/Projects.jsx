import React, { useState } from "react";
import {
  Shield,
  Database,
  Home,
  Github,
  FileText,
  Newspaper,
  Terminal,
  ExternalLink,
  Send,
} from "lucide-react";
import satysimpleImage from "../assets/satysimple.png";
import blogwebsiteImage from "../assets/blog website.jpg";
import resumeImage from "../assets/resume.jpg";
import imagessaver from "../assets/images.png";
import EmployeeManagementSystem from "../assets/Employee Management System.jpg";
import ReactAuthenticationwithbackend from "../assets/React-Authentication-with-backend.png";
import RoleBasedAuthentication from "../assets/Role-Based Authentication.jpg";
import medium from "../assets/medium.png";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Medium Clone Backend",
      description:
        "Backend for Medium-style blog with Hono, Prisma, PostgreSQL, JWT. Summary feature using Gemini API.",
      icon: <Newspaper className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Hono.js",
        "PostgreSQL",
        "JWT",
        "Zod",
        "Prisma",
        "Docker",
        "Gemini AI",
      ],
      github: "https://github.com/Ajitwaman980/Medium-Backend",
      image: medium,
    },
    {
      title: "KafkaBlog",
      description:
        "Microservices backend with Auth and Post services communicating via Apache Kafka.",
      icon: <Newspaper className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Kafka",
        "JWT",
        "microservices",
        "Redis",
        "Docker",
      ],
      github: "https://github.com/Ajitwaman980/KafkaBlog-",
      image: blogwebsiteImage,
    },
    {
      title: "Resume Builder",
      description:
        "Create professional resumes with live preview and export to PDF.",
      icon: <FileText className="text-green-400" size={24} />,
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "PDF.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/Ajitwaman980/ResumeMaker",
      demo: "https://github.com/Ajitwaman980/ResumeMaker",
      image: resumeImage,
    },
    {
      title: "Role-Based Authentication",
      description:
        "Admin/employee access system using Redis for fast token verification.",
      icon: <Shield className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Express",
        "JWT",
        "Redis",
        "Mongoose",
        "Bcrypt",
        "TypeScript",
      ],
      github:
        "https://github.com/Ajitwaman980/Role-Based-Authentication-System",
      demo: "https://github.com/Ajitwaman980/Role-Based-Authentication-System",
      image: RoleBasedAuthentication,
    },
    {
      title: "Image Saver",
      description:
        "Image management system with upload/edit/delete, caching, and authentication.",
      icon: <Database className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Express",
        "Mongoose",
        "Cloudinary",
        "EJS",
        "Passport.js",
        "NodeCache",
      ],
      github: "https://github.com/Ajitwaman980/ImageSaver-",
      demo: "https://imagesaver-z1w2.onrender.com",
      image: imagessaver,
    },
    {
      title: "Stay-simple",
      description:
        "Room rental app with secure login, image uploads, validation, and email support.",
      icon: <Home className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Express",
        "Mongoose",
        "Passport.js",
        "Joi",
        "Redis",
        "Docker",
        "EJS",
        "Nodemailer",
        "Tailwind CSS",
      ],
      github: "https://github.com/Ajitwaman980/stayHome",
      demo: "https://stayhome1-gg67cyz8.b4a.run/",
      image: satysimpleImage,
    },
    {
      title: "Employee Management System",
      description:
        "C++ console CRUD system with login and object-oriented design.",
      icon: <Terminal className="text-green-400" size={24} />,
      tech: ["C++", "Data Structures", "OOP"],
      github: "https://github.com/Ajitwaman980/Employee-Management-System",
      image: EmployeeManagementSystem,
    },
    {
      title: "React Auth (with Backend)",
      description:
        "Full-stack React login/register app using Node.js + MongoDB.",
      icon: <Terminal className="text-green-400" size={24} />,
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      github:
        "https://github.com/Ajitwaman980/React-Authentication-with-backend-",
      demo: "https://github.com/Ajitwaman980/React-Authentication-with-backend",
      image: ReactAuthenticationwithbackend,
    },
  ];

  return (
    <section
      id="projects"
      className="py-8 bg-gray-900 text-white font-mono mb-10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Click on a project to explore the details.
          </p>
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md border border-green-500 max-w-md w-full">
            <input
              type="text"
              readOnly
              value="GET ajitwaman/Projects"
              className="bg-transparent text-green-400 text-sm sm:text-lg w-full outline-none font-mono"
            />
            <button onClick={() => setShowProjects(true)}>
              <Send size={20} className="text-green-400" />
            </button>
          </div>
        </div>

        {showProjects && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="h-48 w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-green-400 text-xs rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
