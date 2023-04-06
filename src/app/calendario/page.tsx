import { Calendario as Calendar } from "@/components/calendario/calendario";
import { Lista } from "@/components/calendario/lista";
import api from "@/utils/axios";

/* const trabalhos = [
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
    dataInicio: "2023-04-05",
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
    dataInicio: "2023-04-30",
    horaInicio: "20:30",
    dataFim: "2023-04-30",
    horaFim: "00:00",
    farda: "azul",
    hinario: "Oração + Concentração + Hinos novos",
    trabalho: 1,
    lista: [{ idUsuario: 1, funcao: 1 }],
    observacao: "",
  },
]; */

const getTrabalhos = async () => {
  const { data } = await api.get("http://localhost:3000/api/trabalhos");
  const { trabalhos } = await data;
  return trabalhos;
};

export default async function Calendario() {
  const trabalhos = await getTrabalhos();

  return (
    <main className="w-full flex flex-col">
      <div className="pt-16 px-5">
        <div className="max-w-md px-4 mx-auto sm:px7 md:max-w-6xl md:px-6">
          <div className="flex flex-col pb-16 md:flex-row md:divide-x md:divide-gray-300">
            <div className="md:pr-14 w-full md:w-[40%] lg:w-1/3">
              <Calendar trabalhos={trabalhos} />
            </div>
            <div className="mt-12 w-full md:w-[60%] lg:w-2/3 flex md:mt-0 md:pl-14">
              <Lista trabalhos={trabalhos} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
