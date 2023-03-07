"use client";
import { HiOutlineChatAlt } from "react-icons/hi";
import "swiper/swiper.min.css";

export function MessageBoard() {
  return (
    <section className="w-full pt-5">
      <h2 className="flex flex-row text-lg lg:text-2xl font-sans font-light text-begeMedio">
        <HiOutlineChatAlt className="w-10 h-6 lg:w-14 lg:h-8" />
        Comunicados
      </h2>
      <div className="bg-white px-7 py-6 lg:p-10 rounded-xl mt-10 text-begeEscuro shadow-sm">
        <span className="text-sm md:text-base">
          <p className="mb-3">
            Passando aqui mais uma vez , para agradecer aos irmãos e irmãs pela
            as contribuições direcionadas para as obras da Flor de Jagube:
            Manutenção do poço, rede elétrica do poço a caixa d’água, manutenção
            telhado e calhas da igreja, novos pontos de torneira no jardim.
            Essas são imperceptíveis.
          </p>
          <p className="mb-3">
            As perceptíveis são, iluminação do terreiro, jardinagem e a mais
            complexa e onerosa, a calçada da fama, todos perceberam e gostaram.
            Sendo assim pedimos que , quem ainda não teve a oportunidade de
            contribuir, por favor contribua.
          </p>
          <p>
            Temos novas e importantes tarefas já programadas: Reparo da
            instalação de esgoto da casa, reparos das instalações hidráulicas
            dos banheiros, continuidade da revisão elétrica do terreno (troca
            por fiação adequada), serviços de pedreiro e pintura, início da
            instalação da lavanderia da igreja e por aí vamos.
          </p>
        </span>
        <div className="flex flex-col text-sm lg:text-base border-t-2 border-t-begeClaro mt-3 lg:mt-6 pt-3 lg:pt-6">
          <span>
            <b>Secretaria Flor de Jagube</b>
          </span>
          <span className="text-xs lg:text-base">25 de fevereiro de 2022</span>
        </div>
      </div>
    </section>
  );
}
