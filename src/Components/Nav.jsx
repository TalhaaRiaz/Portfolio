import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'SkillsAndEducation' },
    { id: 5, link: 'contact' }, 
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-900 fixed shadow-lg z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 transform hover:rotate-12 transition-transform bg-white duration-500 ease-in-out text-transparent bg-clip-text font-bold">
          Talha
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:text-white transition-transform duration-150 transform hover:scale-110 hover:translate-y-1 hover:shadow-lg"
          >
            <ScrollLink to={link} smooth duration={500}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-po inter pr-4 z-10 text-gray-200 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-900 text-gray-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl transform hover:scale-110 transition-transform duration-150 ease-in-out hover:shadow-lg"
            >
              <ScrollLink onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;