import React from "react";
import "./style.css";

const Price: React.FC = () => {
  const prices = [
    { service: "Teeth Cleaning", price: "$50" },
    { service: "Cavity Filling", price: "$75" },
    { service: "Root Canal", price: "$300" },
    { service: "Tooth Extraction", price: "$150" },
    { service: "Dental Implants", price: "$2000" },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">Price</p>
          <h1>Dental Price List</h1>
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="custom-table-container">
              <table className="table table-striped table-bordered custom-table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <h5>Service</h5>
                    </th>
                    <th scope="col">
                      <h5>Price</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item, index) => (
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
