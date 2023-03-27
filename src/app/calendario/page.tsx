"use client";

import { format, parse, startOfToday } from "date-fns";
import { Calendario as Calendar } from "@/components/calendario/calendario";
import { Lista } from "@/components/calendario/lista";
import { useEffect, useState } from "react";
import api from "@/utils/axios";

const trabalhos = [
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
    observacao: "",
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
    observacao: "",
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
    observacao: "",
  },
];

const fetchTrabalhos = async () => {
  const { data } = await api.get(`api/trabalhos`);
  return data;
};

export default function Calendario() {
  const hoje = startOfToday();
  const [diaSelecionado, setDiaSelecionado] = useState(hoje);
  const [mesAtual, setMesAtual] = useState(format(hoje, "MMM-yyyy"));
  const [index, setIndex] = useState(0);
  const primeiroDiaMesAtual = parse(mesAtual, "MMM-yyyy", new Date());

  useEffect(() => {
    const dataTrabalhos = fetchTrabalhos()
    console.log("data", dataTrabalhos);
  }, []);

  return (
    <main className="w-full flex flex-col">
      <div className="pt-16 px-5">
        <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-6xl md:px-6">
          <div className="flex flex-col pb-16 md:flex-row md:divide-x md:divide-gray-300">
            <div className="md:pr-14 w-full md:w-[40%] lg:w-1/3">
              <Calendar
                trabalhos={trabalhos}
                hoje={hoje}
                index={index}
                setIndex={setIndex}
                mesAtual={mesAtual}
                setMesAtual={setMesAtual}
                diaSelecionado={diaSelecionado}
                setDiaSelecionado={setDiaSelecionado}
                primeiroDiaMesAtual={primeiroDiaMesAtual}
              />
            </div>
            <div className="mt-12 w-full md:w-[60%] lg:w-2/3 flex md:mt-0 md:pl-14">
              <Lista
                trabalhos={trabalhos}
                hoje={hoje}
                index={index}
                setIndex={setIndex}
                mesAtual={mesAtual}
                diaSelecionado={diaSelecionado}
                setDiaSelecionado={setDiaSelecionado}
                primeiroDiaMesAtual={primeiroDiaMesAtual}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
