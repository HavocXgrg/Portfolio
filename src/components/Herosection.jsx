import React, { useEffect, useRef } from "react";
import { skillIcons } from "../constant/Constant";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Herosection = () => {
  const sectionRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress, scrollY } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 640]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.6, 0.5]
  );
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0, 0]);

  // Animation variants
  const pulseVariant = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  const durations = [4, 4.5, 5, 5.5, 6]; //durations in transitions for the skillicons

  // Log scrollYProgress in real-time
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("scrollYProgress:", value);
    });
    return () => unsubscribe(); // Clean up the listener
  }, [scrollYProgress]);
  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      className="relative md:min-h-screen h-[89vh] overflow-hidden"
    >
      {console.log(scrollYProgress)}
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 overflow-hidden" // Contains particles
        style={{ y: backgroundY }}
      >
        <motion.img
          className="w-full md:h-full h-[145%]  object-cover opacity-30"
          src="src/assets/particles.webp"
          alt="abstract background"
        />

        {/* Particle Background */}
        <div className="absolute inset-0 z-10">
          <ParticleBackground />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 flex flex-col justify-between h-full px-4 py-2 md:py-12 md:px-8 "
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Header Section */}
        <motion.header className="text-center ">
          <motion.h1
            variants={pulseVariant}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-5xl font-bold tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Welcome To My Portfolio
            </span>
          </motion.h1>
        </motion.header>

        {/* Main Content */}
        <motion.div className="flex items-center justify-center min-h-[30vh] mb-36 md:mb-0  ">
          <div className="max-w-3xl text-center mt-14">
            <p className="text-2xl md:text-4xl mb-4">
              Hello, I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold animate-gradient-smooth">
                Bishwa Gurung
              </span>
            </p>
            <p className="text-lg md:text-xl text-blue-200 mb-8">
              Web Developer | Front-End
            </p>
            {/* skills icon grid */}
            <div className="grid grid-cols-5 gap-10 md:mt-18">
              {skillIcons.map((skill, index) => (
                <motion.div
                  key={index}
                  // className="flex flex-col items-center"
                  animate={{
                    y: [0, 22, 0], // Float up and down (22px)
                    scale: [1, 0.9, 1], // Pulse from normal to 120% size
                  }}
                  transition={{
                    duration: durations[index], // Unique duration for each icon
                    repeat: Infinity, // Loop forever
                    ease: "easeInOut", // Smooth easing
                    delay: index * 0.2, // Staggered start (0.2s apart)
                    times: [0, 0.5, 1], // Keyframe timing (halfway for peak)
                  }}
                >
                  <div className={`${skill.color} mb-2`}>{skill.icon}</div>
                  <span className="text-white text-sm ">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 md:mt-24 mt-18 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border-2 border-white bg-transparent text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                GitHub
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border-2 border-white bg-transparent text-white hover:bg-purple-500 transition-colors cursor-pointer"
              >
                Resume
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center md:py-6 md:mb-0 mb-12 "
          style={{ opacity: arrowOpacity }}
          animate={{ y: [-10, 10] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <MdKeyboardDoubleArrowDown className="text-4xl md:text-6xl text-white " />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Herosection;
