import React from "react";
import AboutDetail from "../components/feature/aboutDetail";
import Promotion from "../components/feature/promotion";
import SecondaryWrapper from "../components/ui/secondaryWrapper";

function AboutPage() {
  return (
    <SecondaryWrapper title="About us">
      <AboutDetail />
      <Promotion />
    </SecondaryWrapper>
  );
}

export default AboutPage;
