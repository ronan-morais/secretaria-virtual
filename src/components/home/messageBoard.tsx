"use client";
import { BsStars } from "react-icons/bs";
import "swiper/swiper.min.css";
import { Slider } from "./slider";

export function MessageBoard() {
  return (
    <section className="w-full pt-5">
      <h2 className="flex flex-row text-lg font-sans font-light text-begeMedio p-5">
        <BsStars className="w-7 fill-begeMedio" />
        Comunicados importantes
      </h2>
      <div className="bg-white px-7 py-6 rounded-xl mx-7 text-begeEscuro shadow-sm">
        <span className="text-sm">
          Agradecemos a todas e todos pela participação voluntária para as
          despesas extras do mês de dezembro. Foi muito positivo o resultado.
          Todos que tiveram a oportunidade de ajudar não deixe essa oportunidade
          passar.
        </span>
        <div className="flex flex-col text-sm mt-3 text-right">
          <span><b>Secretaria Flor de Jagube</b></span>
          <span className="text-xs">25 de fevereiro de 2022</span>
        </div>
      </div>
    </section>
  );
}
