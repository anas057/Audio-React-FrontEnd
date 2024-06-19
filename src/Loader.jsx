import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Components/Header/Logo.png";

const Loader = ({ duration = 100, onCountdownEnd }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 4);
      }, 100);

      return () => clearInterval(timer);
    } else {
      setIsLoading(false);
      if (onCountdownEnd) {
        onCountdownEnd();
      }
    }
  }, [countdown, onCountdownEnd]);

  return (
    <AnimatePresence>
      {(isLoading || countdown <= 0) && (
        <motion.div
          key="loader"
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.455, 0.075, 0.0, 1.0] }}
          className="fixed bottom-0 left-0 w-screen h-screen bg-white/50 z-50 backdrop-blur-lg flex justify-center items-center "
        >
          <div className="text-black text-xl font-bold">
            <div className="text-center flex flex-col justify-center gap-10 items-center">
              <img src={Logo} className="w-[100px] h-[100px]" alt="Logo" />
              <h1 className="text-[3rem] font-bold ml-2">Audio</h1>
              <div className="relative md:top-[150px] md:left-[550px] font-medium tracking-tighter">
                {countdown > 0 ? countdown.toFixed(1) + "%" : "Let's Go"}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;