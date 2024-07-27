import React from "react";
import "../App.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Service from "../components/service";
import Header from "../components/header";
import About from "../components/about";
import Promotion from "../components/promotion";
import Price from "../components/price";
import Contact from "../components/contact";

function HomePage() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <Service />
      <Price />
      <Promotion />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default HomePage;
