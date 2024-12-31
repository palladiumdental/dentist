import React from "react";

type content = {
  title?: string;
  description?: string | React.ReactNode;
};

type ContentWrapperProps = {
  children?: React.ReactNode;
  mainContent?: content;
  subContents?: content[];
  firstImage?: any;
  secondImage?: any;
  moveSecondSubDown?: boolean;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  mainContent,
  subContents,
  firstImage,
  secondImage,
  moveSecondSubDown,
}) => {
  if (children) {
    return (
      <section className="pf-details section">
        {children && <div className="container">{children}</div>}
      </section>
    );
  } else {
    return (
      <section className="pf-details section">
        <div>
          <h1 className="mb-4">{mainContent?.title}</h1>
          <p className="text-start">{mainContent?.description}</p>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex flex-column">
                  {firstImage && (
                    <img
                      className="img-fluid rounded w-75 align-self-end"
                      src={firstImage}
                      alt={mainContent?.title}
                    />
                  )}
                  {secondImage && (
                    <img
                      className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                      src={secondImage}
                      alt={mainContent?.title}
                      style={{ marginTop: "-25%" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                {subContents?.map((content, index) =>
                  (moveSecondSubDown ? index === 1 : index < 2) ? (
                    <>
                      <h3 key={`h3-${index}`} className="text-start">
                        {content.title}
                      </h3>
                      <div key={`p-${index}`} className="mb-4 text-start">
                        {content.description}
                      </div>
                    </>
                  ) : null
                )}
              </div>
              <div className="fadeIn" data-wow-delay="0.5s">
                {subContents?.map((content, index) =>
                  (moveSecondSubDown ? index !== 1 : index > 1) ? (
                    <>
                      <h3
                        key={`h3-2-${index}`}
                        className="text-start"
                        style={{ marginTop: "50px" }}
                      >
                        {content.title}
                      </h3>
                      <div key={`p-2-${index}`} className="text-start">
                        {content.description}
                      </div>
                    </>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ContentWrapper;
