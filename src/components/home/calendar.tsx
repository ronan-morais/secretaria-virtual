"use client";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "swiper/swiper.min.css";

export function Calendar() {
  return (
    <section className="w-full pt-5">
      <h2 className="flex flex-row text-lg font-sans font-light text-begeMedio p-5">
        <MdOutlineCalendarMonth className="w-10 h-6 fill-begeMedio" />
        Calendário
      </h2>
      <ul className="mx-7">
        <li className="flex gap-3 mb-3">
          <div className="bg-white px-3 rounded-xl flex flex-col justify-center text-center">
            <span className="text-lg p-0 m-0 font-bold text-begeMedio tracking-tight">02</span>
            <span className="text-ellipsis text-begeEscuro text-xs p-0 -mt-1">jan</span>
          </div>
          <div className="text-sm flex flex-col text-begeEscuro">
            <span><b>Santa Missa</b></span>
            <span className="text-xs">Segunda-feira, 20h, fanda azul</span>
            <span className="text-xs"><b>Hinário:</b> Santa Missa + ponto das almas</span>
          </div>
        </li>
        <li className="flex gap-3 mb-3">
          <div className="bg-white px-3 rounded-xl flex flex-col justify-center text-center">
            <span className="text-lg p-0 m-0 font-bold text-begeMedio tracking-tight">02</span>
            <span className="text-ellipsis text-begeEscuro text-xs p-0 -mt-1">jan</span>
          </div>
          <div className="text-sm flex flex-col text-begeEscuro">
            <span><b>Santa Missa</b></span>
            <span className="text-xs">Segunda-feira, 20h, fanda azul</span>
            <span className="text-xs"><b>Hinário:</b> Santa Missa + ponto das almas</span>
          </div>
        </li>
        <li className="flex gap-3 mb-3">
          <div className="bg-white px-3 rounded-xl flex flex-col justify-center text-center">
            <span className="text-lg p-0 m-0 font-bold text-begeMedio tracking-tight">02</span>
            <span className="text-ellipsis text-begeEscuro text-xs p-0 -mt-1">jan</span>
          </div>
          <div className="text-sm flex flex-col text-begeEscuro">
            <span><b>Santa Missa</b></span>
            <span className="text-xs">Segunda-feira, 20h, fanda azul</span>
            <span className="text-xs"><b>Hinário:</b> Santa Missa + ponto das almas</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
