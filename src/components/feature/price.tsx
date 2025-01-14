import React, { useEffect } from "react";
import "../../styles/price.css";
import { TPriceType } from "../../types/price";
import { useGetData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import Localize from "../ui/localize";
import { useTranslation } from "react-i18next";
import { formatNumberWithSeparators } from "../../helpers/numbersFns";
import Error from "../../components/feature/error";

const Price: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useGetData<TPriceType>("prices");

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const isCurrentLanguageEn = i18n.language === "en";

  if (error) return <Error />;

  return (
    <div style={{ position: "relative" }}>
      {loading && <Spinner show={loading} />}
      {!loading && (
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                <Localize text="price" isFirstLetterCapital={true} />
              </p>
              <h1>
                <Localize text="a31" isFirstLetterCapital={true} />
              </h1>
            </div>

            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light rounded h-100 p-5">
                <div className="custom-table-container">
                  <table className="table table-striped table-bordered custom-table">
                    {/* <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <h5>
                        <Localize text="service" isFirstLetterCapital={true} />
                      </h5>
                    </th>
                    <th scope="col">
                      <h5>
                        <Localize text="price" isFirstLetterCapital={true} />
                      </h5>
                    </th>
                  </tr>
                </thead> */}
                    <tbody>
                      {data.map((item: TPriceType, index: number) => (
                        <tr key={index}>
                          <td
                            className={
                              item.onPromotion ? "promotion-wrapper" : ""
                            }
                            style={{ textAlign: "start" }}
                          >
                            {item.onPromotion && (
                              <p className={"promotion"}>
                                <Localize
                                  text="promotions"
                                  isFirstLetterCapital={true}
                                />
                              </p>
                            )}
                            {isCurrentLanguageEn
                              ? item.enService
                              : item.huService}
                          </td>
                          <td style={{ textAlign: "end" }}>
                            <p className={item.onPromotion ? "old-price" : ""}>
                              {formatNumberWithSeparators(parseInt(item.price))}{" "}
                              HUF
                            </p>
                            {item.onPromotion && (
                              <p
                                className={item.onPromotion ? "new-price" : ""}
                              >
                                {formatNumberWithSeparators(
                                  parseInt(item.promotionPrice)
                                )}{" "}
                                HUF
                              </p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
