import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center py-10 md:py-0"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
          <motion.p 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>
        </div>

        <motion.p 
          className="text-lg md:text-xl mt-10 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I am Talha Riaz, a passionate and dedicated front-end developer with a solid foundation in computer science, having graduated with a degree in Computer Science. My expertise lies in React.js, which enables me to build dynamic and responsive web applications. Additionally, my proficiency in HTML, CSS, JavaScript, and Tailwind CSS allows me to create visually appealing and user-friendly interfaces.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I thrive on tackling complex problems and am committed to staying updated with the latest industry trends and technologies. Whether it's crafting seamless user experiences or implementing innovative UI designs, I am always eager to take on new challenges and deliver high-quality solutions.
          <br /><br />
          I am always passionate about continuous learning and am always on the lookout for opportunities to grow both personally and professionally. If you’re looking for a dedicated developer with a blend of technical expertise, feel free to connect with me. Let's build something amazing together!
          <br/><br />
          Additionally, I also have a deep passion for cricket, which sharpens my strategic thinking and fosters a sense of teamwork. Additionally, I am highly interested in politics, where I engage with diverse viewpoints and stay informed about current affairs.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
