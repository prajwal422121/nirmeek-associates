import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header"; // If you have a header
import Project from "./Project";
import AboutUs from "./Aboutus";

// import { Register } from "./Register";
// import { Login } from "./Login";
// import { Home } from "./Home";
// import Profile from "./Profile";
// import { FAQQ } from "./FAQQ";

function App() {
  return (
    <Router>
      <Header /> {/* If you have a header */}
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/project" element={<Project />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/*

        <Route path="/FQA" element={<FAQQ />} /> */}

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
