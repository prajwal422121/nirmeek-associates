import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "./assets/cityscape-5543224.jpg";
import img2 from "./assets/skyscraper-2171709.jpg";
import img3 from "./assets/skyscraper-4340541.jpg";
import img4 from "./assets/new-york-1745089.jpg";

const images = [img1, img2, img3, img4];

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(nextImage);
      setNextImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          opacity: 1,
          transition: "opacity 1s ease-in-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[nextImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0,
          transition: "opacity 0s ease-in-out",
        }}
      />
    </div>
  );
};

export default BackgroundSlider;
