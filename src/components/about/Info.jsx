import React from "react";
import "./Info.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Details from "./details/Details";

const Info = () => {
  return (
    <>
      <div className="main-container">
        <div className="img-box">
          <img src="src/images/vivek.jpg" alt="Vivek" className="my-img" />
        </div>
        <div className="text-box">
          <div className="h4-box">
            <h4 className="text-h4">FRONT-END DEVELOPER</h4>
          </div>
          <br />
          <h1 className="text-h1">Vivek Awasthi</h1>
          <br />
          <p className="text-p">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <br />
          <div className="btn-box">
            <a href="src/pdf/Vivek-CV.pdf" className="cv-btn" download>
              Download CV
            </a>
          </div>
          <br />
          <div className="icons-box">
            <h4 className="social-label">Check out my: </h4>
            <a
              href="https://www.instagram.com/rj_official057/"
              className="icons-list"
              target="_blank"
            >
              <FaInstagram className="insta social" />
            </a>
            <a
              href="https://in.linkedin.com/in/vivekawasthi055"
              className="icons-list"
              target="_blank"
            >
              <FaLinkedinIn className="linkedin social" />
            </a>
            <a
              href="https://github.com/vivekawasthi055"
              className="icons-list"
              target="_blank"
            >
              <FiGithub className="github social" />
            </a>
            <a
              href="https://www.youtube.com/@RjCreative5"
              className="icons-list"
              target="_blank"
            >
              <FaYoutube className="youtube social" />
            </a>
          </div>
        </div>
      </div>
      <Details></Details>
    </>
  );
};

export default Info;
