// AboutUs.jsx
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dynamicDB, ref, onValue } from "./firebase";
import cityscape from "./assets/cityscape-5543224.jpg";
import cityscape2 from "./assets/skyscraper-2171709.jpg";
import "@fontsource/raleway";
import logo from "./assets/logo.png";

import "./Header.css";

const AboutUs = () => {
  const [slides, setSlides] = useState({
    slide1: {},
    slide2: {},
    slide3: {},
    slide4: {},
    slide5: {},
    slide11: {},
    slide12: {},
    slide13: {},
    slide14: {},
    slide15: {},
    slide16: {},
    slide17: {},
  });

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

    for (let i = 1; i <= 12; i++) {
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
    <>
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
      <div style={styles.box}>
        <div style={styles.slide2}>
          <img src={cityscape} alt="image" style={styles.image} />
          <img src={cityscape2} alt="image" style={styles.image} />
        </div>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.title}>
              {slides.slide12?.field1?.value || "Nirmeek Associates"}
            </h1>
            <p style={styles.tagline}>
              {slides.slide12?.field2?.value || "Trusted Since 2006"}
            </p>
          </header>

          <div style={styles.content}>
            <Section title={slides.slide12?.field3?.value || "Who We Are"}>
              <p>
                {slides.slide12?.field4?.value ||
                  "Nirmeek Associates is a premier consulting firm specializing in architectural and civil engineering services, established in 2006 under the leadership of "}
                <strong>
                  {slides.slide12?.field5?.value ||
                    "Shri. Pradeep Pundalik Harachkar"}
                </strong>
                {slides.slide12?.field6?.value ||
                  ", a Licensed Surveyor accredited by the Municipal Corporation of Greater Mumbai."}
              </p>
            </Section>

            <Section title={slides.slide12?.field7?.value || "Our Services"}>
              <ServiceSection
                title={
                  slides.slide12?.field8?.value || "License Surveyor Consulting"
                }
                items={[
                  slides.slide12?.field9?.value || "Project Planning & Design",
                  slides.slide12?.field10?.value || "Approvals & Permissions",
                  slides.slide12?.field11?.value || "Interior Design",
                  slides.slide12?.field12?.value || "Consultation",
                ]}
              />
              <ServiceSection
                title={slides.slide12?.field13?.value || "Engineering Services"}
                items={[
                  slides.slide12?.field14?.value || "Project Management",
                  slides.slide12?.field15?.value || "Estimation & Costing",
                  slides.slide12?.field16?.value || "Supervision",
                ]}
              />
            </Section>

            <Section title={slides.slide12?.field17?.value || "Our Expertise"}>
              <ul style={styles.list}>
                <li>
                  {slides.slide12?.field18?.value ||
                    "Licensed Professional (H/49/LS MCGM)"}
                </li>
                <li>
                  {slides.slide12?.field19?.value ||
                    "15+ years experience in Mumbai/Thane"}
                </li>
                <li>
                  {slides.slide12?.field20?.value ||
                    "Regulatory Mastery (DCPR 2034, DCR 1991)"}
                </li>
              </ul>
            </Section>

            <ProjectSection
              title={slides.slide12?.field21?.value || "Notable Projects"}
              currentProjects={[
                {
                  name:
                    slides.slide12?.field22?.value ||
                    "Shree Shantinagar Venture",
                  details:
                    slides.slide12?.field23?.value ||
                    "394,000 sq.ft. (₹118 Cr)",
                },
                {
                  name: slides.slide12?.field24?.value || "Neelkamal Realtors",
                  details:
                    slides.slide12?.field25?.value ||
                    'IT Building "Orchid Star"',
                },
              ]}
              completedProjects={[
                {
                  name:
                    slides.slide12?.field26?.value ||
                    "Elite Housing Developers",
                  details:
                    slides.slide12?.field27?.value || "80,000 sq.ft. (₹45 Cr)",
                },
                {
                  name: slides.slide12?.field28?.value || "Windsor Residency",
                  details:
                    slides.slide12?.field29?.value || "95,000 sq.ft. Luxury",
                },
              ]}
            />

            <Section title={slides.slide12?.field30?.value || "Our Team"}>
              <p>
                {slides.slide12?.field31?.value || "Led by "}
                <strong>
                  {slides.slide12?.field32?.value ||
                    "Shri. Pradeep P. Harachkar"}
                </strong>
                {slides.slide12?.field33?.value ||
                  ", our team combines technical excellence and legal acumen with dedicated professionals across architecture, engineering, and project management."}
              </p>
            </Section>

            <Section
              title={slides.slide12?.field34?.value || "Connect With Us"}
            >
              <div style={styles.contactContainer}>
                <Address
                  title={slides.slide12?.field35?.value || "Head Office"}
                  address={
                    slides.slide12?.field36?.value ||
                    "Unit 315, Antop Hill Warehousing Co., Salt Pan Road, Wadala (E), Mumbai – 400037"
                  }
                  phone={slides.slide12?.field37?.value || "+91-9820142520"}
                />
                <Address
                  title={slides.slide12?.field38?.value || "Branch Office"}
                  address={
                    slides.slide12?.field39?.value ||
                    "103, Siddharth Nagar CHSL, Mira Road (E), Thane"
                  }
                />
                <div style={styles.contactInfo}>
                  <p>
                    Email:{" "}
                    {slides.slide12?.field40?.value || "nirmeek@gmail.com"}
                  </p>
                  <p>{slides.slide12?.field41?.value || "nirmeek@yahoo.com"}</p>
                </div>
              </div>
            </Section>
          </div>

          <footer style={styles.footer}>
            <p>
              © {slides.slide12?.field39?.value || "Nirmeek Associates"} |{" "}
              {slides.slide12?.field40?.value || "Last Updated: March 2024"}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

// Reusable components and styles remain the same as in original code

// Reusable Components
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

const ServiceSection = ({ title, items }) => (
  <div style={styles.serviceSection}>
    <h3 style={styles.serviceTitle}>{title}</h3>
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ProjectSection = ({ title, currentProjects, completedProjects }) => (
  <Section title={title}>
    <div style={styles.projectContainer}>
      <div style={styles.projectColumn}>
        <h3 style={styles.subTitle}>Current Projects</h3>
        {currentProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
      <div style={styles.projectColumn}>
        <h3 style={styles.subTitle}>Completed Projects</h3>
        {completedProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  </Section>
);

const ProjectItem = ({ name, details }) => (
  <div style={styles.projectItem}>
    <strong>{name}</strong>
    <p>{details}</p>
  </div>
);

const Address = ({ title, address, phone }) => (
  <div style={styles.address}>
    <h3 style={styles.subTitle}>{title}</h3>
    <p>{address}</p>
    {phone && <p>📞 {phone}</p>}
  </div>
);

// Styles
const styles = {
  box: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#1a1a1a", // Dark background
  },
  slide2: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
    filter: "brightness(0.8)", // Darken images
  },
  container: {
    width: "50%",
    height: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto",
    backgroundColor: "#1a1a1a", // Dark background
    color: "#ffffff", // White text
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5em",
    color: "#3498db", // Bright blue accent
  },
  tagline: {
    color: "#95a5a6", // Light gray
    fontSize: "1.2em",
  },
  section: {
    margin: "30px 0",
    padding: "20px",
    backgroundColor: "#2d2d2d", // Dark section background
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  sectionTitle: {
    color: "#3498db",
    borderBottom: "2px solid #3498db", // Blue accent
    paddingBottom: "10px",
  },
  serviceSection: {
    margin: "20px 0",
  },
  serviceTitle: {
    color: "#3498db",
    fontSize: "1.2em",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#ecf0f1", // Light gray text
  },
  projectContainer: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  projectColumn: {
    flex: 1,
    minWidth: "300px",
  },
  projectItem: {
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#333333", // Darker background
    borderRadius: "5px",
  },
  contactContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
  },
  address: {
    flex: 1,
    minWidth: "250px",
    color: "#bdc3c7", // Light gray
  },
  contactInfo: {
    flexBasis: "100%",
    color: "#bdc3c7",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#2d2d2d", // Dark footer
    color: "#95a5a6",
  },
  subTitle: {
    color: "#3498db",
    fontSize: "1.1em",
  },
};

export default AboutUs;
