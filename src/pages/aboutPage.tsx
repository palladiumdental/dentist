import React from "react";
import About from "../components/feature/about";
import Promotion from "../components/feature/promotion";
import SecondaryWrapper from "../components/ui/secondaryWrapper";

function AboutPage() {
  return (
    <SecondaryWrapper title="About us">
      <About />
      <Promotion />
    </SecondaryWrapper>
  );
}

export default AboutPage;
