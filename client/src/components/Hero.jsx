import React from "react";
import DoctorImg from "../images/DoctorImage.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Your Health, Our Priority
Book appointments with trusted doctors anytime, anywhere — fast, secure, and hassle-free. Manage consultations, explore specialist doctors, and schedule visits effortlessly through a modern and reliable healthcare platform designed for convenience and care.

        </p>
      </div>
      <div className="DoctorImg">
        <img
          src={DoctorImg}
          alt="DoctorImg"
        />
      </div>
    </section>
  );
};

export default Hero;
