import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      y: 1,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    closed: {
      y: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <div className="relative md:w-[50px] md:h-[50px] hamburger">
        {/* Class for click detection */}
        <button onClick={toggleMenu} className="focus:outline-none">
          <div 
          initial={{
            opacity:0,
          }}
          animate={{
            opacity : 1
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          >
          <div>
            <div className="flex items-center  relative md:left-[-20px] max-sm:left-[-20px] top-6">
              <IoSearch className="text-gray-400 text-[1.7rem] relative left-[40px] " />
              <input
                type="Search"
                className=" max-sm:w-[360px] outline-none border-gray-300 rounded-md p-1 border-[2px] w-[500px] h-[50px] pl-10 focus:border-green-10 transition-all"
                placeholder="Search Headphone"
              />
            </div>
          </div>
          </div>
        </button>
        <motion.div
          className="fixed top-0 left-0 z-50 h-screen w-screen backdrop-blur-lg md:bg-white/10 max-sm:bg-transparent overflow-hidden"
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <div className="md:pb-[400px] w-screen h-screen flex justify-center max-sm:items-start max-sm:mt-[150px]">
            <div className="flex justify-center items-center relative md:left-[-20px] md:top-6 max-sm:left-[-10px] ">
              <IoSearch className="text-gray-400 text-[1.7rem] relative left-[40px] " />
              <input
                type="Search"
                className="outline-none border-gray-300 rounded-md p-1 border-[2px] max-sm:w-[360px] md:w-[700px] h-[50px] pl-10 focus:border-green-500 transition-all "
                placeholder="Search Headphone"
              />
            </div>
          </div>
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="z-50 absolute top-4 md:left-20 max-sm:left-6 text-[2rem] focus:outline-none hover:text-gray-900" // Reversed position
            >
              <AiOutlineClose />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Search;
