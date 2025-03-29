import React from "react";
import MainWrapper from "../components/ui/mainWrapper";
import Service from "../components/feature/service";
import Header from "../components/feature/header";
import About from "../components/feature/about";
import Promotion from "../components/feature/promotion";
import Price from "../components/feature/price";
import Contact from "../components/feature/contact";
import SEOHead from "../components/ui/seoHead";
import DentalClinicSchema from "../components/ui/dentalClinicSchema";

function HomePage() {
  return (
    <>
      {/* <SEOHead /> */}
      <MainWrapper>
        <Header />
        <About />
        {/* <Service /> */}
        {/* <Price /> */}
        <Promotion />
        <Contact />
      </MainWrapper>
      <DentalClinicSchema />
    </>
  );
}

export default HomePage;
