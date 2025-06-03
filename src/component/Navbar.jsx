import React, { useEffect, useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

const title_devloper = {
  Frontend: "Frontend",
  Backend: "Backend",
  FullStack: "FullStack",
};

function Navbar() {
  const [currentDevlopertitle, setCurrentDevlopertitle] = useState(
    title_devloper.Backend
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const randomTitle = () => {
    const titles = Object.values(title_devloper);
    const randomIndex = Math.floor(Math.random() * titles.length);
    setCurrentDevlopertitle(titles[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomTitle();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-800 text-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-green-400" />
          <h1 className="text-sm sm:text-base font-mono">
            Developer {currentDevlopertitle}
          </h1>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#about" className="hover:text-green-400">
            About
          </a>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>
          <a href="#Skills" className="hover:text-green-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-700 px-4 py-4 space-y-2 text-sm font-medium">
          <a
            href="#home"
            className="block hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#Skills"
            className="block hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
