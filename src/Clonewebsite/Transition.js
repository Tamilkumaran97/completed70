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
    /*   <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 0 }}
      transition={{ duration: 1.5, delay: 2.9, type: "spring" }}
      className="fixed flex justify-center rounded-full  z-[70] items-center w-[100%] h-[100vh]"
    >
      <motion.div
        initial={{ scale: 100 }}
        animate={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 2.9, type: "spring" }}
        className="relative bg-[#D1BFA4] w-[1000px] h-[1000px] rounded-full"
      ></motion.div>
      <div className=" w-[1000px] absolute  overflow-hidden">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -1010 }}
          transition={{ duration: 2, delay: 2, type: "spring", stiffness: 50 }}
          className=" py-10 px-4 text-center flex w-[2000px] justify-between"
        >
          <h1 className=" squad uppercase text-8xl    ">Soul Church</h1>
          <h1 className=" squad uppercase text-8xl   ">welcome Home</h1>
        </motion.div>
      </div>
    </motion.div> */
    <div className="">
      <Slider {...settings} className="">
        <div className="px-36  w-[100%] h-60 ">
          <div className="bg-red-500 w-[80vw] p-10 h-60 rounded-3xl">
            <h1 className="uppercase text-sm pb-4">What's on</h1>
            <h1 className="text-3xl pb-8">FOLLOW JESUS</h1>
            <div className="flex justify-between items-center pr-20">
              <p className="w-[70%]">
                Our 7-week discipleship course is back - if you are new to
                faith, this is for you! Starting 21st may
              </p>
              <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div className="px-36  w-[100%] h-60 ">
          <div className="bg-red-500 w-[80vw] p-10 h-60 rounded-3xl">
            <h1 className="uppercase text-sm pb-4">What's on</h1>
            <h1 className="text-3xl uppercase pb-8">
              MIracles in may fundraiser kit
            </h1>
            <div className="flex justify-between items-center pr-20">
              <p className="w-[70%]">
                Looking for ways to get involved with the Miracles in May
                fundraiser? get all the information in our handy guide
              </p>
              <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                GIVE THE GUIDE
              </button>
            </div>
          </div>
        </div>
        <div className="px-36  w-[100%] h-60 ">
          <div className="bg-red-500 w-[80vw] p-10 h-60 rounded-3xl">
            <h1 className="uppercase text-sm pb-4">What's on</h1>
            <h1 className="text-3xl pb-8">OPEN HOME 23</h1>
            <div className="flex justify-between items-center pr-20">
              <p className="w-[70%]">
                This is an opportunity for us as SOUL Church to o open our home
                to other churches, to inspire and equip leaders and pastors to
                see their churches grow and flourish
              </p>
              <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                REGISTER HERE
              </button>
            </div>
          </div>
        </div>
        <div className="px-36  w-[100%] h-60 ">
          <div className="bg-red-500 w-[80vw] p-10 h-60 rounded-3xl">
            <h1 className="uppercase text-sm pb-4">What's on</h1>
            <h1 className="text-3xl pb-8">MIRACLES IN MAY</h1>
            <div className="flex justify-between items-center pr-20">
              <p className="w-[70%]">
                Get involved with our fundraising month in may for our new
                building.
              </p>
              <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2  border-black">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Transition;
