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
                <table className="table table-bordered custom-table">
                  <tbody>
                    {Object.entries(
                      data.reduce((acc, item) => {
                        if (!acc[item.serviceCategory]) {
                          acc[item.serviceCategory] = [];
                        }
                        acc[item.serviceCategory].push(item);
                        return acc;
                      }, {} as Record<string, TPriceType[]>)
                    ).map(([category, items]) => (
                      <React.Fragment key={category}>
                        <tr className="category-header">
                          <td
                            colSpan={2}
                            style={{ textAlign: "start", fontWeight: "bold" }}
                          >
                            <Localize
                              text={category}
                              isFirstLetterCapital={true}
                            />
                          </td>
                        </tr>
                        <div className="custom-table-container">
                          <table className="table table-striped table-bordered custom-table">
                            <tbody>
                              {items.map((item: TPriceType, index: number) => (
                                <tr key={index}>
                                  <td
                                    className={
                                      item.onPromotion
                                        ? "promotion-wrapper"
                                        : ""
                                    }
                                    style={{ textAlign: "start" }}
                                  >
                                    {item.onPromotion && (
                                      <p className="promotion">
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
                                    <p
                                      className={
                                        item.onPromotion ? "old-price" : ""
                                      }
                                    >
                                      {item.priceTo
                                        ? formatNumberWithSeparators(
                                            parseInt(item.price)
                                          ) +
                                          " - " +
                                          formatNumberWithSeparators(
                                            parseInt(item.priceTo)
                                          )
                                        : formatNumberWithSeparators(
                                            parseInt(item.price)
                                          )}{" "}
                                      HUF
                                    </p>
                                    {item.onPromotion && (
                                      <p className="new-price">
                                        {item.promotionPriceTo
                                          ? formatNumberWithSeparators(
                                              parseInt(item.promotionPrice)
                                            ) +
                                            " - " +
                                            formatNumberWithSeparators(
                                              parseInt(item.promotionPriceTo)
                                            )
                                          : formatNumberWithSeparators(
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
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
