"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Dispatch, SetStateAction } from "react";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { TbHanger } from "react-icons/tb";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface ListaProps {
  id: number;
  nome: string;
  dataInicio: string;
  dataFim: string;
  horaInicio: string;
  horaFim: string;
  farda: string;
  hinario: string;
  trabalhoId: number;
  lista: string[];
  observacao: string;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setDiaSelecionado: Dispatch<SetStateAction<Date>>;
}

export function Lista({
  id,
  nome,
  dataInicio,
  dataFim,
  horaInicio,
  horaFim,
  farda,
  hinario,
  trabalhoId,
  lista,
  observacao,
  index,
  setIndex,
  setDiaSelecionado,
}: ListaProps) {
  const [parent] = useAutoAnimate();
  const handleSetIndex = (id: number) => {
    index !== id && setIndex(id);
  };
  return (
    <div
      className="border border-gray-300 bg-white rounded-lg mb-2"
      ref={parent}
    >
      <div
        onClick={() => {
          handleSetIndex(id);
          setDiaSelecionado(parseISO(dataInicio));
          window.scrollBy(0, window.innerHeight);
        }}
        className="font-bold text-begeEscuro text-md lg:text-xl tracking-tight cursor-pointer"
      >
        <div className="p-5 text-base md:text-lg text-begeEscuro flex flex-row items-center">
          {nome}
          <span
            className={classNames(
              index === id && "invisible",
              "font-normal text-sm ml-2 flex flex-row items-center gap-1"
            )}
          >
            <HiOutlineCalendar className="w-5 h-5 text-begeMedio" /> {format(parseISO(dataInicio), "dd/MM")}
          </span>
        </div>
      </div>
      {index === id && (
        <div className="text-xs md:text-sm p-5 -mt-7 flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 text-begeEscuro">
            <HiOutlineCalendar className="w-5 h-5 text-begeMedio" /> Data:{" "}
            <b>
              {format(parseISO(dataInicio), "iiii, d 'de' MMMM", {
                locale: ptBR,
              })}
            </b>
          </div>
          <div className="flex flex-row items-center gap-5 text-begeEscuro">
            <div className="flex flex-row gap-1 items-center">
              <HiOutlineClock className="w-5 h-5 text-begeMedio" /> Horario:{" "}
              <b>{horaInicio}</b>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <TbHanger className="w-5 h-5 text-begeMedio" /> Farda:{" "}
              <b>{farda}</b>
            </div>
          </div>
          <div className="flex flex-row items-start gap-1  text-begeEscuro">
            <HiOutlineCalendar className="w-5 h-5 text-begeMedio" />{" "}
            <span className="pt-1 sm:pt-0">
              Hinário:
              <b>{hinario}</b>{" "}
            </span>
          </div>
          <div className="pt-3 flex w-full md:justify-start gap-3">
            <button
              type="button"
              className="bg-begeEscuro font-bold text-white p-3 py-2 rounded-lg w-full md:w-auto flex flex-row items-center justify-center gap-1"
            >
              <HiOutlineInformationCircle className="w-6 h-6" /> Mais
              informações
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
