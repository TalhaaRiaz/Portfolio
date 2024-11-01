import React from 'react';
import { motion } from 'framer-motion';

const SkillsAndEducation = () => {

  const skillsData = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React js' },
    { name: 'Tailwind CSS' },
    { name: 'Git' },
    { name: 'Github' }
  ];

  const educationData = [
    { degree: 'BSCS from Air University, Islamabad' },
    { degree: 'FSc from Royal College' },
    { degree: 'Matric from FFMS' }
  ];

  const coursesData = [
    { name: 'The Complete 2024 Web Development Bootcamp', provider: 'Udemy', instructor: 'Angela Yu', link: 'https://www.udemy.com/certificate/UC-b01a7c18-26cd-4858-8450-928622128715/' }
  ];

  return (
    <div name='SkillsAndEducation' className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
              Skills
            </h2>
            <ul className="space-y-4">
              {skillsData.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-6 h-6 bg-cyan-500 rounded-full mr-3"></span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
              Education
            </h2>
            <ul className="space-y-4">
              {educationData.map((education) => (
                <motion.li
                  key={education.degree}
                  className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-6 h-6 bg-cyan-500 rounded-full mr-3"></span>
                  {education.degree}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
            Courses
          </h2>
          <ul className="space-y-4">
            {coursesData.map((course) => (
              <motion.li
                key={course.name}
                className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <span className="w-6 h-6 bg-cyan-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-bold">{course.name}</p>
                    <p className="text-gray-400">{course.provider} - {course.instructor}</p>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndEducation;
