import React from "react";
import NavbarComp from "./components/NavbarComp";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { About } from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <NavbarComp />
      <main className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
