import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);

  // Scroll tracking for the About section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Start when top of section hits bottom of viewport
  });

  // Animation transformations
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 0.5, 1]
  );
  const contentY = useTransform(scrollYProgress, [0, 0.2, 0.5], [100, 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.8, 0.9, 1]);

  return (
    <motion.section className="min-h-screen relative   ">
      <motion.div className="container min-h-screen  bg-gradient-to-b from-[#0d1520] to-[#1b3237] ">
        <div className="flex flex-col items-center top-4">
          <h1 className="text-gray-200 md:text-5xl text-4xl  font-bold mt-12">
            About Me
          </h1>
          <p className=" md:w-[65vw] w-[85vw] text-center mt-8 text-gray-300 text-md md:text-2xl leading-normal tracking-wide">
            I'm currently a{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold ">
              Front-End Developer
            </span>{" "}
            passionate for building efficient, web solutions. Mainly focused in
            front end for now I also have strong enthusiasm in learning
            Back-end. Ultimately, the end goal is to be a Full Stack Developer
            turning ideas into reality with clean, user-prefered designs and
            engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 text-gray-400">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2 opacity-60"></div>
              <span>Available for work</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 opacity-60"></div>
              <span>Open to collaboration</span>
            </div>
          </div>
        </div>
        <div className="bg-red-600 w-full h-10 mt-18"></div>
      </motion.div>
    </motion.section>
  );
};

export default About;
