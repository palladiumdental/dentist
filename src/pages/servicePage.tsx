import React from "react";
import Service from "../components/feature/service";
import Contact from "../components/feature/contact";
import SecondaryWrapper from "../components/ui/secondaryWrapper";

function ServicePage() {
  return (
    <SecondaryWrapper title="Services">
      <Service />
      <Contact />
    </SecondaryWrapper>
  );
}

export default ServicePage;
