import { prisma } from "@/db";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbJewishStar, TbHanger } from "react-icons/tb";
import {
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineAnnotation,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Image from "next/image";

export interface trabalhosProps {
  trabalhoId: number;
  nome: string;
  dataInicio: Date;
  horaInicio: string;
  dataFim?: Date;
  horaFim?: string;
  trabalho?: number;
  farda?: string;
  hinario?: string;
  lista?: {
    idUsuario?: number;
    funcao?: number;
  }[];
  observacao?: string;
}
[];

export default async function Trabalho({ params }: any) {
  const trabalho = await prisma.trabalhos.findUnique({
    where: {
      trabalhoId: Number(params.slug),
    },
  });

  return (
    <main className="w-full flex flex-col">
      <div className="p-5">
        <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-6xl md:px-6">
          <div className="flex flex-col pb-16 md:flex-row md:divide-x md:divide-gray-300">
            <div className="flex flex-col text-begeEscuro md:pr-14 w-full md:w-[50%] lg:w-[40%]">
              <h2 className="flex flex-row gap-1 py-4 sm:py-6 text-lg lg:text-2xl font-sans font-light text-begeMedio">
                <TbJewishStar className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
                Trabalho
              </h2>
              <div>
                <h1 className="flex flex-row text-lg sm:text-xl font-bold tracking-tigh mb-4">
                  {trabalho?.nome}
                </h1>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-1">
                    <div className="flex">
                      <MdOutlineCalendarMonth className="w-4 h-4 lg:w-6 lg:h-6 fill-begeMedio" />
                    </div>
                    <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                      <b>Data:</b>{" "}
                      {trabalho?.dataInicio &&
                        format(trabalho?.dataInicio, "dd 'de' MMMM 'de' yyyy", {
                          locale: pt,
                        })}
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row items-center gap-1">
                      <div className="flex">
                        <HiOutlineClock className="w-4 h-4 lg:w-6 lg:h-6 text-begeMedio" />
                      </div>
                      <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                        <b>Horário:</b> {trabalho?.horaInicio}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      <div className="flex">
                        <TbHanger className="w-4 h-4 lg:w-6 lg:h-6 text-begeMedio" />
                      </div>
                      <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                        <b>Farda:</b> {trabalho?.farda}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-1">
                    <div className="flex">
                      <HiOutlineBookOpen className="mt-0 w-4 h-4 lg:w-6 lg:h-6 text-begeMedio" />
                    </div>
                    <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                      <b>Hinário:</b> {trabalho?.hinario}
                    </div>
                  </div>
                </div>
              </div>
              {trabalho?.observacao && (
                <div className="pt-3">
                  <h2 className="flex flex-row gap-1 py-4 sm:py-6 text-lg lg:text-2xl font-sans font-light text-begeMedio">
                    <HiOutlineAnnotation className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
                    Comunicados
                  </h2>
                  <div className="text-xs md:text-sm lg:text-base text-begeMedio bg-white p-3 lg:p-5 rounded-lg">
                    <p className="italic">{trabalho?.observacao}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-12 w-full md:w-[50%] lg:w-[60%] md:mt-0 md:pl-14">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h2 className="flex flex-row gap-1 py-4 sm:py-6 text-lg lg:text-2xl font-sans font-light text-begeMedio">
                    <HiOutlineClipboardList className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
                    Lista de participantes
                  </h2>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#7EB256] text-white py-1 px-3 rounded-xl text-sm font-bold flex flex-row items-center gap-1"
                  >
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    Quero Participar
                  </button>
                </div>
              </div>
              <div className="flex flex-row gap-5 text-sm text-begeEscuro">
                <div>
                  <b>Fardados:</b> 10/21
                </div>
                <div>
                  <b>Visitantes:</b> 5/3
                </div>
                <div>
                  <b>Total:</b> 15/24 (39)
                </div>
              </div>
              <div>
                <ul className="my-4 text-begeEscuro">
                  <li className="flex flex-row gap-3">
                    <span>
                      <b>01</b>
                    </span>
                    <span className="flex w-10 h-10 items-center relative">
                      <Image className="rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Jorge Luiz de Moura" fill />
                    </span>
                    <span>Jorge Luiz de Moura</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
