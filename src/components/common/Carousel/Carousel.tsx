import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

type carouselType = { children: React.ReactNode[] };

export default function Carousel({ children }: carouselType) {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 2000 }}
      height={1000}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {children?.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <Box>{el}</Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
