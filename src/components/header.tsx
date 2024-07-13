import React from "react";
// import logo from "./carousel-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import test from "../assets/carousel-1.jpg";
import test1 from "../assets/carousel-2.jpg";
import test2 from "../assets/carousel-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Header: React.FC = () => {
  return (
    <div className="container-fluid header bg-primary p-0 mb-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-4 text-white mb-5">
            Good Health Is The Root Of All Happiness
          </h1>
          <div className="row g-4">
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  123
                </h2>
                <p className="text-light mb-0">Expert Doctors</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  1234
                </h2>
                <p className="text-light mb-0">Medical Staff</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  12345
                </h2>
                <p className="text-light mb-0">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          {/* <div className="owl-carousel header-carousel"> */}
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={test} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={test1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={test2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    // </div> */}
  );
};

export default Header;
