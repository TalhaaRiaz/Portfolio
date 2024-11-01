import React from "react";
import Tilt from "react-parallax-tilt";
import LMS from "../assets/portfolio/LMS.png";
import Notes from "../assets/portfolio/Notes.png";
import navbar from "../assets/portfolio/navbar.jpg";
import Portfolioo from "../assets/portfolio/Portfolioo.png";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: LMS, codeLink: "https://github.com/zubairzahid94/ilms-skyed" }, // LMS link
    { id: 2, src: Notes, codeLink: "https://github.com/TalhaaRiaz/Note-Management-System." }, // Note Management System link
    { id: 3, src: navbar, codeLink: "https://github.com/TalhaaRiaz/Responsive-Navbar" }, // Responsive Navbar link
    { id: 4, src: Portfolioo, codeLink: "https://your-portfolio-link.com" }, // Replace with your Portfolio link
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-8 md:mt-0">
        <div className="pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
            Portfolio
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Explore some of my featured projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12">
          {portfolios.map(({ id, src, codeLink }) => (
            <Tilt
              key={id}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={400}
            >
              <div className="group relative transform hover:-translate-y-2 hover:scale-105 transition duration-300">
                <img
                  src={src}
                  alt={`Portfolio item ${id}`}
                  className="rounded-lg group-hover:brightness-110 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button 
                    className="text-white text-lg font-semibold rounded-lg py-2 px-4 hover:bg-gray-700 transition duration-300"
                    onClick={() => window.open(codeLink, "_blank")} // Opens the link in a new tab
                  >
                    View Code
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
