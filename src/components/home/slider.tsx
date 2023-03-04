import Image from "next/image";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useScreenSize } from "@/utils/hooks";

export function Slider() {
  const screenSize = useScreenSize();

  return (
    <Swiper
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={screenSize.size < 1024 ? 1 : 3}
      autoplay={{ delay: 3000 }}
      loop={false}
      className="featured-slider"
    >
      <SwiperSlide className="featured-card bg-[url(https://images.unsplash.com/photo-1611820135074-e2d0e3e92322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80)]    ">
        <div className="featured-card-footer">
          <div className="text-xs font-bold text-begeMedio">24 de Dezembro, 20h, Farda branca</div>
          <div className="text-sm pt-1 font-black text-begeEscuro">Nossa Senhora da Conceição</div>
          <div className="text-xs font-semibold text-begeMedio">Hinário O Cruzeiro, Mestre Irineu</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="featured-card bg-[url(https://images.unsplash.com/photo-1632011433298-689d8a6135a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)]    ">
        <div className="featured-card-footer">
          <div className="text-xs font-bold text-begeMedio">24 de Dezembro, 20h, Farda branca</div>
          <div className="text-sm pt-1 font-black text-begeEscuro">Nossa Senhora da Conceição</div>
          <div className="text-xs font-semibold text-begeMedio">Hinário O Cruzeiro, Mestre Irineu</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="featured-card bg-[url(https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]    ">
        <div className="featured-card-footer">
          <div className="text-xs font-bold text-begeMedio">24 de Dezembro, 20h, Farda branca</div>
          <div className="text-sm pt-1 font-black text-begeEscuro">Nossa Senhora da Conceição</div>
          <div className="text-xs font-semibold text-begeMedio">Hinário O Cruzeiro, Mestre Irineu</div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
}
