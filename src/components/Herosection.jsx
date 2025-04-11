import React from "react";
import bgImage from "../assets/particles.jpg";
import { motion, useScroll } from "framer-motion";

const Herosection = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section id="hero" className="h-[100vh] relative">
      <div className="h-[100vh] w-full flex relative">
        <img
          className="h-full w-full object-cover opacity-[0.55] absolute top-0 left-0 "
          src="src/assets/particles.jpg"
          alt="background-img"
        />
        <h1 className=" absolute top-[12%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white md:text-[88px] text-4xl font-[freightbigcmp-pro] tracking-widest">
          WELCOME!!
        </h1>
      </div>
      <div className="flex absolute top-[21.9%]">
        <img
          className="md:h-[32em] md:w-[38em] "
          src="src/assets/code.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Herosection;
