import React, { Component } from "react";
import { github, linkedin, discord, twitter } from "../assets";
import "./style/index.css";
const ImageLoader = ({ color, image_url, alt, website_url }) => {
  return (
    <div
      onClick={() => window.open(website_url, "_blank")}
      className={`bg-${color}-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer`}
    >
      <img src={image_url} alt={alt} className="w-1/2 h-1/2 object-contain" />
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-10 pt-5">
        <ImageLoader
          color="black"
          image_url={github}
          alt="github"
          website_url="https://github.com/abilmanoj1"
        />
        <ImageLoader
          color="blue"
          image_url={linkedin}
          alt="linkedin"
          website_url="https://www.linkedin.com/in/abil-manoj/"
        />
        <ImageLoader
          color="white"
          image_url={twitter}
          alt="twitter"
          website_url="https://twitter.com/abilmanoj1"
        />
      </div>
    </>
  );
};

export default Footer;
