import React from "react";

type content = {
  title?: string;
  description?: string;
};

type ContentWrapperProps = {
  children?: React.ReactNode;
  mainContent?: content;
  subContents?: content[];
  firstImage?: any;
  secondImage?: any;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  mainContent,
  subContents,
  firstImage,
  secondImage,
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
                <h1 className="mb-4">{mainContent?.title}</h1>
                <p>{mainContent?.description}</p>
                {subContents?.map((content, index) =>
                  index < 3 ? (
                    <>
                      <h3>{content.title}</h3>
                      <p className="mb-4">{content.description}</p>
                    </>
                  ) : null
                )}
              </div>
              {subContents?.map((content, index) =>
                index > 2 ? (
                  <>
                    <h3>{content.title}</h3>
                    <p>{content.description}</p>
                  </>
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ContentWrapper;
