"use client";

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
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Lista } from "./lista";

const eventos = [
  {
    id: 1,
    nome: "Concentração",
    dataInicio: "2023-03-15",
    horaInicio: "20:30",
    dataFim: "2023-03-15",
    horaFim: "00:00",
    trabalho: 1,
    farda: "azul",
    hinario: "Oração + Concentração + Hinos novos",
    lista: [{ idUsuario: 1, funcao: 1 }],
    observação: "",
  },
  {
    id: 2,
    nome: "São José",
    dataInicio: "2023-03-19",
    horaInicio: "10:30",
    dataFim: "2023-03-19",
    horaFim: "22:00",
    farda: "branca",
    hinario: "O Cruzeirinho, Padrinho Alfredo",
    trabalho: 1,
    lista: [{ idUsuario: 1, funcao: 1 }],
    observação: "",
  },
  {
    id: 3,
    nome: "Concentração",
    dataInicio: "2023-03-30",
    horaInicio: "20:30",
    dataFim: "2023-03-30",
    horaFim: "00:00",
    farda: "azul",
    hinario: "Oração + Concentração + Hinos novos",
    trabalho: 1,
    lista: [{ idUsuario: 1, funcao: 1 }],
    observação: "",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function CalendarioLista() {
  const hoje = startOfToday();
  const [diaSelecionado, setDiaSelecionado] = useState(hoje);
  const [mesAtual, setMesAtual] = useState(format(hoje, "MMM-yyyy"));
  const primeiroDiaMesAtual = parse(mesAtual, "MMM-yyyy", new Date());
  const [index, setIndex] = useState(0);

  const dias = eachDayOfInterval({
    start: primeiroDiaMesAtual,
    end: endOfMonth(primeiroDiaMesAtual),
  });

  let diasEventos = eventos.filter(evento =>
    isSameDay(parseISO(evento.dataInicio), diaSelecionado)
  );

  function mesAnterior() {
    const primeiroDiaMesAnterior = add(primeiroDiaMesAtual, { months: -1 });
    setMesAtual(format(primeiroDiaMesAnterior, "MMM-yyyy"));
  }

  function mesHoje() {
    setMesAtual(format(new Date(), "MMM-yyyy"));
    setDiaSelecionado(hoje);
  }

  function proximoMes() {
    const primeiroDiaProximoMes = add(primeiroDiaMesAtual, { months: 1 });
    setMesAtual(format(primeiroDiaProximoMes, "MMM-yyyy"));
  }

  return (
    <div className="pt-16 px-5">
      <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gra">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-begeEscuro capitalize">
                {format(primeiroDiaMesAtual, "MMMM yyyy", { locale: ptBR })}
              </h2>
              <button type="button" onClick={mesAnterior} className="">
                <span className="sr-only">Mês anterior</span>
                <HiChevronLeft
                  className="w-5 h-5 fill-begeMedio"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={mesHoje}
                className="mx-7 text-sm text-begeEscuro font-bold"
              >
                <span className="sr-only">Mês atual</span>
                Hoje
              </button>
              <button type="button" onClick={proximoMes} className="">
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
                        eventos.some(evento => {
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
                        eventos.some(evento =>
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
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <ListaEventos
              eventos={eventos}
              index={index}
              setIndex={setIndex}
              mesAtual={mesAtual}
              diaSelecionado={diaSelecionado}
              setDiaSelecionado={setDiaSelecionado}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

function ListaEventos({
  eventos,
  index,
  setIndex,
  diaSelecionado,
  setDiaSelecionado,
  mesAtual,
}: any) {
  const filterMes = format(diaSelecionado, "MMMM", { locale: ptBR });
  const filterEventos = eventos.filter(
    (evento: any) =>
      format(parseISO(evento.dataInicio), "MMM-yyyy") === mesAtual
  );
  if (filterEventos.length > 0) {
    return (
      <div className="flex flex-col">
        {eventos.map((evento: any, key: number) => {
          if (format(parseISO(evento.dataInicio), "MMM-yyyy") == mesAtual) {
            return (
              <>
                <Lista
                  key={key}
                  id={evento.id}
                  nome={evento.nome}
                  dataInicio={evento.dataInicio}
                  dataFim={evento.dataFim}
                  horaInicio={evento.horaInicio}
                  horaFim={evento.horaFim}
                  farda={evento.farda}
                  hinario={evento.hinario}
                  trabalhoId={evento.trabalho}
                  lista={evento.lista}
                  observacao={evento.observacao}
                  index={index}
                  setIndex={setIndex}
                  setDiaSelecionado={setDiaSelecionado}
                />
              </>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="font-bold text-sm text-begeMedio p-5">
        Nenhum trabalho.
      </div>
    );
  }
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
