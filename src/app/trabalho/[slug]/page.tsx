import { format, parseISO } from "date-fns";
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
import { getXataClient } from "@/db/xata";
import Image from "next/image";

async function getTrabalho(id: string) {
  const client = getXataClient();
  const trabalho = await client.db.trabalhos.read(id);
  return trabalho;
}

async function getLista(id: string) {
  const client = getXataClient();
  //const lista = await client.db.listas.getAll();
  const lista = await client.db.listas
    .select(["amigo.avatar","amigo.dados.nome", "funcao.funcao"])
    .filter("trabalho.id", id)
    .getAll();
  return lista;
}

export default async function Trabalho({ params }: any) {
  const trabalho = await getTrabalho(params.slug);
  const lista = await getLista(params.slug);

  return (
    <main className="w-full flex flex-col">
      <div className="p-5">
        <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-6xl md:px-6">
          <div className="flex flex-col pb-16 md:flex-row md:divide-x md:divide-gray-300">
            <div className="flex flex-col text-begeEscuro md:pr-14 w-full md:w-[40%]">
              <h2 className="flex flex-row gap-1 py-4 sm:py-6 text-lg lg:text-2xl font-sans font-light text-begeMedio">
                <TbJewishStar className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
                Trabalho
              </h2>
              <div>
                <h1 className="flex flex-row text-lg sm:text-xl font-bold tracking-tigh mb-4">
                  {trabalho?.nome}
                </h1>
                <div className="flex flex-col gap-2">
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
                  <div className="text-xs md:text-sm lg:text-base text-begeMedio bg-[rgba(255,255,255,0.6)] p-3 lg:p-5 rounded-lg">
                    <p className="italic">{trabalho?.observacao}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-12 w-full md:w-[60%] md:mt-0 md:pl-14">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h2 className="flex flex-row gap-1 py-4 sm:py-6 text-lg lg:text-2xl font-sans font-light text-begeMedio">
                    <HiOutlineClipboardList className="w-6 h-6 lg:w-8 lg:h-8 text-begeMedio" />
                    Participantes
                  </h2>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#7EB256] text-white py-1 px-3 rounded-xl text-xs sm:text-sm font-bold flex flex-row items-center gap-1"
                  >
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    Quero Participar
                  </button>
                </div>
              </div>
              <div className="flex flex-row my-3 justify-between sm:justify-normal gap-5 text-xs sm:text-sm text-begeEscuro">
                <div>
                  <b>Fardados:</b> -/-
                </div>
                <div>
                  <b>Visitantes:</b> -/-
                </div>
                <div>
                  <b>Total:</b> -/- (
                  {/* Array.isArray(trabalho?.lista) && trabalho?.lista.length */}
                  )
                </div>
              </div>
              <div>
                <ul className="my-4 text-begeEscuro">
                  <>
                    {lista.map((participante: any, key: number) => {
                      console.log("xxxx", participante);
                      return (
                        <li
                          key={key}
                          className="flex flex-row gap-3 items-center bg-[rgba(255,255,255,0.6)] my-2 rounded-xl px-3"
                        >
                          <span>
                            <b className="px-0 sm:px-2">{key + 1}</b>
                          </span>
                          <span className="flex w-12 h-12 bg-cover bg-center relative">
                            <Image
                              src={participante.amigo.avatar}
                              alt=""
                              className=" rounded-full"
                              fill
                            />
                          </span>
                          <span className="flex flex-grow text-xs sm:text-sm lg:text-base">
                            {participante.amigo.dados.nome}
                          </span>
                          <span className="bg-[#89B7C1] text-white text-xs p-1 px-2 rounded-xl font-bold">
                            {participante.funcao.funcao}
                          </span>
                        </li>
                      );
                    })}
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
