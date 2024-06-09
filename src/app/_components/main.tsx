"use client"

import React, { useEffect, useRef } from "react";
import TextTransition, { presets } from 'react-text-transition';
// import homeImg from "../../assets/home.webp";
// import left from "../../assets/pLeft.webp";
// import right from "../../assets/pRight.webp";
// import Tilt from "react-parallax-tilt";
// import { whatsappData } from "../../utils/whatsapp";
// import BookNowBtn from "../book-now-btn/bookNowBtn";

export const mainData = {
    typeWriterText: ["Authentic Vedic Puja", "In Traditional Way"],
  };

const Main = () => {
    const [index, setIndex] = React.useState(0);
    const TEXTS = mainData.typeWriterText;

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

  return (
    <section className="main">
      {/* <div className="half-circle"></div>
      <div className="half-circle-2"></div> */}
      {/* <img src={left} className="pattern-left" />
      <img src={right} className="pattern-right" />
      <div className="img-div">
        <Tilt>
          <img src={homeImg} alt="Ganesh Image" />
        </Tilt>
      </div> */}

      <div className="main-headings">
        <h1>Experience</h1>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </div>
      <div className="btn-container">
        {/* <BookNowBtn onClick={() => whatsappData()} /> */}
        {/* <CustomButton text={"Book Now"} onClick={() => whatsappData()} /> */}
      </div>
      <div className="fade-div"></div>
    </section>
  );
};

export default Main;
