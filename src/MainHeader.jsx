import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "./Header.css";
import logo from "./assets/logo.png";

import { dynamicDB, ref, onValue } from "./firebase";

const MainHeader = () => {
  const [slides, setSlides] = useState({
    slide1: {},
    slide2: {},
    slide3: {},
    slide4: {},
    slide5: {},
    slide6: {},
    slide7: {},
  });

  // Fetch data from Firebase
  useEffect(() => {
    const fetchSlideData = (slideNumber) => {
      const slideRef = ref(dynamicDB, `slide${slideNumber}`);
      onValue(slideRef, (snapshot) => {
        const data = snapshot.val();
        setSlides((prevSlides) => ({
          ...prevSlides,
          [`slide${slideNumber}`]: data,
        }));
      });
    };

    for (let i = 1; i <= 7; i++) {
      fetchSlideData(i);
    }
  }, []);

  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/project");
  };
  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };

  return (
    <nav className="navigate2">
      <p className="title" onClick={handleHomeClick}>
        <img
          src={logo}
          alt="logo"
          width="35rem"
          height="25rem"
          className="imagejd"
        />
        {slides.slide1?.field1?.value || "NIRMEEK ASSOCIATES"}
      </p>
      <p className="Projects" onClick={handleProjectClick}>
        {slides.slide1?.field2?.value || "Projects"}
      </p>
      <p className="aboutUS" onClick={handleAboutUsClick}>
        {slides.slide1?.field3?.value || "About Us"}
      </p>
    </nav>
  );
};

export default MainHeader;
