import React from "react";
import { motion, useAnimation } from "framer-motion";

const SendingAnimation = () => {
  const dotVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.5, 1],
      transition: { duration: 0.5 },
    },
  };

  const controls = useAnimation();

  const startAnimation = async () => {
    while (true) {
      await controls.start("animate");
      await controls.start("initial");
    }
  };

  startAnimation();

  return (
    <p className="text-white text-[24px] font-bold mt-7">
      Sending
      <motion.span
        variants={dotVariants}
        initial="initial"
        animate={controls}
        style={{ display: "inline-block", marginLeft: "0.2rem" }}
      >
        .
      </motion.span>
      <motion.span
        variants={dotVariants}
        initial="initial"
        animate={controls}
        style={{ display: "inline-block", marginLeft: "0.2rem" }}
      >
        .
      </motion.span>
      <motion.span
        variants={dotVariants}
        initial="initial"
        animate={controls}
        style={{ display: "inline-block", marginLeft: "0.2rem" }}
      >
        .
      </motion.span>
    </p>
  );
};

export default SendingAnimation;
