/* eslint-disable react-hooks/exhaustive-deps */
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export interface trabalhosProps {
  trabalhos: {
    id: number;
    nome: string;
    dataInicio: string;
    horaInicio: string;
    dataFim: string;
    horaFim: string;
    trabalho: number;
    farda: string;
    hinario: string;
    lista: {
      idUsuario: number;
      funcao: number;
    }[];
    observacao: string;
  }[];
  hoje: Date;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  mesAtual: string;
  setMesAtual: Dispatch<SetStateAction<string>>;
  diaSelecionado: Date;
  setDiaSelecionado: Dispatch<SetStateAction<Date>>;
  primeiroDiaMesAtual: Date;
}

export function Calendario({
  hoje,
  trabalhos,
  setIndex,
  setMesAtual,
  diaSelecionado,
  setDiaSelecionado,
  primeiroDiaMesAtual,
}: trabalhosProps) {

  const dias = eachDayOfInterval({
    start: primeiroDiaMesAtual,
    end: endOfMonth(primeiroDiaMesAtual),
  });

  function mesAnterior() {
    const primeiroDiaMesAnterior = add(primeiroDiaMesAtual, { months: -1 });
    setMesAtual(format(primeiroDiaMesAnterior, "MMM-yyyy"));
  }

  function mesHoje() {
    setMesAtual(format(new Date(), "MMM-yyyy"));
    setDiaSelecionado(hoje);
    setIndex(0);

    const data: any = trabalhos.find(evento =>
      isSameDay(hoje, parseISO(evento.dataInicio))
    );
    data ? setIndex(data.id) : setIndex(0);
  }

  function proximoMes() {
    const primeiroDiaProximoMes = add(primeiroDiaMesAtual, { months: 1 });
    setMesAtual(format(primeiroDiaProximoMes, "MMM-yyyy"));
  }

  useEffect(() => {
    const data = trabalhos.find(evento =>
      isSameDay(hoje, parseISO(evento.dataInicio))
    );
    data ? setIndex(data.id) : setIndex(0);
  }, []);

  return (
    <>
      <div className="flex items-center">
        <h2 className="flex-auto text-sm sm:text-base font-bold text-begeEscuro capitalize">
          {format(primeiroDiaMesAtual, "MMMM yyyy", { locale: ptBR })}
        </h2>
        <button type="button" onClick={mesAnterior} className="p-3">
          <span className="sr-only">Mês anterior</span>
          <HiChevronLeft
            className="w-5 h-5 fill-begeMedio"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          onClick={mesHoje}
          className="py-3 text-sm text-begeEscuro font-bold"
        >
          <span className="sr-only">Mês atual</span>
          Hoje
        </button>
        <button type="button" onClick={proximoMes} className="p-3">
          <span className="sr-only">Próximo mês</span>
          <HiChevronRight
            className="w-5 h-5 fill-begeMedio"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
        <div>S</div>
        <div>T</div>
        <div>Q</div>
        <div>Q</div>
        <div>S</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div className="grid grid-cols-7 mt-2 text-xs sm:text-sm">
        {dias.map((dia, indexDia) => {
          return (
            <div
              key={dia.toString()}
              className={classNames(
                indexDia === 0 && colStartClasses[getDay(dia)],
                "py-1.5"
              )}
            >
              <button
                type="button"
                onClick={() => {
                  setDiaSelecionado(dia);
                  setIndex(0);
                  trabalhos.some(evento => {
                    if (isSameDay(dia, parseISO(evento.dataInicio))) {
                      setIndex(evento.id);
                    }
                  });
                }}
                className={classNames(
                  isEqual(dia, diaSelecionado) && "text-white",
                  !isEqual(dia, diaSelecionado) &&
                    isToday(dia) &&
                    "text-begeEscuro bg-white",
                  !isEqual(dia, diaSelecionado) &&
                    !isToday(dia) &&
                    isSameMonth(dia, primeiroDiaMesAtual) &&
                    "text-gray-900",
                  !isEqual(dia, diaSelecionado) &&
                    !isToday(dia) &&
                    !isSameMonth(dia, primeiroDiaMesAtual) &&
                    "text-gray-400",
                  isEqual(dia, diaSelecionado) &&
                    isToday(dia) &&
                    "bg-begeEscuro",
                  isEqual(dia, diaSelecionado) &&
                    !isToday(dia) &&
                    "bg-begeMedio ring-0 text-begeEscuro",
                  !isEqual(dia, diaSelecionado) && "hover:bg-white",
                  (isEqual(dia, diaSelecionado) || isToday(dia)) &&
                    "font-semibold",
                  trabalhos.some(evento =>
                    isSameDay(parseISO(evento.dataInicio), dia)
                  ) && "ring ring-begeMedio",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-bgMedio transition-all"
                )}
              >
                <time dateTime={format(dia, "yyyy-MM-dd")}>
                  {format(dia, "d")}
                </time>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

let colStartClasses: string[] = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
