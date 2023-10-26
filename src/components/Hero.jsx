import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetSection = document.getElementById("about");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Abil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack <br className="sm:block hidden" />
            web applications developer
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <a href="#about" onClick={scrollToSection}>
        <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
          <div className="w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 22, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-5 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </div>{" "}
      </a>
    </section>
  );
};

export default Hero;
