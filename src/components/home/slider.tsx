import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Slider() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="border bg-red-400 px-5 cursor-grab overflow-hidden flex"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex gap-5 bg-green-400"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <motion.div className="flex flex-col h-[25vh] min-w-[100%] rounded-lg pointer-events-none">
          <div className="relative rounded-lg w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4>teste</h4>
          </div>
        </motion.div>
        <motion.div className="flex flex-col h-[25vh] min-w-[100%] rounded-lg pointer-events-none">
          <div className="relative rounded-lg w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4>teste</h4>
          </div>
        </motion.div>
        <motion.div className="flex flex-col h-[25vh] min-w-[100%] rounded-lg pointer-events-none">
          <div className="relative rounded-lg w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4>teste</h4>
          </div>
        </motion.div>
        <motion.div className="flex flex-col h-[25vh] min-w-[100%] rounded-lg pointer-events-none">
          <div className="relative rounded-lg w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4>teste</h4>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
