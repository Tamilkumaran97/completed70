import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState();

  const showMenu = () => {
    setOpen(!open);
  };
  const [mini, setMini] = useState();

  const showMini = () => {
    setMini(!mini);
  };

  return (
    <div>
      <div className="fixed   w-[100%]   z-30">
        {/**relative */}
        <div className="z-50 relative  ">
          {/**logo */}
          <div className="absolute  flex justify-between px-10 pt-10 w-[100%] items-center ">
            <div
              className="w-24 h-24 bg-white rounded-full flex justify-center
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

              <div className=" flex bg-white w-36 h-16 z-[70] justify-center items-center rounded-full ">
                <div className="text-sm pr-2  z-[70]  overflow-hidden  font-semibold">
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
                  <Hamburger onToggle={showMenu} size={24} />
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <div>
                <div className="absolute  w-[100%]  z-50">
                  <div className="    ">
                    <div className="flex  justify-between ">
                      {/**first container */}
                      <div className="cursor-pointer nav lg:font-semibold xl:font-normal pl-10   h-[90vh] flex justify-center items-center  text-[60px] xl:text-8xl ">
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
                                  <a href="/"> Home</a>
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
                                  <a href="/giving">Giving</a>
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
                                  <a href="/connect">Connect</a>
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
                                  <a href="/about"> About us</a>
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
                                  <a href="/life"> Church in life</a>
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
                                  <a href="/plan">Plan your visit</a>
                                </motion.h1>
                              </motion.div>
                            </motion.div>
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
                        className="h-auto md:hidden lg:block border-black  border-r-4 bg-black"
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
                        className=" h-[90vh] md:hidden flex justify-center items-center text-lg xl:text-xl"
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
                    className="relative  md:hidden lg:block  w-[100%] border-black z-50 border-t-4 bg-black "
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
        className="fixed bottom-0 w-[100%] hidden lg:block overflow-hidden z-30"
      >
        <div className="container mx-auto">
          <div className=" h-12 rounded-xl px-6 py-5 flex justify-between items-center bg-white ">
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
            <div onClick={showMini} className="cursor-pointer  relative">
              <p className="rounded-full z-40 bg-black w-9 h-9 flex justify-center items-center">
                <div className="">
                  <AiOutlineMessage size={24} color="white" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {mini && (
        <div className="fixed w-[100%] h-[100vh] bg-black/40 z-20">
          <div className="absolute w-[600px] rounded-xl h-[520px] bottom-0 right-8 bg-gray-300">
            <div className="bg-white w-[520px] h-[520px] rounded-xl"></div>
          </div>
        </div>
      )}

      {/**bottom transition */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-0 w-[100%]  overflow-hidden z-30"
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
                  <p>hello </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

<div className="  w-[100%] bg-red-500 z-40">
  <div className="flex w-[100%] h-[100vh]">
    {/**first container */}
    <div className="w-[70%] p-10 text-8xl font-semibold">
      <h1>Home</h1>
      <h1>Giving</h1>
      <h1>Connect</h1>
      <h1>About us</h1>
      <h1>Church life</h1>
      <h1>Plan your visit</h1>
    </div>
    {/**second container */}
    <div className="w-[30%]">
      <div>
        <h1>Address</h1>
        <p>SOUL CHURCH 4 Mason Rd, NR6 6RF</p>
        <h1>Email:</h1>
        <p>info@soulchutch.com</p>
        <h1>call:</h1>
        <p>016034888880</p>
      </div>
      <div>
        <h1>Youtube</h1>
        <h1>Twitter</h1>
        <h1>Facebook</h1>
        <h1>instagram</h1>
      </div>
    </div>
  </div>
</div>;
