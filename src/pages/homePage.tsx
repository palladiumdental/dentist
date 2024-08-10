import React from "react";
import MainWrapper from "../components/mainWrapper";
import Service from "../components/service";
import Header from "../components/header";
import About from "../components/about";
import Promotion from "../components/promotion";
import Price from "../components/price";
import Contact from "../components/contact";

function HomePage() {
  return (
    <MainWrapper>
      <Header />
      <About />
      <Service />
      <Price />
      <Promotion />
      <Contact />
    </MainWrapper>
  );
}

export default HomePage;
