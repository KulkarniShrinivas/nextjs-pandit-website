"use client"

import React, { useEffect, useRef } from "react";
import TextTransition, { presets } from 'react-text-transition';
import { ImagesSliderDemo } from "./hero-image-slider";
import { vipPhotosData } from "../../../public/data/photo-gallery-data";
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

  const images = vipPhotosData.map((d) => d.img.src)

  return (
    <main className="mt-[70px]">
      <ImagesSliderDemo
        images={images}
        btnName="Book Now"
        heading={<span>Experience <br/> {mainData.typeWriterText[0]} <br/> {mainData.typeWriterText[1]}</span>}
      />
    </main>
  );
};

export default Main;
