import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar1 = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="w-[100%] absolute h-[100vh] overflow-hidden">
      <div className="absolute z-50 w-[100%]">
        <div className="container flex   mx-auto py-10 justify-between ">
          <div className="logo uppercase  w-[250px]   font-bold  lg:text-2xl text-white">
            {!menu && (
              <Link
                to="/"
                className=" bg-white text-black w-24 h-24 rounded-full flex justify-center items-center"
              >
                logo
              </Link>
            )}
          </div>

          <div className="flex justify-center items-center gap-16 ">
            <div
              className="bg-white  hover:bg-blue-400 duration-300 relative
          py-auto rounded-full "
            >
              <AnimatePresence>
                {menu && (
                  <div className=" overflow-hidden ">
                    <motion.div
                      initial={{ scale: 0, color: "#EFF2C0" }}
                      animate={{ scale: 100, color: "#CFBDA0" }}
                      transition={{ duration: 2 }}
                      exit={{ scale: 1, transition: { duration: 2 } }}
                      className="h-16 w-40 z-30 absolute container mx-auto bg-[#CFBDA0]  rounded-full"
                    ></motion.div>
                  </div>
                )}
              </AnimatePresence>
              <div className="flex justify-center z-50 items-center px-6 py-2">
                <h1 className="mr-4 z-50 uppercase">Menu</h1>
                <Hamburger
                  onToggle={showMenu}
                  duration={0.8}
                  size={24}
                  distance="lg"
                />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div className="w-[100%] -mt-24  bg-red-500   flex z-40 absolute">
              <motion.div
                transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
                className=" w-[60%] "
              >
                {/*  <img className="opacity-80" src={bgimg} alt="" /> */}
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1,
                  }}
                  className="   text-8xl text-black font-bold"
                >
                  <Link to="/">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link to="/work">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      Giving
                    </motion.li>
                  </Link>
                  <Link to="services">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      Connect
                    </motion.li>
                  </Link>
                  <Link to="/contact">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      About us
                    </motion.li>
                  </Link>
                  <Link to="about">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      Church life
                    </motion.li>
                  </Link>
                  <Link to="about">
                    <motion.li
                      initial={{ y: 75, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      exit={{ y: -75, opacity: 0 }}
                      className=""
                    >
                      Plan your visit
                    </motion.li>
                  </Link>
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
                exit={{ opacity: 0 }}
                className="w-[40%] flex justify-center items-center "
              >
                <div className="flex md:block">
                  <div className="md:py-6 mr-5">
                    <h1 className="uppercase md:py-2">New Business</h1>
                    <p className="text-sm md:text-xl md:font-bold">
                      +919445521578
                    </p>
                    <p className="text-sm md:text-xl md:font-bold">
                      ligiotec@gmail.com
                    </p>
                  </div>
                  <div>
                    <h1 className="uppercase md:py-2">Our Office</h1>
                    <p className="text-sm md:text-xl md:font-bold">
                      {" "}
                      no:23 street salem
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar1;
