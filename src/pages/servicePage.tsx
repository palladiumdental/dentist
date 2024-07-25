import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Service from "../components/service";
import Appointment from "../components/appointment";

function ServicePage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="Services" />
      <Service />
      <Appointment />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default ServicePage;
