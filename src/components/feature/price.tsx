import React from "react";
import "../../styles/price.css";
import { TPriceType } from "../../types/price";
import { useGetData } from "../../firebase/crud";
import Spinner from "../ui/spinner";
import Localize from "../ui/localize";

const Price: React.FC = () => {
  const { data, loading } = useGetData<TPriceType>("prices");

  if (loading) return <Spinner show={loading} />;

  return (
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
                <thead className="thead-dark">
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
                </thead>
                <tbody>
                  {data.map((item: TPriceType, index: number) => (
                    <tr key={index}>
                      <td>{item.service}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
