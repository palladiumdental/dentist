import React from "react";
import Localize from "../ui/localize";
import { TPriceType } from "../../types/price";
import { useGetData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import { useTranslation } from "react-i18next";

const Promotion: React.FC = () => {
  const { i18n } = useTranslation();
  const { data, loading } = useGetData<TPriceType>("prices");
  const promotions = data.filter((item) => item.onPromotion === true);

  const isCurrentLanguageEn = i18n.language === "en";

  if (loading) return <Spinner show={loading} />;

  return (
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
                  text="limited time offer"
                  isFirstLetterCapital={true}
                />
              </h1>
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
                          <p className="old-price">{item.price} HUF</p>
                          <p className="new-price">{item.promotionPrice} HUF</p>
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
    </div>
  );
};

export default Promotion;
