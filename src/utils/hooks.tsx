import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const responsive = (size: number) => {
    if (size > 0 && size < 640) return "sm";
    if (size > 640 && size < 768) return "md";
    if (size > 768 && size < 1024) return "lg";
    if (size > 1024 && size < 1280) return "xl";
    if (size > 1280 && size < 1536) return "2xl";
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { size: windowSize, responsive: responsive(windowSize) };
};
