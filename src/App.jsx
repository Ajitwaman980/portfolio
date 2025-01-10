import React from "react";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";

import Footer from "./component/Footer";
import { About } from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export default function () {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
