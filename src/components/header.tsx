import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-2.jpg";
import carousel3 from "../assets/carousel-3.jpg";
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
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
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
              <img src={carousel1} alt="carousel1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel2} alt="carousel2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel3} alt="carousel3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
