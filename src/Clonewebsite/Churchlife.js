import React, { useEffect, useRef, } from "react";
import giving from "./assets/Church life.jpg";
import { motion } from "framer-motion";
import image from "./assets/pexels-rfstudio-3810792.jpg";
import image1 from "./assets/contentbg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

const Churchlife = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const para = useRef(null);

  const scale = useRef(null);
  const scale1 = useRef(null);
  const scale2 = useRef(null);
  const scale3 = useRef(null);
  const scale4 = useRef(null);
  const scale5 = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const pa = para.current;
    const sl = scale.current;
    const sl1 = scale1.current;
    const sl2 = scale2.current;
    const sl3 = scale3.current;
    const sl4 = scale4.current;
    const sl5 = scale5.current; 

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

    gsap.to(sl, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
        scrub: 4,
      },
    });
    gsap.to(sl1, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl1,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
        scrub: 4,
      },
    });
    gsap.to(sl2, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl2,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
        scrub: 4,
      },
    });
    gsap.to(sl3, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl3,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
        scrub: 4,
      },
    });
    gsap.to(sl4, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl4,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
        scrub: 4,
      },
    });
    gsap.to(sl5, {
      scale: 0.9,

      scrollTrigger: {
        trigger: sl5,
        start: "top 20%",
        end: "top top",
        /*  markers: true,   */
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
    <div className="lg:pb-[90vh] ">
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
         Church life
          </h1>
        </motion.div>
      </div>
    </motion.div>

      <div className="bg-[#F1E4EB] ">
        {/**first container */}
        <div className="z-10 relative  bg-[#F1E4EB] ">
          <div className="w-[100%] overflow-hidden">
            <div
              ref={para}
              className="w-[100%] overflow-hidden relative h-[100vh]"
            >
              <h1
                ref={ref}
                className="absolute head uppercase squad text-5xl md:text-9xl  lg:text-[190px] text-center w-[100%] bottom-2 text-white py-10"
              >
                Church life
              </h1>
              <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <img
                  className="object-cover rounded-b-3xl md:rounded-b-[100px] lg:rounded-b-[150px] w-[100%] h-[100vh]"
                  src={giving}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          {/**second container */}
          <div className="w-[100%] md:mt-24  flex justify-center items-center ">
            <div className="text-center px-16 ">
              <div className=" lg:px-52 xl:px-72 ">
                <h1 className="text-4xl md:text-5xl nav xl:text-6xl font-bold">Church life</h1>
                <p className="mt-8 text-base lg:text-xl xl:text-2xl">
                  There’s so much more to church than Sunday services. We’re a
                  family, a community, where people of all ages can find a home.
                  Read on to find out about some of the things that happen in
                  our church – on Sundays and during the week.
                </p>
              </div>
              <div className="flex-col-2  lg:px-10">
                <Link to="1" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    SOUL KIDS
                  </button>
                </Link>
                <Link to="2" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    SOUL YOUTH
                  </button>
                </Link>
                <Link to="3" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    SOUL YOUNG ADULT
                  </button>
                </Link>
                <Link to="4" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    SOUL NURSERY
                  </button>
                </Link>
                <Link to="5" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    CHAPEL
                  </button>
                </Link>
                <Link to="6" smooth={true} duration={1000}>
                  <button className="mt-12 lg:mt-20 text-sm md:text-lg  w-[260px] md:w-[300px] xl:w-[350px] mr-4 py-4 xl:py-6 hover:bg-black hover:text-white bg-white uppercase font-semibold border-2 border-black rounded-full">
                    WELL BEING WEDNESDAY
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/**third container */}

         

          <div className="relative w-[100%]  py-16 bg-[#F1E4EB] border-b-2 border-black">
            <div className="p-24"></div>
            <div className="">
              {/**1 sticky */}
              <div
                ref={scale}
                id="1"
                className="sticky w-[100%]  top-0 md:top-0 p-3 md:p-10 flex justify-center"
              >
                <div className="py-4 rounded-3xl w-[1100px] bg-[#BDB3B3] md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="text-4xl pt-4 nav font-bold ">
                      Give to <br />
                      SOUL Church
                    </h1>
                    <p className="py-8  md:pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12  ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**2 sticky */}
              <div
                id="2"
                ref={scale1}
                className="sticky w-[100%] top-0 md:top-4 p-3 md:p-10 flex justify-center"
              >
                <div className="py-4  rounded-3xl w-[1140px] bg-[#C6BEBE] md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="text-4xl pt-4 nav font-bold ">Our new home</h1>
                    <p className="py-8  md:pt-32 pb-4">
                      We’re building a home for the people of Norwich, where
                      everyone is welcome. It will be a valuable community asset
                      as well as the place we gather as a church. There will be
                      a nursery, soft play, a café, meeting rooms, our social
                      supermarket, sports facilities, and plenty more.
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12 ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={giving}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**3 sticky */}
              <div
                id="3"
                ref={scale2}
                className="sticky w-[100%] top-0 md:top-8 p-3 md:p-10 flex justify-center"
              >
                <div className="py-4  rounded-3xl w-[1180px] bg-[#D2CBCB]  md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="pt-4 nav text-4xl font-bold ">Soul Foundation</h1>
                    <p className="py-8  md:pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12 ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={image1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**4 sticky */}
              <div
                id="4"
                ref={scale3}
                className="sticky w-[100%] top-0 md:top-12 p-3 md:p-10 flex justify-center"
              >
                <div className="py-4  rounded-3xl w-[1220px] bg-[#BDB3B3] md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="pt-4 nav text-4xl font-bold ">
                      Give to <br />
                      SOUL Church
                    </h1>
                    <p className="py-8 m md:pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12 ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**5 sticky */}
              <div
                id="5"
                ref={scale4}
                className="sticky w-[100%] top-0 md:top-14 p-3 md:p-10 flex  justify-center"
              >
                <div className="py-4  rounded-3xl w-[1260px] bg-[#C6BEBE] md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="pt-4 nav text-4xl font-bold ">Our new home</h1>
                    <p className="py-8  md:pt-32 pb-4">
                      We’re building a home for the people of Norwich, where
                      everyone is welcome. It will be a valuable community asset
                      as well as the place we gather as a church. There will be
                      a nursery, soft play, a café, meeting rooms, our social
                      supermarket, sports facilities, and plenty more.
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12 ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={giving}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**6 sticky */}
              <div
                id="6"
                ref={scale5}
                className="sticky w-[100%] top-0 md:top-18 p-3 md:p-10 flex justify-center"
              >
                <div className="py-4  rounded-3xl w-[1300px] bg-[#D2CBCB]  md:flex  overflow-hidden ">
                  <div className="md:w-1/2 p-3 md:p-10">
                    <h1 className="pt-4 nav text-4xl font-bold ">Soul Foundation</h1>
                    <p className="py-8  md:pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-4 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="md:w-1/2 p-2 md:p-12 ">
                    <img
                      className="object-cover rounded-xl h-[250px] md:h-[400px] w-[900px]"
                      src={image1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/**tab view footer */}
      {/**form */}
      <div className="md:flex bg-[#F1E4EB] border-b-2 border-black lg:hidden px-5 py-10  md:px-10 md:py-16">
        <div>
          <h1 className="font-semibold uppercase text-sm md:text-xl">Stay tuned</h1>
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
          <h1 className="font-semibold uppercase  text-xs md:text-base ">Link</h1>
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
          <h1 className="font-semibold uppercase  text-xs md:text-base ">Media</h1>
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
    </div>
  );
};

export default Churchlife;
