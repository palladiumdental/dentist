import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Contact from "../components/contact";

function ContactPage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="Contact Us" />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default ContactPage;
