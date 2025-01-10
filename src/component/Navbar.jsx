import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
const title_devloper = {
  Frontend: "Frontend",
  Backend: "Backend",
  FullStack: "FullStack",
};
function Navbar() {
  const [currentDevlopertitle, setCurrentDevlopertitle] = useState(
    title_devloper.Backend
  );

  const randomTitle = () => {
    const title = Object.keys(title_devloper);
    // console.log(title);
    const randomTitle = Math.floor(Math.random() * title.length);
    // console.log(randomTitle);
    setCurrentDevlopertitle(title[randomTitle]);
  };
  //   randomTitle();
  useEffect(() => {
    // set time to current time and update the time every second
    const interval = setInterval(() => {
      randomTitle();
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className=" bg-gray-800 text-white flex justify-around  items-center h-16 w-full">
        <div className=" flex items-center gap-2">
          <Terminal size={20} className="text-green-400" />
          <h1>Devloper {currentDevlopertitle}</h1>
        </div>
        <div>
          <nav className="flex justify-around items-center  gap-5 ">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Project</a>
            <a href="#Skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
