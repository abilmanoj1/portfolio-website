import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

import "../components/style/index.css";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=""
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border-2 border-transparent glow-border"
          // Apply the glowing effect on hover
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-inherit leading-[30px] text-justify"
      >
        Accomplished Full-Stack Developer with a passion for technology and a
        proven track record of delivering high-quality software solutions.
        Enthusiastic about pursuing exciting opportunities to contribute
        expertise and drive to learn. Extensive experience in diverse tech
        domains, proficiency in Software Development Life Cycle, Agile
        methodologies, and a commitment to SOLID principles provide a strong
        foundation for any software development role. Forte lies in crafting
        high-quality code and actively participating in decision-making
        processes, while also bolstering and enhancing the infrastructure.
        Recently completed a Master's in Advanced Computer Science from the
        University of Birmingham. Actively looking for challenging positions
        that can harness my skills and drive innovation in the tech landscape.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-between">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
          // console.log(service);
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// export default About;
