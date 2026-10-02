import React from "react";
import { useEffect, useState } from "react";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "./Header.css";
import { dynamicDB, ref, onValue } from "./firebase";
import { Button, Stack } from "@mui/material";
const MainFooter = () => {
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

  return (
    <div className="Slide8">
      <p className="Slide81">
        {slides.slide7?.field1?.value ||
          `Nirmeek Associates: Permit Assistence Since 2006`}
      </p>
      <p className="Slide811">
        {" "}
        {slides.slide7?.field2?.value ||
          `“They literally made the building of our dream house a reality!”`}{" "}
        <br />{" "}
        <span className="Slide812">
          <i>{slides.slide7?.field3?.value || `-Sarvesh More`}</i>
        </span>
      </p>
      <Stack
        className="buttonsGroup"
        sx={{
          display: "flex",
          gap: "50px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Call Button */}
        <Button
          component="a"
          href="tel:+918898224371" // Replace with actual phone number
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "auto",
            height: "auto",
            fontSize: "1vw",
            margin: "1rem auto",
            padding: "0.8rem 1.5rem",
            display: "block",
            textAlign: "left",
          }}
        >
          Call
        </Button>

        {/* Email Button */}
        <Button
          component="a"
          href="mailto:moreprajwal083@gmail.com" // Replace with actual email
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "auto",
            height: "auto",
            fontSize: "1vw",
            margin: "1rem auto",
            padding: "0.8rem 1.5rem",
            display: "block",
            textAlign: "left",
          }}
        >
          Email
        </Button>

        {/* Text Button */}
        <Button
          component="a"
          href="sms:+918898224371" // Replace with actual phone number
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "auto",
            height: "auto",
            fontSize: "1vw",
            margin: "1rem auto",
            padding: "0.8rem 1.5rem",
            display: "block",
            textAlign: "left",
          }}
        >
          Text
        </Button>
      </Stack>

      <p className="SLide1">
        {slides.slide7?.field4?.value ||
          `Cities: Fort, Dadar, Parel, Lower Parel, CSMT, Juhu`}
        <br />
        {slides.slide7?.field5?.value ||
          `Permit Help for Areas Not Listed? Contact Us.`}
      </p>
    </div>
  );
};

export default MainFooter;
