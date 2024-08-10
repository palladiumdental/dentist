import React from "react";
import MainWrapper from "./mainWrapper";
import PageHeader from "./pageHeader";

function SecondaryWrapper({ children, title }: any) {
  return (
    <MainWrapper>
      <PageHeader title={title} />
      {children}
    </MainWrapper>
  );
}

export default SecondaryWrapper;
