import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { GrMail } from "react-icons/gr";
import { FaCopy } from "react-icons/fa";

import { AiOutlineMessage, AiOutlineArrowRight } from "react-icons/ai";
import cross from "./assets/cross.svg";
const Navbar = () => {
  const [open, setOpen] = useState();

  const showMenu = () => {
    setOpen(!open);
  };
  const [mini, setMini] = useState();

  const showMini = () => {
    setMini(!mini);
  };

  const [faith, setFaith] = useState();
  const [prayer, setPrayer] = useState();
  const [praise, setPraise] = useState();
  const [general, setGeneral] = useState();

  return (
    <div>
      <div className="fixed   w-[100%]   z-30">
        {/**relative */}
        <div className="z-50 relative  ">
          {/**logo */}
          <div className="absolute  flex justify-between px-2 md:px-10 pt-4 md:pt-10 w-[100%] items-center ">
            <div
              className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex justify-center
      items-center font-bold"
            >
              logo
            </div>
            <div className="relative ">
              <AnimatePresence>
                {open && (
                  <div>
                    <motion.div
                      initial={{ scale: 1, color: "#EFF2C0" }}
                      animate={{ scale: 30, color: "#CFBDA0" }}
                      transition={{ duration: 1 }}
                      exit={{ scale: 1, transition: { delay: 1, duration: 1 } }}
                      className="h-16 w-36  absolute container mx-auto bg-[#CFBDA0]  rounded-full"
                    ></motion.div>
                  </div>
                )}
              </AnimatePresence>

              <div className=" flex bg-white px-3 md:w-36 md:h-16 z-[70] justify-center items-center rounded-full ">
                <div className="text-xs md:text-sm  md:pr-2  z-[70]  overflow-hidden  font-semibold">
                  <AnimatePresence>
                    {!open && (
                      <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: -50 }}
                      >
                        MENU
                      </motion.h1>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {open && (
                      <motion.h2
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: -50 }}
                      >
                        CLOSE
                      </motion.h2>
                    )}
                  </AnimatePresence>
                </div>
                <div className="z-[70]">
                  <Hamburger onToggle={showMenu} size={18} />
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <div>
                <div className="absolute  w-[100%]   z-50">
                  <div className="    ">
                    <div className="flex  justify-between ">
                      {/**first container */}
                      <div className="cursor-pointer nav font-bold xl:font-normal pl-10 h-[100vh]  lg:h-[90vh] py-24 md:py-0 md:flex justify-center items-center  text-4xl md:text-7xl lg:text-[65px] xl:text-8xl ">
                        <div>
                          <motion.div className=" overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  whileFocus={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/"> Home</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div className=" overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/giving">Giving</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div className="p- overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/connect">Connect</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div className="p- overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/about"> About us</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div className="p- overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/life"> Church in life</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div className="p- overflow-hidden ">
                            <motion.div
                              initial={{ y: -150 }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2,
                              }}
                              exit={{ y: -150 }}
                            >
                              <motion.div className="relative flex items-center">
                                <div className="absolute flex items-center">
                                  <div className="w-10 flex items-center py-auto  h-10 rounded-full bg-black"></div>
                                </div>
                                <motion.h1
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 60 }}
                                  transition={{ duration: 0.4 }}
                                  className="bg-[#CFBDA0] z-10 relative"
                                >
                                  <Link to="/plan">Plan your visit</Link>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
                          </motion.div>

                          <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            exit={{
                              y: -50,
                              opacity: 0,
                              transition: { duration: 1, delay: 0.4 },
                            }}
                            className="flex lg:hidden gap-3 cursor-pointer mt-4 md:-mb-32 md:mt-10 -mb-16"
                          >
                            <BsFacebook
                              size={38}
                              className="bg-white border-black border-2 rounded-full p-1"
                            />{" "}
                            <BsInstagram
                              size={38}
                              className="bg-white border-black border-2 rounded-full p-1"
                            />{" "}
                            <TfiYoutube
                              size={38}
                              className="bg-white border-black border-2 rounded-full p-1"
                            />{" "}
                            <BsTwitter
                              size={38}
                              className="bg-white border-black border-2 rounded-full p-1"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/**middle */}
                      <motion.div
                        initial={{ y: -4000 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1,
                        }}
                        exit={{ y: -4000, transition: { duration: 1 } }}
                        className="h-auto hidden lg:block border-black  border-r-4 bg-black"
                      ></motion.div>
                      {/**second container */}
                      <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        exit={{
                          y: -50,
                          opacity: 0,
                          transition: { duration: 1, delay: 0.4 },
                        }}
                        className="  hidden lg:flex justify-center nav items-center text-base xl:text-xl"
                      >
                        <div>
                          <motion.div>
                            <h1 className="">Address</h1>
                            <p>
                              SOUL CHURCH <br /> 4 Mason Rd, NR6 6RF
                            </p>
                            <h1>Email:</h1>
                            <p>info@soulchutch.com</p>
                            <h1>call:</h1>
                            <p>016034888880</p>
                          </motion.div>
                          <div className="mt-28">
                            <h1>Youtube</h1>
                            <h1>Twitter</h1>
                            <h1>Facebook</h1>
                            <h1>instagram</h1>
                          </div>
                        </div>
                      </motion.div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ x: -4000 }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 1,
                    }}
                    exit={{ x: -4000, transition: { duration: 1 } }}
                    className="relative  hidden lg:block  w-[100%] border-black z-50 border-t-4 bg-black "
                  ></motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/**bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 3.5 }}
        className="fixed bottom-0 w-[100%] hidden lg:block overflow-hidden z-30 "
      >
        <div className=" px-10 ">
          <div className=" h-12 overflow-hidden rounded-xl px-6 py-5 flex justify-between items-center bg-white ">
            <div className="flex ">
              <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                SUNDAY SERVICES{" "}
              </h1>
              <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                {" "}
                9AM
              </h1>
              <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                {" "}
                11AM
              </h1>
              <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                {" "}
                5PM
              </h1>
              <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                WATCH ONLINE
              </h1>
            </div>
            <div className=" whitespace-nowrap w-[40%] overflow-hidden">
              <h1 className="scroll uppercase text-sm font-semibold">
                Donate to miracles in may - Donate to miracles in may - Donate
                to miracles in may - Donate to miracles in may - Donate to
                miracles in may
              </h1>
            </div>

            <div onClick={showMini} className="cursor-pointer  relative z-[80]">
              <p className="rounded-full relative z-50 bg-black w-9 h-9 flex justify-center items-center">
                <div className="z-50 relative">
                  <AiOutlineMessage size={24} color="white" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/**bottom transition */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-0 w-[100%] hidden lg:block  overflow-hidden z-30"
          >
            <div className="container mx-auto">
              <div className=" h-12 rounded-xl px-6 py-5 flex justify-between items-center bg-[#CFBDA0]">
                <div className="flex ">
                  <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                    SUNDAY SERVICES{" "}
                  </h1>
                  <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                    {" "}
                    9AM
                  </h1>
                  <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                    {" "}
                    11AM
                  </h1>
                  <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                    {" "}
                    5PM
                  </h1>
                  <h1 className=" font-semibold px-4 text-sm border-r border-black ">
                    WATCH ONLINE
                  </h1>
                </div>
                <div className=" whitespace-nowrap w-[40%] overflow-hidden">
                  <h1 className="scroll uppercase text-sm font-semibold">
                    Donate to miracles in may - Donate to miracles in may -
                    Donate to miracles in may - Donate to miracles in may -
                    Donate to miracles in may
                  </h1>
                </div>
                <div
                  onClick={showMini}
                  className="cursor-pointer z-50 relative"
                >
                  <p className="rounded-full z-40 bg-black w-9 h-9 flex justify-center items-center">
                    <div className="">
                      <AiOutlineMessage size={24} color="white" />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/**mini container */}
      <AnimatePresence>
        {mini && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="w-[100%] flex justify-end px-10 items-end  h-[100%] bg-black/70 z-40 fixed"
          >
            <div></div>
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: 100 }}
              className="bg-pink-100 relative w-[610px] h-[530px] rounded-3xl"
            >
              <div className="flex absolute justify-end w-[100%]">
                <img
                  onClick={() => setMini(!mini)}
                  className="w-16 cursor-pointer"
                  src={cross}
                  alt=""
                />
              </div>
              <motion.div className="bg-white overflow-hidden px-20 py-28 w-[525px] h-[550px] absolute  rounded-3xl ">
                <div className="text-3xl nav cursor-pointer ">
                  <motion.h1
                    onClick={() => setFaith(!faith)}
                    className="py-6 border-b-black border-b-2 w-full"
                  >
                    <motion.h1
                      initial={{ x: 0 }}
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      whileFocus={{ x: 20 }}
                    >
                      New to Faith
                    </motion.h1>
                  </motion.h1>
                  <h1
                    onClick={() => setPrayer(!prayer)}
                    className="py-6 border-b-black border-b-2 "
                  >
                    <motion.h1
                      initial={{ x: 0 }}
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {" "}
                      Prayer
                    </motion.h1>
                  </h1>
                  <h1
                    onClick={() => setPraise(!praise)}
                    className="py-6 border-b-black border-b-2 "
                  >
                    <motion.h1
                      initial={{ x: 0 }}
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {" "}
                      Praise
                    </motion.h1>
                  </h1>
                  <h1
                    onClick={() => setGeneral(!general)}
                    className="py-6 border-b-black border-b-2 "
                  >
                    <motion.h1
                      initial={{ x: 0 }}
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {" "}
                      General Enquiry
                    </motion.h1>
                  </h1>
                </div>
              </motion.div>

              {/**faith new */}
              <AnimatePresence>
                {faith && (
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, type: "tween" }}
                    exit={{ x: 40, transition: { duration: 0.8 } }}
                    className="absolute w-[590px] px-8 py-16 -ml-24 rounded-3xl h-[550px] bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="nav font-bold text-3xl">New to Faith</h1>
                      <div className="flex gap-4">
                        <GrMail
                          size={40}
                          className="bg-white hover:bg-blue-500 cursor-pointer rounded-full border-black border-2 p-1"
                        />
                        <FaCopy
                          size={40}
                          className="bg-white hover:bg-blue-500 cursor-pointer rounded-full border-black border-2 p-1"
                        />
                        <AiOutlineArrowRight
                          onClick={() => setFaith(!faith)}
                          size={40}
                          className="bg-white hover:bg-blue-500 cursor-pointer rounded-full border-black border-2 p-1"
                        />
                      </div>
                    </div>
                    <div className="pt-6">
                      <p>
                        We're here to help as you begin your faith journey
                        following jesus.
                      </p>
                    </div>
                    <div>
                      <div class="">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-4 py-2  rounded-full focus:outline-none nav focus:shadow-outline border-2 border-black"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-3 py-2 rounded-full nav focus:outline-none focus:shadow-outline border-2 border-black"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="my-4">
                          <textarea
                            placeholder="Message"
                            class="w-full h-44 bg-gray-100 text-gray-900 nav py-4 px-3 rounded-3xl focus:outline-none focus:shadow-outline border-2 border-black"
                          ></textarea>
                        </div>
                        <div class="flex justify-between items-center">
                          <label class=" block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm nav">
                              I accept Soul Church's privacy policy
                            </span>
                          </label>
                          <button
                            class="uppercase text-sm font-bold tracking-wide bg-black text-white hover:bg-white hover:text-black border border-black p-3 rounded-full px-6
                      focus:outline-none focus:shadow-outline"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/***prayer */}
              <AnimatePresence>
                {prayer && (
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.4, type: "tween" }}
                    exit={{ x: 38, transition: { duration: 0.4 } }}
                    className="absolute w-[590px] px-8 py-16 -ml-24 rounded-3xl h-[550px] bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="nav font-bold text-3xl">Prayer</h1>
                      <div className="flex gap-4">
                        <GrMail
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <FaCopy
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <AiOutlineArrowRight
                          onClick={() => setPrayer(!prayer)}
                          size={40}
                          className="bg-white cursor-pointer rounded-full border-black border-2 p-1"
                        />
                      </div>
                    </div>
                    <div className="pt-6">
                      <p>
                        Let us know your prayer request and our prayer team will
                        be praying with you.
                      </p>
                    </div>
                    <div>
                      <div class="">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-4 py-2  rounded-full focus:outline-none nav focus:shadow-outline border-2 border-black"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-3 py-2 rounded-full nav focus:outline-none focus:shadow-outline border-2 border-black"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="my-4">
                          <textarea
                            placeholder="Message"
                            class="w-full h-44 bg-gray-100 text-gray-900 nav py-4 px-3 rounded-3xl focus:outline-none focus:shadow-outline border-2 border-black"
                          ></textarea>
                        </div>
                        <div class="flex justify-between items-center">
                          <label class=" block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm nav">
                              I accept Soul Church's privacy policy
                            </span>
                          </label>
                          <button
                            class="uppercase text-sm font-bold tracking-wide bg-black text-white hover:bg-white hover:text-black border border-black p-3 rounded-full px-6
                      focus:outline-none focus:shadow-outline"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/**Praise */}
              <AnimatePresence>
                {" "}
                {praise && (
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.4, type: "tween" }}
                    exit={{ x: 38, transition: { duration: 0.4 } }}
                    className="absolute w-[590px] px-8 py-16 -ml-24 rounded-3xl h-[550px] bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="nav font-bold text-3xl">Praise</h1>
                      <div className="flex gap-4">
                        <GrMail
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <FaCopy
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <AiOutlineArrowRight
                          onClick={() => setPraise(!praise)}
                          size={40}
                          className="bg-white cursor-pointer rounded-full border-black border-2 p-1"
                        />
                      </div>
                    </div>
                    <div className="pt-6">
                      <p>
                        Share your praise reports here so we as a church can
                        celebrate with you.
                      </p>
                    </div>
                    <div>
                      <div class="">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-4 py-2  rounded-full focus:outline-none nav focus:shadow-outline border-2 border-black"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-3 py-2 rounded-full nav focus:outline-none focus:shadow-outline border-2 border-black"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="my-4">
                          <textarea
                            placeholder="Message"
                            class="w-full h-44 bg-gray-100 text-gray-900 nav py-4 px-3 rounded-3xl focus:outline-none focus:shadow-outline border-2 border-black"
                          ></textarea>
                        </div>
                        <div class="flex justify-between items-center">
                          <label class=" block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm nav">
                              I accept Soul Church's privacy policy
                            </span>
                          </label>
                          <button
                            class="uppercase text-sm font-bold tracking-wide bg-black text-white hover:bg-white hover:text-black border border-black p-3 rounded-full px-6
                      focus:outline-none focus:shadow-outline"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/**general */}
              <AnimatePresence>
                {" "}
                {general && (
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.4, type: "tween" }}
                    exit={{ x: 38, transition: { duration: 0.4 } }}
                    className="absolute w-[590px] px-8 py-16 -ml-24 rounded-3xl h-[550px] bg-white"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="nav font-bold text-3xl">
                        General Enquiry
                      </h1>
                      <div className="flex gap-4">
                        <GrMail
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <FaCopy
                          size={40}
                          className="bg-white rounded-full border-black border-2 p-1"
                        />
                        <AiOutlineArrowRight
                          onClick={() => setGeneral(!general)}
                          size={40}
                          className="bg-white cursor-pointer rounded-full border-black border-2 p-1"
                        />
                      </div>
                    </div>
                    <div className="pt-6">
                      <p>
                        This is a general enquiries form and our team will get
                        back to you within 48 hours.
                      </p>
                    </div>
                    <div>
                      <div class="">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-4 py-2  rounded-full focus:outline-none nav focus:shadow-outline border-2 border-black"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            class="w-full bg-gray-100 text-gray-900 mt-4 px-3 py-2 rounded-full nav focus:outline-none focus:shadow-outline border-2 border-black"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="my-4">
                          <textarea
                            placeholder="Message"
                            class="w-full h-44 bg-gray-100 text-gray-900 nav py-4 px-3 rounded-3xl focus:outline-none focus:shadow-outline border-2 border-black"
                          ></textarea>
                        </div>
                        <div class="flex justify-between items-center">
                          <label class=" block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox" />
                            <span class="text-sm nav">
                              I accept Soul Church's privacy policy
                            </span>
                          </label>
                          <button
                            class="uppercase text-sm font-bold tracking-wide bg-black text-white hover:bg-white hover:text-black border border-black p-3 rounded-full px-6
                      focus:outline-none focus:shadow-outline"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
