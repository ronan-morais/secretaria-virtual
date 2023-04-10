"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseISO, format, isBefore, isAfter, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { TbHanger } from "react-icons/tb";
import { useCalendarioStore } from "store";
import { trabalhosProps } from "@/app/trabalho/[slug]/page";
import Link from "next/link";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Lista({ trabalhos }: any) {
  const hoje = useCalendarioStore((state: any) => state.hoje);
  const mesAtual = useCalendarioStore((state: any) => state.mesAtual);

  const filterEventos =
    trabalhos &&
    trabalhos.filter(
      (evento: any) =>
        format(parseISO(evento.dataInicio), "MMM-yyyy") === mesAtual
    );

  if (filterEventos.length > 0) {
    return (
      <div className="flex flex-col w-full">
        {trabalhos &&
          trabalhos.map((trabalho: any, key: number) => {
            if (format(parseISO(trabalho.dataInicio), "MMM-yyyy") == mesAtual) {
              return (
                <>
                  <Item key={key} trabalho={trabalho} hoje={hoje} />
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

interface ItemProps {
  trabalho: any;
  hoje: Date;
}

function Item({ trabalho, hoje }: ItemProps) {
  const [parent] = useAutoAnimate();
  const index = useCalendarioStore((state: any) => state.index);
  const setIndex = useCalendarioStore((state: any) => state.setIndex);
  const setDiaSelecionado = useCalendarioStore(
    (state: any) => state.setDiaSelecionado
  );
  const antes = isBefore(parseISO(trabalho.dataInicio), hoje);
  const depois = isAfter(parseISO(trabalho.dataInicio), hoje);
  const mesmoDia = isSameDay(parseISO(trabalho.dataInicio), hoje);

  const handleSetIndex = (id: number) => {
    index !== id && setIndex(id);
  };

  return (
    <>
      <div
        className={classNames(
          antes && !mesmoDia && "italic text-begeMedio",
          (depois || mesmoDia) &&
            "text-begeEscuro border border-gray-300 bg-white rounded-xl mb-2"
        )}
        ref={parent}
      >
        <div
          onClick={() => {
            handleSetIndex(trabalho.trabalhoId);
            setDiaSelecionado(parseISO(trabalho.dataInicio));
          }}
          className="font-bold text-md lg:text-xl tracking-tight cursor-pointer"
        >
          <div className="p-5 text-base md:text-lg flex flex-row items-center">
            {trabalho.nome}
            <span
              className={classNames(
                index === trabalho.trabalhoId && "invisible",
                "font-normal text-sm ml-2 flex flex-row items-center gap-1"
              )}
            >
              <HiOutlineCalendar className="w-5 h-5 text-begeMedio" />{" "}
              {format(parseISO(trabalho.dataInicio), "dd/MM")}
            </span>
          </div>
        </div>
        {index === trabalho.trabalhoId && (
          <div className="text-xs md:text-sm p-5 -mt-7 flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
              <div className="flex flex-row gap-1 items-center">
                <HiOutlineCalendar className="w-5 h-5 text-begeMedio" /> Data:{" "}
                <b>
                  {format(parseISO(trabalho.dataInicio), "iiii, d 'de' MMMM", {
                    locale: ptBR,
                  })}
                </b>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1 items-center">
                  <HiOutlineClock className="w-5 h-5 text-begeMedio" /> Horario:{" "}
                  <b>{trabalho.horaInicio}</b>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <TbHanger className="w-5 h-5 text-begeMedio" /> Farda:{" "}
                  <b>{trabalho.farda}</b>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <HiOutlineBookOpen className="w-5 h-5 text-begeMedio" />{" "}
              <span className="pt-1">
                Hinário: <b>{trabalho.hinario}</b>
              </span>
            </div>
            <div className="pt-3 flex w-full md:justify-start gap-3">
              {(mesmoDia || depois) && (
                <Link
                  href={`/trabalho/${trabalho.trabalhoId}`}
                  className="bg-dourado font-bold text-white p-3 py-2 rounded-lg w-full md:w-auto flex flex-row items-center justify-center gap-1"
                >
                  <HiOutlineInformationCircle className="w-6 h-6" /> Mais
                  informações
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
