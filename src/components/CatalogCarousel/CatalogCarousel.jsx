import React, { useRef, useState } from "react";
// Import Swiper React components
import { useNavigate, createSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { katalogCarousel } from "../../static/carouseldata";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import data from "../../static/alldata";
import "./CatalogCarousel.css";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function CatalogCarousel() {
  const navigate = useNavigate();
  function navigatetoCategory(title) {
    navigate({
      pathname: "categories",
      search: `${createSearchParams({
        category: `${title}`,
      })}`,
    });
  }
  return (
    <div className="CatalogCarousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {katalogCarousel.map((item, index) => (
          <SwiperSlide key={index}>
            <button onClick={() => navigatetoCategory(item.title)}>
              <div className="katalogImg">
                <img src={item.image} alt="images" />
              </div>
              <span>{item.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
