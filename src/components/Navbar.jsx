import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {
  abilnobg,
  menu,
  close,
  download_purple,
  download_white,
} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const pdfPath = "./src/document/Abil Manoj - Resume.pdf";

    const anchor = document.createElement("a");
    anchor.href = pdfPath;
    anchor.download = "Abil Manoj - Resume.pdf";
    anchor.style.display = "none";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={abilnobg}
            alt="logo-abil manoj"
            className="w-16 h-16 object-contain"
          ></img>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Abil Manoj&nbsp;
            {/* <span className="sm:block hidden">|&nbsp;Software Engineer</span> */}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
          hover:text-white text-[18px] flex items-center font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <button
              className="group relative w-32 h-10 rounded-full bg-white text-purple-600 hover:text-white hover:bg-purple-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleDownload}
            >
              <div className="flex items-center justify-center">
                {/* <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform group-hover:scale-105">
                  <img
                    src="src/assets/download-white.png"
                    alt="Icon"
                    className="w-6 h-6 m-3"
                  />
                </div> */}
                <div className="flex items-center gap-2">
                  <img
                    src={isHovered ? download_white : download_purple}
                    alt="Icon"
                    className="w-6 h-6 transition duration-300 ease-in-out"
                  />
                  <span className="relative z-10">Resume</span>
                </div>
              </div>
            </button>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
          font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
