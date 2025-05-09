import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Herosection = () => {
  const sectionRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform mappings
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.002], [1, 0.4]);

  // Animation variants
  const textVariants = {
    initial: { y: -40, scale: 1 },
    animate: {
      y: 0,
      scale: 1.1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <motion.section id="hero" ref={sectionRef} className="h-[100vh] relative ">
      <ParticleBackground className="particle-background " />
      <div className="h-[100vh] w-full flex relative">
        <motion.img //background image
          style={{ y: backgroundY }}
          className="h-full w-full object-cover opacity-[0.3] absolute top-0 left-0 "
          src="src/assets/particles.jpg"
          alt="background-img"
        />
        <div>
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            style={{ y: textY, opacity: textOpacity }}
            className="absolute md:top-[8%] top-[2%] left-[50%] transform -translate-x-[50%] w-fit
            "
          >
            <span
              className=" md:text-[56px] text-2xl font-[freightbigcmp-pro] tracking-widest animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 
                           drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            >
              Welcome To My Site...
            </span>
          </motion.h1>
        </div>
        <div className=" absolute top-[30%] left-[20%]  ">
          <p className="md:text-4xl ">
            {" "}
            Hello, This is{" "}
            <span className="text-purple-500">Bishwa Gurung</span>.
          </p>
          <p className="mt-6 text-[#f6fbcb] md:text-xl  ">
            I am a Full Stack Developer | React | NextJS | NodeJS | MongoDB
          </p>
          <div className="ml-[20%] ">
            <button
              type="button"
              className=" mt-8 rounded-full cursor-pointer border-2 border-white bg-transparent px-4 py-2 text-white 
               hover:bg-[#046a87]  hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-400 
               transition-all duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Github
            </button>
            <button
              type="button"
              className=" mt-8 ml-[20px] rounded-full cursor-pointer border-2 border-white bg-transparent px-4 py-2 text-white 
               hover:bg-[#046a87]  hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-400 
               transition-all duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herosection;
