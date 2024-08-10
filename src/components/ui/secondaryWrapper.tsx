import React from "react";
import MainWrapper from "./mainWrapper";
import PageHeader from "../feature/pageHeader";

type SecondaryWrapperProps = {
  children: React.ReactNode;
  title:
    | "404 Error"
    | "About us"
    | "Appointment"
    | "Contact Us"
    | "Price"
    | "Promotion"
    | "Services";
};

const SecondaryWrapper: React.FC<SecondaryWrapperProps> = ({
  children,
  title,
}) => {
  return (
    <MainWrapper>
      <PageHeader title={title} />
      {children}
    </MainWrapper>
  );
};

export default SecondaryWrapper;
