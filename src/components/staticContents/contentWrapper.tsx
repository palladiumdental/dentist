import React from "react";

type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <section className="pf-details section">
      <div className="container">{children}</div>
    </section>
  );
};

export default ContentWrapper;
