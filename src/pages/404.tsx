import React from "react";
import NotFound from "../components/notFound";
import SecondaryWrapper from "../components/secondaryWrapper";

function _404() {
  return (
    <SecondaryWrapper title="404 Error">
      <NotFound />
    </SecondaryWrapper>
  );
}

export default _404;
