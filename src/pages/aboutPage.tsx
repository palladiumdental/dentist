import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import About from "../components/about";
import Promotion from "../components/promotion";

function AboutPage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="About us" />
      <About />
      <Promotion />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default AboutPage;
