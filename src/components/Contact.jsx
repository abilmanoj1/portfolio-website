import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { ContactWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Footer from "./Footer";

import Modal from "./Modal";
import SendingAnimation from "./SendingAnimation";

import Lottie from "react-lottie";
import purple_paper from "../assets/purple-plane.json";
import { tick_animation } from "../assets";
import { cross_animation } from "../assets";

import { emailModalStatus } from "../enums/emailModalStatus";

const ModalContent = ({ modalContent }) => {
  const paperFlightOptions = {
    loop: true,
    autoplay: true,
    animationData: purple_paper,
  };

  const tickAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: tick_animation,
  };

  const crossAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: cross_animation,
  };

  return (
    <>
      <div className="text-center">
        <div className="w-24 h-24 bg-[#f6f2ff] rounded-full mx-auto mb-4 flex items-center justify-center ">
          {/* <div className="ml-1"> */}
          {modalContent == emailModalStatus.PLANE ? (
            <Lottie options={paperFlightOptions} height={105} width={105} />
          ) : modalContent == emailModalStatus.TICK ? (
            <Lottie options={tickAnimationOptions} height={75} width={75} />
          ) : (
            <Lottie options={crossAnimationOptions} height={75} width={75} />
          )}
          {/* </div> */}
        </div>
        {modalContent == emailModalStatus.PLANE ? (
          <p className="text-white text-[24px] font-bold mt-7">Sending</p>
        ) : (
          <p className="text-white text-[24px] font-bold mt-7">
            {modalContent == emailModalStatus.TICK
              ? "Email Sent"
              : "Error! Retry again."}
          </p>
        )}
      </div>
    </>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(emailModalStatus.PLANE);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
    setModalContent(emailModalStatus.PLANE);
    setLoading(true);
    emailjs
      .send(
        "service_3jqrhwb",
        "template_jt4ivvo",
        {
          from_name: form.name,
          to_name: "Abil Manoj",
          from_email: "workwithabil@gmail.com",
          message: form.message,
        },
        "1K12RNk1QlUlzjgeS"
      )
      .then(
        () => {
          setLoading(false);
          setModalContent(emailModalStatus.TICK);
          setTimeout(() => {
            closeModal();
            setModalContent(emailModalStatus.PLANE);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 2000);
        },
        (error) => {
          setLoading(false);
          setModalContent(emailModalStatus.CROSS);
          setTimeout(() => {
            closeModal();
            setModalContent(emailModalStatus.PLANE);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 2000);
          // closeModal();
          console.log(error);
          // alert("Something went wrong.");
        }
      );
  };
  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100
      p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-small text-[14px]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-small text-[14px]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-small text-[14px]"
              />
            </label>
            <button
              type="submit"
              className="bg-[#915EFF]
          py-3 px-8 ouline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ml-auto
          cursor-pointer"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      {/* <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mt-5">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] justify-center items-center flex-rows"
        >
          <p>Hi</p>
          <p>Hi</p>
          <p>Hi</p>
        </motion.div>
      </div> */}
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent modalContent={modalContent} />
      </Modal>
    </>
  );
};

export default ContactWrapper(Contact, "contact");
