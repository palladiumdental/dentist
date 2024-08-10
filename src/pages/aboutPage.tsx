import React from "react";
import About from "../components/about";
import Promotion from "../components/promotion";
import SecondaryWrapper from "../components/secondaryWrapper";

function AboutPage() {
  return (
    <SecondaryWrapper title="About us">
      <About />
      <Promotion />
    </SecondaryWrapper>
  );
}

export default AboutPage;
