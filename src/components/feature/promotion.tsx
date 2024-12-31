import React, { useEffect } from "react";
import Localize from "../ui/localize";
import { TPriceType } from "../../types/price";
import { useGetData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import { useTranslation } from "react-i18next";
import { formatNumberWithSeparators } from "../../helpers/numbersFns";
import Error from "../../components/feature/error";

const Promotion: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading, error } = useGetData<TPriceType>("prices");
  const promotions = data.filter((item) => item.onPromotion === true);

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
        <div className="bg-primary overflow-hidden my-5">
          <div className="container feature p-5">
            <div className="row g-0 mx-lg-0">
              <div className="wow fadeIn" data-wow-delay="0.1s">
                <div className="">
                  <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                    <Localize text="promotions" isFirstLetterCapital={true} />
                  </p>
                  <h1 className="text-white mb-4">
                    <Localize
                      text={
                        promotions.length === 0
                          ? "no promotion is available at this time"
                          : "limited time offer"
                      }
                      isFirstLetterCapital={true}
                    />
                  </h1>
                  {promotions.length > 0 && (
                    <div className="custom-table-container">
                      <table className="table table-striped table-bordered custom-table">
                        <tbody>
                          {promotions.map((item: TPriceType, index: number) => (
                            <tr key={index}>
                              <td style={{ textAlign: "start" }}>
                                {isCurrentLanguageEn
                                  ? item.enService
                                  : item.huService}
                              </td>
                              <td style={{ textAlign: "end" }}>
                                <p className="old-price">
                                  {formatNumberWithSeparators(
                                    parseInt(item.price)
                                  )}{" "}
                                  HUF
                                </p>
                                <p className="new-price">
                                  {formatNumberWithSeparators(
                                    parseInt(item.promotionPrice)
                                  )}{" "}
                                  HUF
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotion;
