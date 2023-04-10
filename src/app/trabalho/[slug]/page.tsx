import { prisma } from "@/db";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbJewishStar, TbHanger } from "react-icons/tb";
import { HiOutlineClock } from "react-icons/hi";

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
      <div className="pt-16 px-5">
        <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-6xl md:px-6">
          <h2 className="flex flex-row gap-2 pb-8 text-lg lg:text-2xl font-sans font-light text-begeMedio">
            <TbJewishStar className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
            Trabalho
          </h2>
          <div className="flex flex-col pb-16 md:flex-row md:divide-x md:divide-gray-300">
            <div className="text-begeEscuro md:pr-14 w-full md:w-[40%] lg:w-1/3">
              <h1 className="flex flex-row text-2xl font-bold tracking-tigh mb-3">
                {trabalho?.nome}
              </h1>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                  <div className="flex">
                    <MdOutlineCalendarMonth className="w-4 h-4 lg:w-6 lg:h-6 fill-begeMedio" />
                  </div>
                  <div className="flex gap-2">
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
                    <div className="flex gap-2">
                      <b>Horário:</b> {trabalho?.horaInicio}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="flex">
                      <TbHanger className="w-4 h-4 lg:w-6 lg:h-6 text-begeMedio" />
                    </div>
                    <div className="flex gap-2">
                      <b>Farda:</b> {trabalho?.farda}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="flex">
                    <MdOutlineCalendarMonth className="w-4 h-4 lg:w-6 lg:h-6 fill-begeMedio" />
                  </div>
                  <div className="flex gap-2">
                    <b>Hinário:</b> {trabalho?.hinario}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 w-full md:w-[60%] lg:w-2/3 flex md:mt-0 md:pl-14"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
