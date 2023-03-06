"use client";
import { HiOutlineChatAlt } from "react-icons/hi";
import "swiper/swiper.min.css";

export function MessageBoard() {
  return (
    <section className="w-full pt-5">
      <h2 className="flex flex-row text-lg font-sans font-light text-begeMedio p-5">
        <HiOutlineChatAlt className="w-10 h-6" />
        Comunicados importantes
      </h2>
      <div className="bg-white px-7 py-6 rounded-xl mx-7 text-begeEscuro shadow-sm">
        <span className="text-sm">
          <p className="mb-2">
            Passando aqui mais uma vez , para agradecer aos irmãos e irmãs pela
            as contribuições direcionadas para as obras da Flor de Jagube:
            Manutenção do poço, rede elétrica do poço a caixa d’água, manutenção
            telhado e calhas da igreja, novos pontos de torneira no jardim.
            Essas são imperceptíveis.
          </p>
          <p>
            As perceptíveis são, iluminação do terreiro, jardinagem e a mais
            complexa e onerosa, a calçada da fama, todos perceberam e gostaram.
            Sendo assim pedimos que , quem ainda não teve a oportunidade de
            contribuir , por favor contribua. Temos novas e importantes tarefas
            já programadas: Reparo da instalação de esgoto da casa, reparos das
            instalações hidráulicas dos banheiros, continuidade da revisão
            elétrica do terreno (troca por fiação adequada), serviços de
            pedreiro e pintura, início da instalação da lavanderia da igreja e
            por aí vamos.
          </p>
        </span>
        <div className="flex flex-col text-sm mt-3 border-t border-t-begeClaro pt-3">
          <span>
            <b>Secretaria Flor de Jagube</b>
          </span>
          <span className="text-xs">25 de fevereiro de 2022</span>
        </div>
      </div>
    </section>
  );
}
