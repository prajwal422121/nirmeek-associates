// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./Home";
// import { Login } from "./Login";
// import Profile from "./Profile";
// import { Register } from "./Register";
// import Aboutus from "./Aboutus";
// import FAQ from "./FAQ";
import Header from "./Header";
import FeedbackForm from "./FeedbackForm";
import Project from "./Project";
import AboutUs from "./AboutUs";

// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Header />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/project" element={<Project />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/*
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/FQA" element={<FAQ />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
};
