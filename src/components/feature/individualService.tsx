import React from "react";
import { ServiceType } from "../../constants/services";

type IndividualServiceProps = {
  service: ServiceType;
};

const IndividualService: React.FC<IndividualServiceProps> = ({ service }) => {
  return <div className="container-xxl py-5">{service.title}</div>;
};

export default IndividualService;
