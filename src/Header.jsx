import React, { useEffect, useState } from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import arcitect from "./assets/floor-plan-1857175.jpg";

import "./Header.css";
import App from "./accordion";
import MainHeader from "./mainHeader";
import MainFooter from "./MainFooter";
import { dynamicDB, ref, onValue } from "./firebase";
import { useNavigate } from "react-router-dom";
import BackgroundSlider from "./BackgroundSlider";

const Header = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState({
    slide1: {},
    slide2: {},
    slide3: {},
    slide4: {},
    slide5: {},
    slide6: {},
  });

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = (path) => {
      const refPath = ref(dynamicDB, path);
      onValue(refPath, (snapshot) => {
        const data = snapshot.val();
        console.log(`Data fetched for ${path}:`, data); // Debugging
        if (data) {
          setSlides((prev) => {
            const newState = { ...prev };
            newState[path] = data; // Update the correct path
            console.log("Updated state:", newState); // Debugging
            return newState;
          });
        } else {
          console.warn(`No data found for path: ${path}`); // Debugging
        }
      });
    };

    // Fetch slides
    for (let i = 1; i <= 6; i++) fetchData(`slide${i}`);

    // Fetch testimonies
  }, []);

  const handleFeedbackClick = () => {
    navigate("/feedback");
  };

  return (
    <>
      {/* Slide 1 */}
      <div className="main">
        <BackgroundSlider />
        <Stack className="titleContainer">
          <MainHeader />
          <span className="subtitleContainer">
            <p className="subtitle">
              {slides.slide1?.field4?.value || "Take control of your permit"}
            </p>
          </span>
        </Stack>
      </div>

      {/* Slide 2 */}
      <div
        className="Slide2"
        sx={{
          padding: "40px 20px", // Vertical | Horizontal
          maxWidth: 1200, // Control content width
          margin: "0 auto", // Center content
        }}
      >
        <Stack className="info2">
          <h1 className="title2" style={{ paddingLeft: "0px" }}>
            {slides.slide2?.field1?.value ||
              "We’re here to help your permit issue"}
          </h1>
          <p className="subtitle2">
            {slides.slide2?.field2?.value ||
              `Nirmeek Associates provides the knowledge base necessary to get your
              permit from submittal to issuance. We have curated the strongest
              professionals who specialize in specific jurisdictions and know
              exactly what your project needs to get submitted quickly and in hand
              fast.`}
            <br />
            <br />
            <p>
              <strong>
                {" "}
                {slides.slide2?.field3?.value ||
                  "If You Need Permit Help We are Here For You."}
              </strong>
            </p>
          </p>
          <Stack
            className="buttonGroup"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              paddingTop: "1rem",
            }}
          >
            <Button
              onClick={handleFeedbackClick}
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "9rem",
                height: "5rem",
                fontSize: "1.2rem",
                margin: "1rem auto",
                padding: "0.8rem 1.5rem",
                display: "block",
                textAlign: "center",
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              Learn More
            </Button>
            <Button
              component="a"
              href="mailto:moreprajwal083@gmail.com"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "9rem",
                height: "5rem",
                fontSize: "1.2rem",
                margin: "1rem auto",
                padding: "0.8rem 1.5rem",
                display: "block",
                textAlign: "center",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
        <Stack className="img2">
          <img
            src={arcitect}
            style={{
              width: "100%",
              height: "auto",
              minHeight: "500px",
              maxWidth: "600px",
              margin: "0 auto",
              display: "block",
            }}
          />
        </Stack>
      </div>

      {/* Slide 3 */}
      <div
        className="Slide3"
        sx={{
          padding: "40px 20px", // Vertical | Horizontal
          maxWidth: 1200, // Control content width
          margin: "0 auto", // Center content
        }}
      >
        <Stack
          className="title3"
          direction={{ xs: "column", md: "column" }}
          sx={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            px: { xs: 2, md: 4 },
            py: 4,
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <p className="typo">
            {slides.slide3?.field1?.value || "Our Services"}
          </p>
          <Button
            variant="contained"
            onClick={handleFeedbackClick}
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              px: 4,
              py: 2,
              "&:hover": {
                bgcolor: "grey.900",
                transform: "translateY(-2px)",
                boxShadow: 3,
              },
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </Button>
        </Stack>
        <Box
          className="info3"
          sx={{
            width: "100%",
            minHeight: "60vh",
            maxWidth: 1200,
            margin: "0 auto",
            px: { xs: 2, md: 4 },
            pb: 8,
          }}
        >
          <App />
        </Box>
      </div>

      {/* Slide 4 */}
      <div
        className="Slide4"
        sx={{
          padding: "40px 20px", // Vertical | Horizontal
          maxWidth: 1200, // Control content width
          margin: "0 auto", // Center content
        }}
      >
        <Stack className="title4" style={{ display: "flex" }}>
          <p>{slides.slide4?.field1?.value || "We are your permit resource"}</p>
        </Stack>
        <Stack
          className="subtitle4"
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              width: "50rem",
              flexWrap: "Wrap",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <p>
              {slides.slide4?.field2?.value || "Identify your project needs"}
              <br />
              <br />
              {slides.slide4?.field3?.value ||
                "Over 20 years of experience in all Jurisdictions in Mumbai"}
            </p>
          </Stack>
          <Stack sx={{ width: "40rem", flexWrap: "Wrap" }}>
            <p>
              {slides.slide4?.field4?.value || "Local and connected"}
              <br />
              <br />
              {slides.slide4?.field5?.value ||
                "Trust your permitting to people who live, work and play in Mumbai"}
            </p>
          </Stack>
          <Stack sx={{ width: "50rem", flexWrap: "Wrap", paddingLeft: "2rem" }}>
            <p>
              {slides.slide4?.field6?.value || "Results"}
              <br />
              <br />
              {slides.slide4?.field7?.value ||
                "#1 in issued permits for Mumbai, Mumbai Sub-Urban and Thane"}
            </p>
          </Stack>
          <Stack
            sx={{ width: "50rem", flexWrap: "Wrap", paddingRight: "2rem" }}
          >
            <p>
              {slides.slide4?.field8?.value || "Organize & Strategize"}
              <br />
              <br />
              {slides.slide4?.field9?.value ||
                "Align builders, designers, engineers to create a seamless permit process."}
            </p>
          </Stack>
        </Stack>
      </div>

      {/* Slide 5 */}

      {/* Slide 6 - Testimonies */}
      <div
        className="Slide6"
        sx={{
          padding: "40px 40px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <p className="Slide6title1">
          {slides.slide6?.field111?.value || "Our Client's Stories"}
        </p>
        <p className="Slide6title2" style={{ textAlign: "justify" }}>
          {slides.slide6?.field2?.value ||
            `I'm so grateful a contractor recommended Nirmeek Associates to my
      neighbors and I who needed to replace a shared retaining wall in a
      steep slope Environmentally Critical Area. Will guided us through the
      process and ultimately saved us so much money because he knew what
      permitting materials were required and how to navigate SDCI's
      confusing processes. He worked directly with our geotechnical and
      civil engineers to create and submit necessary materials for the
      permit. He answered all of our questions and provided excellent advice
      throughout the process. We would not have been able to do this
      ourselves!`}
        </p>
        <p className="Slide6title3">
          <b>
            <i>
              {slides.slide6?.field1?.value ||
                "Aarav Mehta | Software Developer"}
            </i>
          </b>
        </p>
      </div>

      {/* Slide 7 - More Testimonies */}
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <svg
          width="100%"
          height="24"
          viewBox="0 0 1200 12"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6C300 6 600 0 900 6C1200 12 1200 6 1200 6"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className="Slide7"
        sx={{
          padding: "40px 20px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Stack className="sub1">
          <Stack className="sub11" sx={{ borderBottom: "2px solid black" }}>
            <p className="sub111">
              {slides.slide6?.field3?.value || "Kavita Joshi"}{" "}
              <span className="sub112">
                <i>{slides.slide6?.field4?.value || "Home Owners"}</i>
              </span>
            </p>
            <p className="sub113">
              {slides.slide6?.field5?.value ||
                `So impressed with Nirmeck Associates! From the knowledge of the
          permit progression; to taking the time to explain the process in
          relatable terms; it was the biggest relief to my spouse and I to
          have knowledgeable individuals who cared enough to help us! They
          keep us informed throughout the permitting process and were
          available to answer any questions we had along the way. They
          literally made the building of our dream house a reality!`}
            </p>
          </Stack>
          <Stack className="sub12" sx={{ borderBottom: "2px solid black" }}>
            <p className="sub121">
              {slides.slide6?.field6?.value || "Rohan Kapoor"}{" "}
              <span className="sub122">
                <i>
                  {slides.slide6?.field7?.value ||
                    "Home Owners Emergency Repair In Removal"}
                </i>
              </span>
            </p>
            <p className="sub123">
              {slides.slide6?.field8?.value ||
                `OUTSTANDING service. Will at Nirmeck Associates is highly capable,
          experienced, knowledgeable, committed to helping his clients and
          exceptionally communicative. Our only wish is that we had hired
          him/Nirmeck Associates earlier! Truly superb service. We give our
          very highest recommendation.`}
            </p>
          </Stack>
          <Stack className="sub13" sx={{ borderBottom: "0px solid black" }}>
            <p className="sub131">
              {slides.slide6?.field9?.value || "Nikhil & Sneha"}{" "}
              <span className="sub132">
                <i>
                  {slides.slide6?.field10?.value || "Small Business Owners"}
                </i>
              </span>
            </p>
            <p className="sub133">
              {slides.slide6?.field11?.value ||
                `Pulling permits in Seattle is getting more difficult for small
          business owners like us. I am so glad we found Will with Nirmeck
          Associates! He helped us pull multiple permits in record time.
          This will always be the first stop we make before taking on any
          jobs. Do yourself a favor and remove the headache and stress of
          pulling permits and have Will do it for you. I know we will!`}
            </p>
          </Stack>
        </Stack>
        <Stack className="sub2">
          <Stack className="sub21" sx={{ borderBottom: "2px solid black" }}>
            <p className="sub211">
              {slides.slide6?.field12?.value || "Rajeev"}{" "}
              <span className="sub212">
                <i>{slides.slide6?.field13?.value || "Mumbai Remodeler"}</i>
              </span>
            </p>
            <p className="sub213">
              {slides.slide6?.field14?.value ||
                `"Renovate Design relies on Nirmeck Associates for permitting in
          the Mumbai Metro Area."`}
            </p>
            <p className="sub214">
              <i>
                {slides.slide6?.field15?.value ||
                  "Rajeev Sharma | Owner: Renovate Design/Build"}
              </i>
            </p>
          </Stack>
          <Stack className="sub22" sx={{ borderBottom: "2px solid black" }}>
            <p className="sub221">
              {slides.slide6?.field16?.value || "Ananya"}{" "}
              <span className="sub222">
                <i>{slides.slide6?.field17?.value || "Architect"}</i>
              </span>
            </p>
            <p className="sub223">
              {slides.slide6?.field18?.value ||
                `"Nirmeck Associates brings clarity and certainty to the permitting
          process. They are an integral part of every project we do!"`}
            </p>
            <p className="sub224">
              <i>
                {slides.slide6?.field19?.value ||
                  "Ananya Rao | Owner | BUREAU BRAUN"}
              </i>
            </p>
          </Stack>
          <Stack className="sub23" sx={{ borderBottom: "2px solid black" }}>
            <p className="sub231">
              {slides.slide6?.field20?.value || "Devanshi"}{" "}
              <span className="sub232">
                <i>{slides.slide6?.field21?.value || "Engineer"}</i>
              </span>
            </p>
            <p className="sub233">
              {slides.slide6?.field22?.value ||
                `"With their vast knowledge of the permitting processes throughout
          the region, I can feel confident the permits will go in quickly
          with the right materials. This allows me to concentrate on
          engineering."`}
            </p>
            <p className="sub234">
              <i>
                {slides.slide6?.field23?.value ||
                  "Devanshi A. Shetty, PE | Owner | Mangalore Engineering"}
              </i>
            </p>
          </Stack>
        </Stack>
      </div>

      <div className="Slide5">
        <p className="title11">
          {slides.slide5?.field1 || "Let’s kickstart your project"}
        </p>
        <p className="title12">
          {slides.slide5?.field2 || "We’ll be with you every step of the way."}
        </p>
        <Button
          onClick={handleFeedbackClick}
          sx={{
            backgroundColor: "#F8C761",
            color: "black",
            width: "auto",
            height: "auto",
            fontSize: "1.5rem",
            margin: "1rem auto",
            padding: "0.8rem 1.5rem",
            display: "block",
            textAlign: "left",
          }}
        >
          Contact Us
        </Button>
      </div>
      {/* Footer */}
      <MainFooter />
    </>
  );
};

export default Header;
