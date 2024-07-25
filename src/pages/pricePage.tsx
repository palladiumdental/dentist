import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Price from "../components/price";

function PricePage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <PageHeader title="Price" />
      <Price />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default PricePage;
