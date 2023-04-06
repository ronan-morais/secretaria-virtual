import { Calendario as Calendar } from "@/components/calendario/calendario";
import { Lista } from "@/components/calendario/lista";
import api from "@/utils/axios";
import { Suspense } from "react";

const getTrabalhos = async () => {
  const data = await fetch(`${process.env.HOSTNAME}/api/trabalhos`);
  const { trabalhos } = await data.json();
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
              <Suspense fallback={<p>Loading Calendar...</p>}>
                <Calendar trabalhos={trabalhos} />
              </Suspense>
            </div>
            <div className="mt-12 w-full md:w-[60%] lg:w-2/3 flex md:mt-0 md:pl-14">
              <Suspense fallback={<p>Loading List...</p>}>
                <Lista trabalhos={trabalhos} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
