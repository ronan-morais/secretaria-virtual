"use client";
import { BsStars } from "react-icons/bs";
import "swiper/swiper.min.css";
import { Slider } from "./slider";

export function Featuring() {
  return (
    <section className="w-full pt-16">
      <h2 className="flex flex-row text-lg lg:px-32 lg:pb-10 lg:text-2xl font-sans font-light text-begeMedio p-5">
        <BsStars className="w-10 h-6 lg:h-8 fill-begeMedio" />
        Em Destaque
      </h2>
      <div>
        <Slider/>
      </div>
    </section>
  );
}
