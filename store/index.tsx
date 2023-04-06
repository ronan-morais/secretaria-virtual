import { format, parse, startOfToday } from "date-fns";
import { create } from "zustand";

interface calendarioTypes {
  hoje: Date;
  diaSelecionado: Date;
  setDiaSelecionado: () => void;
  mesAtual: Date;
  setMesAtual: () => void;
  index: number;
  setIndex: () => void;
  primeiroDiaMesAtual: Date;
}

export const useCalendarioStore = create((set, get: any) => {
  const hoje = startOfToday();

  return {
    hoje,
    diaSelecionado: hoje,
    setDiaSelecionado: (props: any) => set(() => ({ diaSelecionado: props })),
    mesAtual: format(hoje, "MMM-yyyy"),
    setMesAtual: (props: any) => set(() => ({ mesAtual: props })),
    index: 0,
    setIndex: (props: number) => set(() => ({ index: props })),
    primeiroDiaMesAtual: () => parse(get().mesAtual, "MMM-yyyy", new Date()),
  };
});
