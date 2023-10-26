import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, techVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-5">
        <p className={styles.sectionSubText}>What are the things that I know</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <motion.div variants={techVariant()}>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => {
            return (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
