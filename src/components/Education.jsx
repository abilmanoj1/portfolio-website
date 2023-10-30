import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { education_obtained } from "../constants";

const Education = () => {
  //   const subjects = [
  //     "Human Computer Interaction",
  //     "Computer Aided Verification",
  //     "Computer Vision",
  //     "Advanced Computer Networks",
  //     "Mobile & Ubiquitous Computing",
  //     "Secure Software & Hardware",
  //   ];
  //   const dissertation = [
  //     "Hybrid Recommendation Engine using Graph Neural Networks and BERT",
  //   ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learnt</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      {education_obtained.map((education, index) => (
        <motion.div
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          key={index}
          className="sm:px-8 px-6 sm:py-8 py-10 mt-12 bg-tertiary rounded-[20px] flex gap-8"
        >
          <div
            onClick={() => window.open(`${education.url}`, "_blank")}
            className="w-24 h-24 flex justify-center items-center cursor-pointer"
          >
            <img
              src={education.logo}
              alt={education.logo_alt}
              className="w-1/8 h-1/8 object-contain rounded-full"
            />
          </div>
          <div className={`rounded-2xl min-h-[300px] w-full`}>
            <h3 className="text-white text-[24px] font-bold">
              {education.course}
              <span className="text-[14px] italic">
                &nbsp;&nbsp;
                {education.speciality !== "" ? education.speciality : ""}
              </span>
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {education.university_name}
              <span className="italic text-[14px]">
                &nbsp; ({education.course_duration})
              </span>
            </p>
            <div className="mt-5">
              <p className="text-secondary text-[14px] mb-2">
                Subjects Learned:
              </p>
              <div className="flex flex-wrap gap-3">
                {education.subjects.map((subject, index) => (
                  <div className="inline-block" key={index}>
                    <div className="border border-secondary p-1.5 rounded-lg">
                      <p className="text-secondary text-[12px]">{subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p className="text-secondary text-[14px] mb-2">Dissertation:</p>
              <div className="flex flex-wrap gap-3">
                {education.dissertation.map((subject, index) => (
                  <div className="inline-block" key={index}>
                    <div className="border border-secondary p-1.5 rounded-lg">
                      <p className="text-secondary text-[12px]">{subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 text-secondary font-semibold text-[16px]">
              Grade : <span className="text-[22px]">{education.mark}</span>
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};
export default SectionWrapper(Education, "");
