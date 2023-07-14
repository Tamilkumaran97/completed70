import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

const Transition = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <motion.div
     initial={{ scale: 1 }}
      animate={{ scale: 0 }}
      transition={{ duration: 1.5, delay: 2.9 }}  
      className="fixed flex justify-center rounded-full  z-[70] items-center w-[100%] h-[100vh]"
    >
      <motion.div
   initial={{ scale: 100 }}
        animate={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 2.9 }} 
        className="relative bg-[#D1BFA4] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[1000px] lg:h-[1000px] overflow-hidden rounded-full"
      ></motion.div>
      <div className="w-[1000px]  absolute   overflow-hidden">
        <motion.div
       initial={{ x: 0 }}
          animate={{ x: -1000 }}
          transition={{
            duration: 2,
            delay: 2,
            type: "spring",
             stiffness: 45, 
          }}  
          className=" py-10 px-4 text-center w-[2000px]  flex justify-between"
        >
          <h1 className=" head uppercase w-[1000px] text-center  text-4xl  md:text-[80px] lg:text-[150px] font-bold   ">
            Soul Church
          </h1>
          <h1 className=" head uppercase w-[1000px] text-center   text-4xl  md:text-[80px] lg:text-[150px]  font-bold ">
            welcome Home
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Transition;
