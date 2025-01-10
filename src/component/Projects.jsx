import React from "react";
import {
  Shield,
  Database,
  Home,
  Github,
  FileText,
  Newspaper,
  Terminal,
  ExternalLink,
} from "lucide-react";
import satysimpleImage from "../assets/satysimple.png";
import blogwebsiteImage from "../assets/blog website.jpg";
import resumeImage from "../assets/resume.jpg";
import imagessaver from "../assets/images.png";
import EmployeeManagementSystem from "../assets/Employee Management System.jpg";
import ReactAuthenticationwithbackend from "../assets/React-Authentication-with-backend.png";
import RoleBasedAuthentication from "../assets/Role-Based Authentication.jpg";
const Projects = () => {
  const projects = [
    {
      title: "Microservices Blog Platform",
      description:
        "A scalable blog platform built with microservices architecture, featuring user authentication, post management, and inter-service communication using Kafka.",
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
      github: "https://github.com/Ajitwaman980/Blog-Website-",
      image: blogwebsiteImage,
    },
    {
      title: "Resume Builder",
      description:
        "Interactive resume builder application with customizable templates, real-time preview, and PDF export functionality.",
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
        "Secure system with role-based access control for admins and employees. Reduced API response times by 50% using Redis caching.",
      icon: <Shield className="text-green-400" size={24} />,
      tech: [
        "Node.js",
        "Express",
        "JWT",
        "Redis",
        "Mongoose",
        "Bcrypt",
        "typescript",
      ],
      github:
        "https://github.com/Ajitwaman980/Role-Based-Authentication-System",
      demo: "https://github.com/Ajitwaman980/Role-Based-Authentication-System",
      image: RoleBasedAuthentication,
    },
    {
      title: "Image-Saver",
      description:
        "Web application for managing profile images with secure authentication, image uploading, updating, and deletion. Increased performance by 60% using caching.",
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
      demo: " https://imagesaver-z1w2.onrender.com",
      image: imagessaver,
    },
    {
      title: "Stay-simple",
      description:
        "Scalable rental management system with secure login, schema validation, and image management. Features MVC architecture and responsive UI.",
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
        "nodemailer",
        "Tailwind CSS",
      ],
      github: "https://github.com/Ajitwaman980/stayHome",
      demo: "https://stayhome1-gg67cyz8.b4a.run/",
      image: satysimpleImage,
    },
    {
      title: "Employee Management System",
      description:
        "C++ based system for efficient employee data management with CRUD operations and secure authentication.",
      icon: <Terminal className="text-green-400" size={24} />,
      tech: ["C++", "Data Structures", "oops"],
      github: "https://github.com/Ajitwaman980/Employee-Management-System",

      image: EmployeeManagementSystem,
    },
    {
      title: "React-Authentication-with-backend",
      description:
        "React-based authentication system with a backend for secure user login, registration, and session management.",
      icon: <Terminal className="text-green-400" size={24} />,
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      github:
        "https://github.com/Ajitwaman980/React-Authentication-with-backend-",
      demo: "https://github.com/Ajitwaman980/React-Authentication-with-backend",
      image: ReactAuthenticationwithbackend,
    },
  ];

  return (
    <div id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-green-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl bg-gray-800 overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
