import React from "react";
import Localize from "../ui/localize";

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          <Localize text={title} isFirstLetterCapital={true} />
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
