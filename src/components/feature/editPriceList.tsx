import React from "react";
import "../../styles/price.css";
import { TPriceType } from "../../types/price";
import { useGetData } from "../../firebase/crud";
import Spinner from "../ui/spinner";

const EditPriceList: React.FC = () => {
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
          <p className="d-inline-block border rounded-pill py-1 px-4">Price</p>
          <h1>Edit Price List</h1>
        </div>
        <div className="service-item bg-light rounded h-100 p-5">
          <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.5s">
            <div className="bg-light rounded h-100 d-flex align-items-center p-5 ">
              <form
              // onSubmit={handleSubmit}
              >
                <div className="row g-3">
                  {data.map((item: TPriceType, index: number) => (
                    <>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          value={item.service}
                          className="form-control border-0"
                          placeholder="First Name"
                          style={{ height: "55px" }}
                          name="firstName"
                          // onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          value={item.price}
                          className="form-control border-0"
                          placeholder="Last Name"
                          style={{ height: "55px" }}
                          name="lastName"
                          // onChange={handleChange}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPriceList;
