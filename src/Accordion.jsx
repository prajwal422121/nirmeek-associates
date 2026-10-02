import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dynamicDB, ref, onValue } from "./firebase";

function Accordion1({ title, content, isOpen, onToggle }) {
  return (
    <Box
      sx={{
        width: { xs: "90vw", md: "52rem" },
        maxWidth: "100%",
        margin: "0 auto",
        borderBottom: "2px solid black",
        py: 2,
      }}
    >
      <Box
        onClick={onToggle}
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            margin: 0,
            flexGrow: 1,
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: "2rem",
            lineHeight: 1,
            paddingLeft: "1rem",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </Box>

      {isOpen && (
        <Box
          sx={{
            pt: 2,
            fontSize: "1rem",
            fontFamily: "'Raleway', sans-serif",
            lineHeight: "1.5rem",
            color: "#555",
          }}
        >
          {content}
        </Box>
      )}
    </Box>
  );
}

function App() {
  const [slides, setSlides] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch data from Firebase
  useEffect(() => {
    const fetchSlideData = (slideNumber) => {
      const slideRef = ref(dynamicDB, `slide${slideNumber}`);
      onValue(slideRef, (snapshot) => {
        const data = snapshot.val();
        setSlides((prev) => ({ ...prev, [`slide${slideNumber}`]: data }));
      });
    };

    for (let i = 1; i <= 7; i++) fetchSlideData(i);
  }, []);

  const handleAccordionToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const accordionData = [
    {
      title: slides.slide3?.field2?.value || "Residential Permits",
      content:
        slides.slide3?.field3?.value ||
        "Single Family Homes, ADU and DADU, Shop Garage Barn Pole Building, Remodel and Additions, STFI / Over the Counter Permits",
    },
    {
      title: slides.slide3?.field4?.value || "Planning | Land Use Actions",
      content:
        slides.slide3?.field5?.value ||
        "Boundary Line Adjustment, Lot Line Adjustment, Lot Combination, Short Plat, Final Plat, Short Subdivision, Zoning Variance, Shoreline Variance, Steep Slope Variance, Land Division",
    },
    {
      title: slides.slide3?.field5?.value || "Special Use",
      content:
        slides.slide3?.field6?.value ||
        "Establishing Use through Master Use, Conditional Use and Temporary Use Permits, Change of Use Permit",
    },
    {
      title: slides.slide3?.field7?.value || "Event Permitting",
      content:
        slides.slide3?.field8?.value || "Weddings, Event Center, Retail Booth",
    },
    {
      title: slides.slide3?.field9?.value || "Site Feasibility",
      content:
        slides.slide3?.field10?.value ||
        "Consulting, Site Feasibility Reports, Pre—Application Meeting, Pre-Submittal Conference, Preliminary Project Approvals, Project Management",
    },
    {
      title: slides.slide3?.field11?.value || "Commercial",
      content:
        slides.slide3?.field13?.value ||
        "New Construction, Tenant Improvement, Alterations, Plumbing and Mechanical",
    },
    {
      title: slides.slide3?.field14?.value || "Code Enforcement",
      content:
        slides.slide3?.field15?.value ||
        "Code Compliance, Red Tag, Stop Work Order, Violations, Already Built Construction (ABC) Final Inspection, Certificate of Occupancy",
    },
  ];

  return (
    <Stack spacing={1} sx={{ py: 4, maxWidth: "100%", margin: "0 auto" }}>
      {accordionData.map((item, index) => (
        <Accordion1
          key={index}
          title={item.title.trim()}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleAccordionToggle(index)}
        />
      ))}
    </Stack>
  );
}

export default App;
