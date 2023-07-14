import React, { useEffect, useRef, useState } from "react";
import background1 from "./assets/christian.jpg";
import contentbg from "./assets/aboutus.jpg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const AboutUs = () => {
  const [width, setWidth] = useState(0);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const para = useRef(null);
  const zoom = useRef(null);
  const zoom1 = useRef(null);
  const fixed = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const pa = para.current;
    const el = zoom.current;
    const fix = fixed.current;
    const el1 = zoom1.current;
    gsap.to(element, {
      y: 300,
      scale: 0.8,

      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: "top top",

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
    gsap.to(fix, {
      scrollTrigger: {
        trigger: fix,
        start: "top top",
        end: "center top",
        /*       markers: true, */
        scrub: 4,
        pin: true,
      },
    });

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 6,
        duration: 10,
        scrollTrigger: {
          trigger: el1,
          start: "top top",
          end: "bottom top",
          /*  markers: true, */
          scrub: 2,
        },
      }
    );
  }, []);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className=" lg:pb-[90vh] overflow-hidden ">
      {/**transition */}
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
            className=" py-14 px-4 text-center w-[2000px]  flex justify-between"
          >
            <h1 className=" head uppercase w-[1000px] text-center  text-4xl  md:text-[80px] lg:text-[150px] font-bold   ">
              Soul Church
            </h1>
            <h1 className=" head uppercase w-[1000px] text-center   text-4xl  md:text-[80px] lg:text-[150px]  font-bold ">
              About us
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/**main */}
      <div className="bg-[#C6C5B9] w-[100%] relative z-10 ">
        <div className="bg-white rounded-b-3xl md:rounded-b-[50px] lg:rounded-b-[100px] ">
          {/**image */}
          <div ref={para} className="relative  ">
            <div className="relative ">
              <motion.div className="absolute z-10  flex justify-center items-end  squad  w-[100%] overflow-hidden h-[100vh]">
                <div
                  ref={ref}
                  className="head uppercase py-10 text-white text-5xl md:text-9xl lg:text-[150px]"
                >
                  About us
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <img
                  className="rounded-b-3xl md:rounded-b-[100px] lg:rounded-b-[150px]  h-[100vh] w-[100%]  object-cover"
                  src={background1}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          {/**content slide page */}
          <div className="w-[100%]  px-3  md:px-10 mx-auto md:flex ">
            <div className="md:w-1/2 p-2 lg:p-12 xl:p-24">
              <h1 className="text-5xl nav md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
                Our Pastors
              </h1>
              <p className="pt-5 md:pt-10 xl:pt-16 text-[15px] md:text-base xl:text-xl ">
                Jon and Chantel met at Bible College in Australia and married in
                2006, before moving to Cape Town, South Africa to serve the
                church there. They returned to Norwich, Jon’s childhood home, in
                2014 and launched SOUL Church. They have two beautiful children.
                <br />
                <br />
                “We’re passionate about loving God with all our heart, soul,
                strength, mind and loving our neighbour as ourselves. Whether
                you’re here for the first time or you call SOUL Church home, we
                pray you connect with God and discover the unique purpose He has
                for your life.”
              </p>
            </div>
            <div className="md:w-1/2 py-2 md:py-4 flex justify-center items-center ">
              <div className="">
                <img
                  className=" rounded-tl-full w-[600px] md:w-auto rounded-br-[1000px] md:rounded-br-[2000px] h-[300px] md:h-[500px] xl:h-[90vh]  object-cover"
                  src={contentbg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/**motion love with framer motion */}
        <div className=" z-30">
          <div className=" relative container mx-auto overflow-hidden w-[100%]  h-[150vh] px-10">
            <div ref={fixed} className="w-[100%] h-[100vh] ">
              <div
                ref={zoom1}
                className=" absolute w-[100%] h-[100vh] flex justify-center items-center"
              >
                <div
                  ref={zoom}
                  className="absolute h-[400px]  w-[400px] flex justify-center items-center border-[0.01px]  border-black/50 rounded-full"
                ></div>
                <h1 className="  text-black nav ">
                  OUR MISSION IS <br />
                  LOVE IN ACTION
                </h1>
              </div>
              <div className="head uppercase  w-[100%] h-[100vh]  flex justify-center items-center  absolute text-[50px] sm:text-[100px] md:text-[130px] lg:text-[130px] xl:text-[150px] font-extrabold">
                <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 2,
                    }}
                    className="md:ml-16 w-[100%]"
                  >
                    Love
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 2,
                    }}
                    className="w-[100%] flex justify-end "
                  >
                    <h1>In</h1>
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 2,
                    }}
                    className="w-[100%]  flex justify-evenly"
                  >
                    <div></div>
                    <h1> Action</h1>
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**how we church */}
        <div className="bg-white border-b-4 border-black  rounded-t-[80px] z-30">
          <div className="bg-[#333333] md:rounded-[80px] rounded-3xl">
            <div className="w-[100%] ">
              {/**heading */}
              <div className="p-10 lg:p-14">
                <h1 className="text-4xl nav md:text-7xl lg:text-8xl xl:text-[110px] lg:px-10 xl:px-0 text-white font-bold">
                  The Church that I see
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
                  dragConstraints={{ right: 8, left: -width }}
                  className="flex gap-6 dark:bg-transparent  p-4 xl:p-6  "
                >
                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-yellow-500 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[20rem] flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-pink-300 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className=" w-[20rem] flex justify-center items-center bg-green-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-yellow-500 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[20rem] flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-pink-300 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className=" w-[20rem]  flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-pink-300 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className=" w-[20rem] flex justify-center items-center bg-green-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-3xl bg-yellow-500 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[20rem]  flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className=" w-[20rem] flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="relative">
                    <motion.div className=" w-[20rem]  flex justify-center items-center bg-blue-400 rounded-3xl ">
                      <div className=" p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a Church that welcome everyone HOME into a warm,
                          loving, life giving community where you can belong you
                          believe
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[17rem]  flex justify-center items-center  rounded-xl bg-pink-300 ">
                      <div className="p-12 xl:py-20 xl:text-xl text-base py-">
                        <div>
                          I see a church that unashamedly proclaims JESUS Hope
                          of the World
                        </div>
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
          {/**infinity scroll */}
          <div className=" w-[100%] py-10 md:py-20 lg:py-36 flex justify-center overflow-hidden items-center ">
            <h1 className="scroll uppercase  w-[100%] whitespace-nowrap head text-4xl md:text-[7em] ">
              {" "}
              Outward focused - life giving - christ center - people empowering
              - Outward focused - life giving - christ center - people
              empowering
            </h1>
          </div>
        </div>
      </div>
      {/**tab view footer */}
      {/**form */}
      <div className="md:flex bg-[#F1E4EB] border-b-2 border-black lg:hidden px-5 py-10  md:px-10 md:py-16">
        <div>
          <h1 className="font-semibold uppercase text-sm md:text-xl">
            Stay tuned
          </h1>
          <p className="flex-warp   text-sm md:text-lg">
            Sign up for our newsletter to find out more about what's happening
            at SOUL Chruch!
          </p>
        </div>
        <form class="w-full max-w-sm py-2">
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
                class="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white px-4 py-1 md:py-2 md:px-4 rounded-full"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/**tab footer */}
      <div className=" md:flex bg-[#F1E4EB] lg:hidden  justify-between pl-6 py-16 md:pl-0 md:px-16 md:py-24">
        <div className="py-4">logo</div>
        <div className="md:w-[20%] w-[40%]   ">
          <h1 className="font-semibold   text-xs md:text-base ">CONTACT</h1>
          <p className="md:flex-warp py-4 md:text-lg">
            Soul CHURCH 4 Mason Rd, NR6 6RF ‍info@soulchurch.com ‍01234 567890{" "}
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold uppercase  text-xs md:text-base ">
            Link
          </h1>
          <ul className="flex-warp xl:text-lg py-4">
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
          <h1 className="font-semibold uppercase  text-xs md:text-base ">
            Media
          </h1>
          <ul className="flex-warp xl:text-lg py-4">
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
    </div>
  );
};

export default AboutUs;
