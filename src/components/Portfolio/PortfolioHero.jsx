import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PortfolioHero = (props) => {
  const images = [props.url, props.url1, props.url2].filter(Boolean);

  return (
    <article>
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          {props.title}
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={images.length > 1}
          slidesPerView={1}
          spaceBetween={16}
          allowTouchMove={true}
          grabCursor={true}
          className="w-10/12 max-w-4xl mx-auto h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`portfolio-hero-slide-${index}`}>
              <div className="flex justify-center items-center">
                <img
                  src={`/assets/images/portfolios/${image}`}
                  alt={`Project details ${index + 1}`}
                  className="w-full h-[30rem] rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="mt-6 text-gray-600 px-4">{props.detail}</p>
      </div>
    </article>
  );
};

export default PortfolioHero;
