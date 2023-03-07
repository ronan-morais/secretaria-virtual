"use client";
import { HiOutlineCake } from "react-icons/hi";
import "swiper/swiper.min.css";

export function Birthdates() {
  return (
    <section className="w-full pt-5 md:whitespace-nowrap md:pr-14">
      <h2 className="flex flex-row text-lg lg:text-2xl font-sans font-light text-begeMedio">
        <HiOutlineCake className="w-10 h-6 lg:w-14 lg:h-8" />
        Aniversariantes
      </h2>
      <div>
        <ul className="mt-10 flex flex-col gap-2">
          <li className="flex flex-row items-center gap-4">
            <div className="w-24 h-24 border-4 shadow-sm border-white rounded-full flex bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80)]"></div>
            <div className="flex flex-col text-sm text-begeEscuro">
              <b>Ronan Alves de Morais</b>
              <span>21/02/1986</span>
              <span><b>37 anos</b></span>
            </div>
          </li>
          <li className="flex flex-row items-center gap-4">
            <div className="w-24 h-24 border-4 shadow-sm grayscale bg-no-repeat border-white rounded-full bg-center flex bg-cover bg-[url(https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80)]"></div>
            <div className="flex flex-col text-sm text-begeEscuro">
              <b>Ronan Alves de Morais</b>
              <span>21/02/1966 <i>(02/04/2003)</i></span>
              <span><b>48 anos</b> <i>(em memória)</i></span>
            </div>
          </li>
          <li className="flex flex-row items-center gap-4">
            <div className="w-24 h-24 border-4 shadow-sm border-white rounded-full flex bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80)]"></div>
            <div className="flex flex-col text-sm text-begeEscuro">
              <b>Ronan Alves de Morais</b>
              <span>21/02/1986</span>
              <span><b>37 anos</b></span>
            </div>
          </li>
          <li className="flex flex-row items-center gap-4">
            <div className="w-24 h-24 border-4 shadow-sm grayscale bg-no-repeat border-white rounded-full bg-center flex bg-cover bg-[url(https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80)]"></div>
            <div className="flex flex-col text-sm text-begeEscuro">
              <b>Ronan Alves de Morais</b>
              <span>21/02/1966 <i>(02/04/2003)</i></span>
              <span><b>48 anos</b> <i>(em memória)</i></span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
