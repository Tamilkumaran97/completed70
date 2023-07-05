import React, { useEffect, useState } from "react";
import Section1 from "./Section1";
import { motion } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3400);
  }, []);

  return (
    <div>
      {/*  {loading ? (
        <motion.div
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
              transition={{
                duration: 2,
                delay: 2,
                type: "spring",
                stiffness: 50,
              }}
              className=" py-10 px-4 text-center flex w-[2000px] justify-between"
            >
              <h1 className=" squad uppercase text-8xl    ">Soul Church</h1>
              <h1 className=" squad uppercase text-8xl   ">welcome Home</h1>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <Section1 />
      )} */}
      <Section1 />
    </div>
  );
};

export default Home;
