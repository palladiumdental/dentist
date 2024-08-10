import React from "react";
import Service from "../components/service";
import Contact from "../components/contact";
import SecondaryWrapper from "../components/secondaryWrapper";

function ServicePage() {
  return (
    <SecondaryWrapper title="Services">
      <Service />
      <Contact />
    </SecondaryWrapper>
  );
}

export default ServicePage;
