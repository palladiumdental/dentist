import React from "react";
import Service from "../components/feature/service";
import Contact from "../components/feature/contact";
import SecondaryWrapper from "../components/ui/secondaryWrapper";
import { SERVICES, CategorizedServiceType } from "../constants/services";

function ServicePage(props: any) {
  const services = props.category
    ? SERVICES.filter(
        (service: CategorizedServiceType) =>
          service.category.route === props.category.route
      )
    : SERVICES;
  return (
    <SecondaryWrapper title="Services">
      {services.map((service: CategorizedServiceType) => (
        <Service {...service} />
      ))}
      <Contact />
    </SecondaryWrapper>
  );
}

export default ServicePage;
