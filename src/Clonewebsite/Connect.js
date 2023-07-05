import React, { useEffect, useRef, useState } from "react";
import background1 from "./assets/hug.jpg";
import contentbg from "./assets/contentbg.jpg";
import { motion } from "framer-motion";
import one from "./assets/pexels-rfstudio-3810792.jpg";
import two from "./assets/contentbg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Connect = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const para = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const pa = para.current;
    gsap.to(element, {
      y: 300,
      scale: 0.8,

      scrollTrigger: {
        trigger: element,
        start: "center 20%",
        end: "80% top",
        /*    markers: true, */
        scrub: 4,
      },
    });

    gsap.to(pa, {
      scale: 1.1,
      y: -100,

      scrollTrigger: {
        trigger: pa,
        start: "80% center",
        end: "80% top",
        /*  markers: true,  */
        scrub: 4,
      },
    });
  }, []);
  return (
    <motion.div className=" lg:pb-[90vh] overflow-hidden ">
      {/**transition */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 2.9 }}
        className="fixed flex justify-center rounded-full bg-[#D1BFA4]  z-[70] items-center w-[100%] h-[100vh]"
      >
        <motion.div
          initial={{ scale: 100 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="relative bg-[#D1BFA4] w-[1000px] h-[1000px] rounded-full"
        ></motion.div>
        <div className=" w-[1000px] absolute  overflow-hidden">
          <motion.div
            initial={{ x: 130 }}
            animate={{ x: -1250 }}
            transition={{
              duration: 2,
              delay: 2,
              type: "spring",
              stiffness: 50,
            }}
            className=" py-10 px-4 text-center flex w-[2000px] justify-between"
          >
            <motion.h1 className=" head uppercase text-[150px] font-bold     ">
              Soul Church
            </motion.h1>
            <h1 className=" head uppercase text-[150px] font-bold   ">
              Connect
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/**main */}
      <div className="bg-[#C6C5B9] w-[100%] relative z-10 ">
        <div className="bg-[#C6C5B9] rounded-b-[100px] ">
          {/**image */}

          <div ref={para} className="relative  ">
            <div className="relative ">
              <motion.div className="absolute z-10  flex justify-center items-end  squad  w-[100%] overflow-hidden h-[100vh]">
                <div
                  ref={ref}
                  className="uppercase head md:py-12 xl:py-0  text-white text-8xl lg:text-9xl xl:text-[200px]"
                >
                  Get Connected
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <img
                  className="rounded-b-[80px] lg:rounded-b-[150px]   h-[100vh] w-[100%]  object-cover"
                  src={background1}
                  alt=""
                />
              </motion.div>
            </div>
          </div>

          {/**content slide page */}
          <div className="w-[100%] relative  px-10 mx-auto flex ">
            <div className="w-1/2 flex justify-center items-center p-4 lg:p-16 xl:p-24">
              <div>
                <h1 className="text-5xl xl:text-7xl head font-light xl:font-semibold">
                  Life is better when you go through it together.
                </h1>
                <p className="pt-10 xl:pt-36 text-lg xl:text-2xl">
                  Be part of the SOUL family – join a group and team and get
                  connected today.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-[100vh] flex justify-center items-center ">
              <div className="">
                <img
                  className="xl:w-[500px] w-[400px] h-[400px] lg:h-[500px] xl:py-10 rounded-3xl xl:h-[100vh] object-cover"
                  src={contentbg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/**how we church */}
        <div className="bg-[#C6C5B9]   rounded-t-[80px] z-30">
          <div className="bg-[#333333] rounded-t-[80px] rounded-b-[80px]">
            <div className="w-[100%]  ">
              {/**heading */}
              <div className="p-8 lg:p-14">
                <h1 className="text-7xl lg:text-8xl xl:text-[110px] text-white font-bold">
                  New Here?
                </h1>
              </div>
              {/**slider */}
              <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="overflow-hidden dark:bg-transparent   "
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 5, left: -width }}
                  className="flex gap-6 dark:bg-transparent  p-6 lg:p-6  "
                >
                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] h-[22rem]  rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-10 text-black h-[22rem]  flex flex-col justify-evenly  py-2 xl:py-10">
                        <div>
                          <h2 className="font-semibold text-3xl ">SOUL PATH</h2>
                          <p className="text-base py-4  ">
                            Your chance to find out more about us, ask question
                            and meet key members of our team and leadership.
                          </p>
                        </div>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          SIGN UP
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] h-[22rem]   rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-10 text-black h-[22rem]  flex flex-col justify-evenly  py-2 xl:py-10">
                        <div>
                          <h2 className="font-semibold text-3xl ">Alpha</h2>
                          <p className="text-base py-4 ">
                            Who is jesus? Why read the Bible? why do bad things
                            happen to good people? Register your interest for
                            Alpha to ask the big question.
                          </p>
                        </div>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Enquire
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] h-[22rem]  rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-10 text-black h-[22rem]  flex flex-col justify-evenly  py-2 xl:py-10">
                        <div>
                          <h2 className="font-semibold text-3xl ">
                            Follow Jesus
                          </h2>
                          <p className="text-base py-4  ">
                            If you're a new Christian, this is for you.Our
                            seven-session course will help you learn and grow on
                            your faith journey.
                          </p>
                        </div>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Sign up
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[18rem] h-[22rem]   rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-10 text-black h-[22rem]  flex flex-col justify-evenly  py-2 xl:py-10">
                        <div>
                          <h2 className="font-semibold text-3xl ">
                            Bible resources
                          </h2>
                          <p className="text-base py-4   ">
                            Not sure where to start with the Bible?Find out more
                            about it here and dive right in!
                          </p>
                        </div>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Learn more
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/**button */}
              <div className="flex p-8 cursor-pointer">
                <AiOutlineArrowLeft className="text-5xl bg-white cursor-pointer p-2 mr-2 rounded-full  " />
                <AiOutlineArrowRight className="text-5xl bg-white cursor-pointer p-2 rounded-full  " />
              </div>
            </div>
          </div>
        </div>
        {/**Find a group*/}
        <div className="w-[100%] relative py-12 border-black border-b-4  px-10 mx-auto flex justify-center">
          <div className="w-1/2 z-10 flex justify-center items-center p-24">
            <div>
              <h1 className="text-9xl head uppercase font-semibold">
                Find A group
              </h1>
              <p className="text-base py-4 ">
                Whether you’re into sewing or cycling, curry or creative,
                there’s a group here for you. We have special interests, Bible
                study, social groups and more.
              </p>
              <button className="mt-6 px-16 py-4 bg-black hover:bg-white uppercase font-semibold border-2 border-black text-white hover:text-black duration-300 rounded-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[100vh] relative  flex justify-center items-center ">
            <img
              className=" w-[200px] -mt-80 ml-24 -rotate-45 absolute  h-[250px] lg:h-[300px] object-cover"
              src={contentbg}
              alt=""
            />
            <img
              className=" w-[200px] ml-24 z-10 -rotate-12 absolute  h-[250px] lg:h-[300px] object-cover"
              src={one}
              alt=""
            />
            <img
              className=" w-[200px] mt-52 mr-72 absolute  h-[250px] lg:h-[300px] object-cover"
              src={two}
              alt=""
            />
          </div>
        </div>
        {/**Find a team */}
        <div className="w-[100%] relative  px-10  flex ">
          <div className="w-1/2 flex justify-start items-center    ">
            <div>
              <div className="lg:px-24 lg:py-40">
                <img
                  className="w-[280px]  h-[300px] object-cover"
                  src={contentbg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 ml-36 flex justify-center py-44 ">
            <h1 className="text-9xl head uppercase font-semibold">
              Find A team
            </h1>
          </div>
        </div>
        {/**find a team 2 */}
        <div className="border-b-4 border-black pb-24">
          <div className="ml-10 lg:ml-24 flex ">
            <div className="w-[40%] flex ">
              <div>
                <p className="text-base lg:text-xl ">
                  {" "}
                  Serving on a team is the best way to meet people and put down
                  roots. Whether you’re into tech, photography, building
                  maintenance, admin or you’re a friendly face, we can help you
                  find your perfect fit!
                </p>
                <button className="mt-6   px-16 py-4 bg-black hover:bg-white uppercase font-semibold border-2 border-black text-white hover:text-black duration-300 rounded-full">
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-[60%] -mt-24 ml-28 lg:ml-10">
              <img
                className="lg:w-[280px] w-[200px] h-[300px] -rotate-12 lg:h-[400px] object-cover"
                src={contentbg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/**tab view footer */}
      {/**form */}
      <div className="flex bg-[#F1E4EB] border-b-2 border-black lg:hidden   px-10 py-16">
        <div>
          <h1 className="font-semibold uppercase xl:text-xl">Stay tuned</h1>
          <p className="flex-warp xl:text-lg">
            Sign up for our newsletter to find out more about what's happening
            at SOUL Chruch!
          </p>
        </div>
        <form class="w-full max-w-sm">
          <div class=" md:items-center ">
            <div class="w-full py-2">
              <input
                class="bg-white rounded-full appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="first name"
              />
            </div>
            <div class="w-full pb-2">
              <input
                class="bg-white rounded-full appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="sure name"
              />
            </div>
          </div>
          <div class="">
            <div class="w-full  mb-4">
              <input
                class="bg-white appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="email"
                placeholder="Email address"
              />
            </div>
          </div>
          <div class="r mb-4">
            <label class=" block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm">I accept Soul Church's privacy policy</span>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <button
                class="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/**tab footer */}
      <div className=" flex bg-[#F1E4EB] lg:hidden  justify-between px-16 py-24">
        <div className="">logo</div>
        <div className="w-[20%]">
          <h1 className="font-semibold xl:backdrop:text-base">CONTACT</h1>
          <p className="flex-warp xl:text-lg">
            Soul CHURCH 4 Mason Rd, NR6 6RF ‍info@soulchurch.com ‍01234 567890{" "}
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold uppercase xl:text-base">Link</h1>
          <ul className="flex-warp xl:text-lg">
            <li>connect</li>
            <li>HomePage</li>
            <li>About</li>
            <li>Giving</li>
            <li>Church Life</li>
            <li>Plan your visit</li>
            <li>New Build</li>
            <li>Policies</li>
            <li>Vacancies</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold uppercase xl:text-base">Media</h1>
          <ul className="flex-warp xl:text-lg">
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>

      {/**footer */}
      <div className="hidden lg:block z-0 py-auto fixed bottom-0 w-[100%] h-[100vh]  bg-[#F1E4EB]">
        <div className="lg:pt-16 xl:pt-24 flex justify-between  bg-[#F1E4EB]">
          <div className="xl:w-3/5 flex  justify-between xl:px-20 py-28">
            <div className="">logo</div>
            <div className="w-[20%]">
              <h1 className="font-semibold xl:backdrop:text-base">CONTACT</h1>
              <p className="flex-warp xl:text-lg">
                Soul CHURCH 4 Mason Rd, NR6 6RF ‍info@soulchurch.com ‍01234
                567890{" "}
              </p>
            </div>
            <div className="">
              <h1 className="font-semibold uppercase xl:text-base">Link</h1>
              <ul className="flex-warp xl:text-lg">
                <li>connect</li>
                <li>HomePage</li>
                <li>About</li>
                <li>Giving</li>
                <li>Church Life</li>
                <li>Plan your visit</li>
                <li>New Build</li>
                <li>Policies</li>
                <li>Vacancies</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-semibold uppercase xl:text-base">Media</h1>
              <ul className="flex-warp xl:text-lg">
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Podcast</li>
              </ul>
            </div>
          </div>
          <div className="xl:w-2/5 w-[40%]  xl:px-28 px-10 py-28">
            <h1 className="font-semibold uppercase xl:text-xl">Stay tuned</h1>
            <p className="flex-warp xl:text-lg">
              Sign up for our newsletter to find out more about what's happening
              at SOUL Chruch!
            </p>
            <form class="w-full max-w-sm">
              <div class=" md:items-center ">
                <div class="w-full py-2">
                  <input
                    class="bg-white rounded-full appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="first name"
                  />
                </div>
                <div class="w-full pb-2">
                  <input
                    class="bg-white rounded-full appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="sure name"
                  />
                </div>
              </div>
              <div class="">
                <div class="w-full  mb-4">
                  <input
                    class="bg-white appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div class="r mb-4">
                <label class=" block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">
                    I accept Soul Church's privacy policy
                  </span>
                </label>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                  <button
                    class="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
