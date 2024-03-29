import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";
import "swiper/swiper.min.css";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

export function Calendar({ trabalhos }: any) {
  return (
    <section className="w-full pt-5 min-w-[25vw] md:pr-14">
      <Link href="/calendario">
        <h2 className="flex flex-row text-lg lg:text-2xl font-sans font-light text-begeMedio">
          <MdOutlineCalendarMonth className="w-10 h-6 lg:w-14 lg:h-8 fill-begeMedio" />
          Calendário
        </h2>
      </Link>
      <ul className="mt-10">
        {trabalhos.map((trabalho: any, key: number) => (
          <li key={key} className="flex gap-3 mb-3">
            <div className="bg-white px-3 rounded-xl flex flex-col justify-center text-center shadow-sm">
              <span className="text-lg lg:text-2xl p-0 m-0 font-bold text-begeMedio tracking-tight">
                <Link href={`trabalho/${trabalho.id}`}>
                  {format(trabalho.dataInicio, "dd")}
                </Link>
              </span>
              <span className="text-ellipsis text-begeEscuro text-xs lg:text-base p-0 -mt-1">
                <Link href={`trabalho/${trabalho.id}`}>
                  {format(trabalho.dataInicio, "MMM", { locale: pt })}
                </Link>
              </span>
            </div>
            <div className="text-sm lg:text-xl flex flex-col text-begeEscuro py-2">
              <span className="">
                <Link href={`trabalho/${trabalho.id}`}>
                  <b>{trabalho.nome}</b>
                </Link>
              </span>
              <span className="text-xs lg:text-sm">
                {format(trabalho.dataInicio, "EEEE", { locale: pt })},{" "}
                {trabalho.horaInicio}, {trabalho.farda}
              </span>
              <span className="text-xs lg:text-sm">
                <b>Hinário:</b> {trabalho.hinario}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
