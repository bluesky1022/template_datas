import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export const FixedCardSlider = (props) => {
  const swiperRef = useRef(null);
  const { leading, cards = [] } = props;

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
    leading && (
      <div className=" pt-[30px] pb-[30px] w-full">
        {/* Navigation Buttons */}
        <div className="flex w-full justify-end absolute">
          <div className="relative left-0 transform z-10 mr-1">
            <button
              onClick={handlePrev}
              className="bg-[#f2f4f7] text-primary p-2 rounded-l hover:bg-black hover:text-[#f2f4f7]"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>
          <div className="relative right-0 transform  z-10">
            <button
              onClick={handleNext}
              className="bg-[#f2f4f7] text-primary p-2 rounded-r hover:bg-black hover:text-[#f2f4f7]"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          ref={swiperRef} // Attach the ref to the Swiper component
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full h-full !py-7" // Adjust the width and height here
        >
          <SwiperSlide className="!min-w-[550px] !transform-none !bg-none !w-[30%] h-full mr-[50px] rounded-[5px] custom-cardslide box-content bg-[#f2f4f7] hover:transition-all hover:ease-in-out hover:duration-400">
            <div className="pt-3">
              <h1 className="font-bold text-[2.3rem] my-3">{leading.header}</h1>
              <p className="mt-5 mb-5 text-[1.7rem]">{leading.detail}</p>
            </div>
          </SwiperSlide>
          {cards.map((card, index) => {
            return (
              <SwiperSlide
                key={"SwiperCard_" + index}
                className="!min-w-[400px] !w-[30%] relative bg-[#f2f4f7] shadow-lg group m-[30px] flex flex-col !h-auto"
              >
                <div className="w-full h-[200px] overflow-hidden relative">
                  <img
                    src={"/assets/images/" + card.image}
                    className="w-full h-[200px] relative group-hover:rotate-6 group-hover:scale-125"
                  />
                  <div className="absolute -top-[200px] left-0 w-0 bg-opacity-40 rotate-45 bg-[#f2f4f7] h-[1000px]  group-hover:w-[200%] group-hover:opacity-0 "></div>
                </div>
                <h1 className="p-[50px_0px_0px_30px] font-bold text-[1.5rem]">
                  {card.title}
                </h1>
                <div className=" p-10 pt-5 text-[1.2rem] flex-1 flex justify-center flex-col">
                  {card.detail}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};
