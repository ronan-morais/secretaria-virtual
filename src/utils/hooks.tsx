"use client";

import { useEffect, useState } from "react";
import api from "./axios";
import { isSameDay, parseISO } from "date-fns";
import { useCalendarioStore } from "store";

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  const responsive = (size: number) => {
    if (size > 0 && size < 640) return "sm";
    if (size > 640 && size < 768) return "md";
    if (size > 768 && size < 1024) return "lg";
    if (size > 1024 && size < 1280) return "xl";
    if (size > 1280 && size < 1536) return "2xl";
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);

    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return { size: windowSize, responsive: responsive(windowSize) };
};

export const useClassNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export const useGetCalendario = async () => {
  const { data } = await api.get("api/trabalhos");
  return data;
};

export const useSetIndex = (trabalhos: any) => {
  const hoje = useCalendarioStore((state: any) => state.hoje);
  const data = trabalhos.find((trabalho: any) =>
    isSameDay(hoje, parseISO(trabalho.dataInicio))
  );
  if (data) {
    return data.id;
  }
  return 0;
};
