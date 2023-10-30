import React, { useState } from "react";
import { motion } from "framer-motion";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-gray-700 opacity-50 absolute inset-0"></div>
      <div className="bg-tertiary rounded-xl pt-6 pb-6 pl-12 pr-12 z-50 border border-[#915EFF] min-w-[16rem]">
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
