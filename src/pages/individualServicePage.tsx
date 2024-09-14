import React from "react";
import IndividualService from "../components/feature/individualService";
import Contact from "../components/feature/contact";
import SecondaryWrapper from "../components/ui/secondaryWrapper";
import { ServiceType } from "../constants/services";

type IndividualServicePageProps = {
  service: ServiceType;
};

const IndividualServicePage: React.FC<IndividualServicePageProps> = ({
  service,
}) => {
  return (
    <SecondaryWrapper title="Services">
      <IndividualService service={service} />
      <Contact />
    </SecondaryWrapper>
  );
};

export default IndividualServicePage;
