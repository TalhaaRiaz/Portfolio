import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <ReactTyped
              strings={["I'm Talha Riaz", " I'm a Front End Developer", "I'm a Student"]}
              typeSpeed={70} // Slower typing speed
              backSpeed={70} // Slower deleting speed
              loop
            />
          </h2>
          <p className="text-gray-500 py-4">
            I am a front-end developer with a flair for crafting visually striking and
            highly interactive web applications. By leveraging the latest
            technologies, I design seamless and engaging user experiences. My work
            is characterized by precision and creativity, ensuring each project is
            both functional and aesthetically pleasing. Expertise: HTML, CSS,
            JavaScript, React, Tailwind CSS.
          </p>

          <div>
            <button
              type="button"
              
            >
              <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white bg-gradient-to-r px-4 from-cyan-400 via-cyan-600 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  py-2.5 text-center me-2 mb-2 flex items-center my-2 text-md"
            >


              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-400">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
