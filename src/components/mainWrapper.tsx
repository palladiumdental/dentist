import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";

function MainWrapper({ children }: any) {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainWrapper;
