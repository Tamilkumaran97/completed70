import React, { useEffect, useRef, useState } from "react";
import background1 from "./assets/bg1.jpg";
import contentbg from "./assets/aboutus.jpg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Section1 = () => {
  const [width, setWidth] = useState(0);

  const ref = useRef(null);
  const zoom = useRef(null);
  const fixed = useRef(null);
  const para = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const el = zoom.current;
    const fix = fixed.current;
    const pa = para.current;

    gsap.to(pa, {
      scale: 1.1,
      y: -100,

      scrollTrigger: {
        trigger: pa,
        start: "80% center",
        end: "80% top",
        /*   markers: true, */
        scrub: 4,
      },
    });

    gsap.to(element, {
      y: 300,
      scale: 0.7,

      color: "#302D21",

      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: "top top",
        /*      markers: true,  */
        scrub: 4,
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
          trigger: element,
          start: "bottom+=640 top",
          end: "+=250",
        /*   markers: true, */
          scrub: 4,
        },
      }
    );

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
  }, []);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  let box = document.querySelector(".product");

  const btNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

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
          className="relative bg-[#D1BFA4] w-[1000px] h-[1000px] rounded-full"
        ></motion.div>
        <div className=" w-[1000px] absolute  overflow-hidden">
          <motion.div
            initial={{ x: 130 }}
            animate={{ x: -1010 }}
            transition={{
              duration: 2,
              delay: 2,
              type: "spring",
              stiffness: 50,
            }}
            className=" py-10 px-4 text-center flex w-[2000px] justify-between"
          >
            <h1 className=" head uppercase text-[150px] font-bold   ">
              Soul Church
            </h1>
            <h1 className=" head uppercase text-[150px]  font-bold ">
              welcome Home
            </h1>
          </motion.div>
        </div>
      </motion.div>
      {/**main */}
      <div className="bg-[#C6C5B9]  w-[100%] relative z-10 ">
        <div className="bg-white rounded-b-[100px] ">
          {/**image */}

          <div ref={para} className="relative  ">
            <div className="relative ">
              <motion.div className="absolute  flex flex-col justify-center  items-center   w-[100%]  overflow-hidden h-[100vh]  ">
                <motion.div
                  ref={ref}
                  className="w-[100%] lg:w-[80vw]  lg:px-10 mt-[50vh] lg:mt-[50vh] cursor-grab bg-[#ECDDD5] rounded-3xl "
                >
                  <Slider {...settings} className="">
                    <div className=" p-10  lg:p-5 xl:p-10  w-[100%]  lg:w-[70vw] ">
                      <h1 className="uppercase text-sm pb-4">What's on</h1>
                      <h1 className="text-3xl head font-light pb-2">
                        FOLLOW JESUS
                      </h1>
                      <div className=" lg:flex justify-between items-center ">
                        <p className="text-sm w-[70%] py-4">
                          Our 7-week discipleship course is back - if you are
                          new to faith, this is for you! Starting 21st may
                        </p>
                        <div className="py-4">
                          <button className=" px-6 lg:ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                            SIGN UP
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-10  lg:p-5 xl:p-10  w-[100%]  lg:w-[70vw]">
                      <h1 className="uppercase text-sm pb-4">What's on</h1>
                      <h1 className="text-3xl uppercase head font-light  pb-2">
                        MIracles in may fundraiser kit
                      </h1>
                      <div className="lg:flex justify-between items-center ">
                        <p className="w-[70%] text-sm py-4">
                          Looking for ways to get involved with the Miracles in
                          May fundraiser? get all the information in our handy
                          guide
                        </p>
                        <div className="py-4">
                          <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                            GIVE THE GUIDE
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className=" p-10  lg:p-5 xl:p-10  w-[100%]  lg:w-[70vw]">
                      <h1 className="uppercase text-sm pb-4">What's on</h1>
                      <h1 className="text-3xl head font-light pb-">
                        OPEN HOME 23
                      </h1>
                      <div className="lg:flex justify-between items-center ">
                        <p className="w-[70%] text-sm py-4">
                          This is an opportunity for us as SOUL Church to o open
                          our home to other churches, to inspire and equip
                          leaders and pastors to see their churches grow and
                          flourish
                        </p>
                        <div className="py-4">
                          <button className=" px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                            REGISTER HERE
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className=" p-10  lg:p-5 xl:p-10  w-[100%]  lg:w-[70vw]">
                      <h1 className="uppercase text-sm pb-4">What's on</h1>
                      <h1 className="text-3xl head font-light pb-2">
                        MIRACLES IN MAY
                      </h1>
                      <div className="lg:flex lg:py-0 justify-between items-center ">
                        <p className="w-[70%] text-sm  py-4">
                          Get involved with our fundraising month in may for our
                          new building.
                        </p>
                        <div className="py-4">
                          <button className=" px-6 ml py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2  border-black">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <img
                  className="rounded-b-[150px]  h-[100vh] w-[100%]  object-cover"
                  src={background1}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          {/**content slide page */}
          <div className="w-[100%] py-4 md:py-10 block lg:py-0 px-4 md:px-10 mx-auto md:flex ">
            <div className="md:w-1/2 flex justify-center items-center xl:p-24">
              <div>
                <motion.h1
                  initial={{ x: 400, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" text-[38px] md:text-5xl lg:text-7xl xl:text-8xl font-semibold"
                >
                  Welcome Home
                </motion.h1>
                <motion.p
                  initial={{ x: 400, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="md:pt-20 xl:pt-36 md:text-lg lg:text-xl xl:text-2xl"
                >
                  SOUL Church is a vibrant and friendly church in the beautiful
                  city of Norwich. We love Jesus and we love people. We'd love
                  to see you here soon!
                </motion.p>
              </div>
            </div>
            <div className="md:w-1/2 py-6 md:py-10 flex justify-center items-center ">
              <div className="">
                <img
                  className="rounded-bl-[2000px] rounded-tl-full md:h-[300px] lg:h-[500px] xl:h-[600px] w-[600px] rounded-br-[2000px] object-cover"
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
            <div ref={fixed} className="w-[100%] h-[100vh]">
              <div className=" absolute w-[100%] h-[100vh] flex justify-center items-center">
                <div
                  ref={zoom}
                  className="absolute h-[400px] w-[400px] flex justify-center items-center border-[0.01px]  border-black/50 rounded-full"
                ></div>
                <h1 className="   ">
                  OUR MISSION IS <br />
                  LOVE IN ACTION
                </h1>
              </div>
              <div className="head uppercase  w-[100%] h-[100vh] flex flex-col justify-between  absolute text-[50px] md:text-[130px] lg:text-[130px] xl:text-[150px] font-extrabold">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="md:ml-16"
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
                  className="w-[100%] flex justify-evenly"
                >
                  <div></div>
                  <h1> Action</h1>
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
        {/**how we church */}
        <div className="bg-white border-b-2 border-black   rounded-t-[80px] z-30">
          <div className="bg-[#333333]  rounded-t-[80px] rounded-b-[80px]">
            <div className="w-[100%]  ">
              {/**heading */}
              <div className="pt-20 pl-8  lg:p-14  xl:p-14">
                <h1 className="text-6xl lg:text-[90px] xl:text-[110px] lg:text-center text-white font-bold">
                  How we do church
                </h1>
              </div>
              {/**slider */}
              <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className=" dark:bg-transparent   "
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="product flex gap-6  dark:bg-transparent  p-6 lg:p-6  "
                >
                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem]  rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">Services</h2>
                        <p className="text-   ">
                          With accessible parking, a SEN room and more ,
                          everyone is welcome.Click below to find what to expect
                          when you visit us.
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Learn more
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-3xl bg-white hover:bg-blue-400 ">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">Connect</h2>
                        <p className=" ">
                          We're big on friendship and community, so we run lots
                          of groups where you can connect with like-minded
                          people.
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Learn more
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-3xl bg-white hover:bg-blue-400">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">
                          Pastoral Care
                        </h2>
                        <p className=" ">
                          Looking for prayer support? Our pastoral care team is
                          on hand to pray with you Submit your prayer request
                          here.
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          EMAIL US
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-3xl bg-white hover:bg-blue-400">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">Grow</h2>
                        <p className=" ">
                          We love our amazing Dream Team! There are so many
                          opportunities at SOUL for volunteers - and its a great
                          way to meet people too.
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Learn more
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className="w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-3xl bg-white hover:bg-blue-400">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">Generation</h2>
                        <p className="text-  ">
                          From tots to teens and beyond, we have groups for
                          every age. You're never too young or too old to be
                          part of SOUL Church!
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          Learn more
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div className=" w-[18rem] xl:w-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-3xl bg-white hover:bg-blue-400">
                      <div className="p-5 xl:p-10 text-gray-700 flex flex-col justify-evenly h-[22rem] xl:h-[24rem] xl:py-10">
                        <h2 className="font-semibold text-4xl ">Foundation</h2>
                        <p className="text-   ">
                          SOUL Foundation is our outreach arm ,meeting the needs
                          of the people in Norwich and showing them jesus love.
                        </p>
                        <button className=" px-10 py-4 bg-white hover:bg-black uppercase font-semibold border-2 border-black text-black hover:text-white duration-300 rounded-full">
                          GET INVOLVED
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/**button */}
              <div className="flex p-8 cursor-pointer">
                <AiOutlineArrowLeft
                  onClick={btNext}
                  className="text-5xl bg-white cursor-pointer p-2 mr-2 rounded-full  "
                />
                <AiOutlineArrowRight
                  onClick={btPrev}
                  className="text-5xl bg-white cursor-pointer p-2 rounded-full  "
                />
              </div>
            </div>
          </div>
          {/**infinity scroll */}
          <div className=" w-[100%] py-16 lg:py-36 flex justify-center overflow-hidden items-center ">
            <h1 className="scroll uppercase  w-[100%] whitespace-nowrap head md:text-[5em]  lg:text-[6em] xl:text-[7em] ">
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
    </div>
  );
};

export default Section1;
