"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseISO } from "date-fns";
import { Dispatch, SetStateAction, useRef } from "react";

interface ListaProps {
  id: number;
  nome: string;
  dataInicio: string;
  dataFim: string;
  horaInicio: string;
  horaFim: string;
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
        className="font-bold text-begeEscuro text-md lg:text-xl tracking-tight cursor-pointer p-4"
      >
        {nome}
      </div>
      {index === id && (
        <div className="text-sm p-4 pt-0 -mt-3">
          <div className="text-sm text-begeEscuro">
            Data: <b>{dataInicio}</b>
          </div>
          <div className="text-sm text-begeEscuro">
            Horario: <b>{horaInicio}</b>
          </div>
        </div>
      )}
    </div>
  );
}
