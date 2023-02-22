import Image from "next/image";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useScreenSize } from "@/utils/hooks";

export function Slider() {
  const screenSize = useScreenSize();

  return (
    <Swiper
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={screenSize.size < 1024 ? 1 : 3}
      autoplay={{ delay: 3000 }}
      loop={false}
      className="h-[25vh]"
    >
      <SwiperSlide className="bg-[url(https://images.unsplash.com/photo-1611820135074-e2d0e3e92322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80)] bg-cover w-full h-full bg-right md:bg-center lg:bg-right">
        &nbsp;1
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/2-min.jpg)] bg-cover w-full h-full bg-right"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;2
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/3-min.jpg)] bg-cover w-full h-full bg-left"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;3
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/4-min.jpg)] bg-cover w-full h-full bg-left"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;4
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/5-min.jpg)] bg-cover w-full h-full bg-center"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;5
      </SwiperSlide>
    </Swiper>
  );
}
