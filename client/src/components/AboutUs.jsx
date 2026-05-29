import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="DoctorImg">
            <img
              src={image}
              alt="DoctorImg"
            />
          </div>
          <div className="hero-content">
            <p>
           We are dedicated to transforming healthcare through technology by making doctor appointments simple, fast, and accessible for everyone. Our platform connects patients with trusted healthcare professionals, allowing seamless appointment booking, real-time scheduling, and efficient consultation management — all in one place.

With a focus on user experience, security, and reliability, we aim to reduce waiting time and simplify the healthcare process for both patients and doctors. Whether it’s finding the right specialist or managing medical appointments online, our mission is to deliver smarter and more convenient healthcare solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
