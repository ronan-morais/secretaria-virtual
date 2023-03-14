"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Dispatch, SetStateAction, useRef } from "react";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
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
    <div className="border border-gray-300 rounded-lg mb-2" ref={parent}>
      <div
        onClick={() => {
          handleSetIndex(id);
          setDiaSelecionado(parseISO(dataInicio));
        }}
        className="font-bold text-begeEscuro text-md lg:text-xl tracking-tight cursor-pointer"
      >
        <div className="p-5">
          {nome}
          <span
            className={classNames(
              index === id && "invisible",
              "font-normal text-sm  ml-2"
            )}
          >
            ({format(parseISO(dataInicio), "dd/MM")})
          </span>
        </div>
      </div>
      {index === id && (
        <div className="text-sm p-5 -mt-7 flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 text-sm text-begeEscuro">
            <HiOutlineCalendar className="w-5 h-5 text-begeMedio" /> Data:{" "}
            <b>
              {format(parseISO(dataInicio), "iiii, d 'de' MMMM", {
                locale: ptBR,
              })}
            </b>
          </div>
          <div className="flex flex-row items-center gap-5 text-sm text-begeEscuro">
            <div className="flex flex-row gap-1">
              <HiOutlineClock className="w-5 h-5 text-begeMedio" /> Horario:{" "}
              <b>{horaInicio}</b>
            </div>
            <div className="flex flex-row gap-1">
              <TbHanger className="w-5 h-5 text-begeMedio" /> Farda: <b>{farda}</b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
