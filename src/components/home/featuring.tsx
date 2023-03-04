"use client";
import { BsStars } from "react-icons/bs";
import "swiper/swiper.min.css";
import { Slider } from "./slider";

export function Featuring() {
  return (
    <section className="w-full pt-5">
      <h2 className="flex flex-row text-lg font-sans font-light text-begeMedio p-5">
        <BsStars className="w-7 fill-begeMedio" />
        Em Destaque
      </h2>
      <div>
        <Slider/>
      </div>
    </section>
  );
}
