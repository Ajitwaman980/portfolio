import React from "react";
import { Navbar } from "./component/navbar";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import { About } from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
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
