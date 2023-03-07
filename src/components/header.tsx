import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";

export function Header() {
  return (
    <div className="container max-w-full flex gap-6 p-5 pt-8 lg:p-12 items-center bg-white">
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center rounded-full relative overflow-clip ring-2 ring-green-400 ring-offset-2 hover:ring-offset-4 hover:ring-4 ring-offset-white transition-all">
          <Image
            src="https://github.com/ronan-morais.png"
            alt="Ronan Morais"
            fill
          />
        </div>
        <span className="absolute -bottom-2 right-0 bg-green-500 text-sm text-white font-bold w-6 h-6 justify-center items-center rounded-full flex ">
          3
        </span>
      </div>
      <div className="w-full whitespace-nowrap">
        <h2 className="text-xs sm:text-sm font-bold text-begeMedio">
          Secretaria Virtual
        </h2>
        <h1 className="text-sm sm:text-lg lg:text-xl font-black tracking-normal text-begeEscuro leading-4">
          Flor de Jagube
        </h1>
      </div>
      <div className="">
        <nav>
          <button
            type="button"
            id="menuButton"
            title="Menu Button"
            className="p-3 bg-begeClaro rounded-lg hover:ring-2 hover:ring-begeClaro hover:ring-offset-2 transition-all"
          >
            <HiMenuAlt2 className="fill-begeMedio w-6 h-6" />
          </button>
        </nav>
      </div>
    </div>
  );
}
