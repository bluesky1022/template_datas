import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Carousel = (props) => {
  const { items = [] } = props;

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="relative !pb-20">
      <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 z-10 mr-1">
        <button
          onClick={handlePrev}
          className="bg-[#f2f4f7] text-primary p-2 rounded-l hover:bg-black hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="bg-[#f2f4f7] text-primary p-2 rounded-r hover:bg-black hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <Swiper
        ref={swiperRef} // Attach the ref to the Swiper component
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={true}
        modules={[Pagination, Navigation]}
        className="mySwiper !pb-10"
      >
        {items.map((item, index) => {
          return <SwiperSlide key={"Carousel_" + index}>{item}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
