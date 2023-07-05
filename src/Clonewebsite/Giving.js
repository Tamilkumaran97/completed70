import React, { useEffect, useRef, useState } from "react";
import giving from "./assets/giving.mp4";
import { AnimatePresence, motion } from "framer-motion";
import image from "./assets/pexels-rfstudio-3810792.jpg";
import image1 from "./assets/contentbg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Giving = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(null);
  const [close, setClose] = useState(null);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const para = useRef(null);
  const scale = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const pa = para.current;
    const sl = scale.current;
    gsap.to(element, {
      y: 300,
      scale: 0.8,

      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        end: "top top",

        scrub: 3,
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
          className="relative bg-[#D1BFA4] w-[1000px] h-[1000px] rounded-full"
        ></motion.div>
        <div className=" w-[1000px] absolute  overflow-hidden">
          <motion.div
            initial={{ x: 130 }}
            animate={{ x: -1300 }}
            transition={{
              duration: 2,
              delay: 2,
              type: "spring",
              stiffness: 50,
            }}
            className=" py-10 px-4 text-center flex w-[2000px] justify-between"
          >
            <h1 className=" head uppercase text-[150px] font-bold    ">
              Soul Church
            </h1>
            <h1 className=" head uppercase text-[150px] font-bold   ">
              GIving
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-[#F1E4EB] ">
        {/**first container */}
        <div className="z-10 relative bg-[#F1E4EB] ">
          <div className="w-[100%]  overflow-hidden ">
            <div ref={para} className="w-[100vw] relative overflow-hidden ">
              <h1
                ref={ref}
                className="absolute font-extrabold text-9xl lg:text-[200px] text-center w-[100%] bottom-2 text-white"
              >
                GIVING
              </h1>
              {/*  <img
              className="object-cover rounded-b-[150px] w-[100%] h-[100vh]"
              src={giving}
              alt=""
            /> */}
              <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <video
                  className="rounded-b-[80px] lg:rounded-b-[150px]  h-[100vh] w-[100%]  object-cover"
                  src={giving}
                  autoPlay
                  muted
                  loop
                ></video>
              </motion.div>
            </div>
          </div>
          {/**second container */}
          <div className="w-[100%] border-b-4 border-black  flex justify-center items-center ">
            <div className="text-center p-16 xl:px-72  lg:p-48 lg:-mt-24">
              <h1 className="text-5xl nav  xl:text-6xl font-bold">
                Thank you for investing into the lives of others
              </h1>
              <p className="mt-8 text-lg xl:text-2xl">
                If you’d like to donate to SOUL Church, whether as a one-off or
                by setting up regular giving, you’re in the right place. We’re
                so thankful for your support – you’re part of something
                life-changing!
              </p>

              <button className="mt-20 px-24 py-5  bg-white uppercase font-semibold border-2 hover:bg-black hover:text-white duration-500  border-black rounded-full">
                Give online
              </button>
            </div>
          </div>
          {/**third container */}
          <div className="w-[100%] py-28 lg:py-32 border-b-4 border-black bg-[#F1E4EB]">
            <div className="flex px-4 lg:px-10">
              <div className="w-[40%]  text-[91px] lg:text-[80px] xl:text-[100px] font-bold  ">
                <div className=" lg:ml-28 head">
                  OTHER <p className="-mt-6 xl:-mt-10">WAYS</p>{" "}
                  <p className="-mt-6 xl:-mt-10">TO GIVE</p>{" "}
                </div>
              </div>
              <div className="w-[70%] px-10 lg:px-20 ">
                <div>
                  {/**first page */}
                  <div className=" border-b border-gray-500">
                    <div className="flex  items-center">
                      <motion.h1
                        onClick={() => setActive(!active)}
                        className="w-[100%] font-bold  py-10 flex justify-between items-center cursor-pointer text-gray-800 text-lg xl:text-xl"
                      >
                        UK Standing orders and bank transfers
                        <motion.div className=" w-6 h-[2px] relative bg-black">
                          <AnimatePresence>
                            {!active && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                exit={{
                                  opacity: 0,
                                  transition: { duration: 0.4 },
                                }}
                                className="w-6 h-[2px] rotate-90 absolute bg-black"
                              ></motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </motion.h1>
                    </div>
                    <AnimatePresence>
                      {active && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          exit={{ opacity: 0, transition: { duration: 0.4 } }}
                          className="pb-4  "
                        >
                          <p className="text-[17px]">
                            Setting up a standing order means there are no
                            transaction fees, it's easy to set up with your
                            bank, just use the account details provided and your
                            Giving Number [if applicable] as the reference.
                          </p>
                          <div className="mt-5">
                            <h1 className="font-bold text-gray-800 text-xl">
                              Banking detail
                            </h1>
                            <p className="text-[17px]">
                              ‍Account Name: SOUL Church Ltd <br /> Sort Code:
                              20-62-53
                              <br />
                              Account Number: 53967565 <br />
                              Iban:GB55BUKB20625353967565S
                              <p className="mt-5">
                                WIFTBIC: BUKBGB22 <br /> Reference: Your Giving
                                Number [if applicable]
                              </p>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/** second page */}
                  <div className=" border-b border-gray-500">
                    <h1
                      onClick={() => setOpen(!open)}
                      className="font-bold flex items-center py-8 justify-between cursor-pointer text-gray-800 text-lg xl:text-xl"
                    >
                      UK Gift Aid{" "}
                      <div className="ml-10 w-6 h-[2px] relative bg-black">
                        {!open && (
                          <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                        )}
                      </div>
                    </h1>
                    {open && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          Boost your donation by 25p of Gift Aid for every £1
                          you donate. If you are a UK taxpayer, you can register
                          for Gift Aid, please contact us via email with your
                          details below:
                        </p>
                        <button className="mt-20 px-16 py-4 bg-black hover:bg-white uppercase font-semibold border-2 border-black text-white hover:text-black duration-300 rounded-full">
                          Finace@SOULCHRUCH.com
                        </button>
                      </div>
                    )}
                  </div>
                  {/**third page */}
                  <div className=" border-b border-gray-500">
                    <h1
                      onClick={() => setClose(!close)}
                      className="font-bold cursor-pointer flex items-center justify-between text-gray-800 py-8 text-lg xl:text-xl"
                    >
                      US Donors
                      <div className="ml-10 w-6 h-[2px] relative bg-black">
                        {!close && (
                          <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                        )}
                      </div>
                    </h1>
                    {close && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          For a tax-efficient way to give, please click the
                          button below.
                        </p>
                        <button className="mt-20 px-16 py-4 bg-black hover:bg-white uppercase font-semibold border-2 border-black text-white hover:text-black duration-300 rounded-full">
                          Click Here
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**fourth container */}

          <div className="relative overflow-visible w-[100%] bg-[#F1E4EB] border-b-4 py-20 border-black">
            <div className="pl-10 lg:p-24">
              <h1 className="uppercase head  text-7xl lg:text-9xl squad">
                Give towards...
              </h1>
            </div>
            <div className="">
              {/**1 sticky */}
              <div
                ref={scale}
                className="lg:sticky w-[100%] h-[100vh] top-0 p-10 flex justify-center"
              >
                <div className="h-[500px] rounded-3xl w-[900px] bg-[#BDB3B3] flex  overflow-hidden ">
                  <div className="w-1/2 p-10">
                    <h1 className="text-4xl font-bold ">
                      Give to <br />
                      SOUL Church
                    </h1>
                    <p className="pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="w-1/2 p-12  ">
                    <img
                      className="object-cover rounded-xl h-[400px] w-[900px]"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**2 sticky */}
              <div className="lg:sticky w-[100%] h-[100vh] top-14 p-10 flex justify-center">
                <div className="h-[550px] rounded-3xl w-[860px] bg-[#C6BEBE] flex  overflow-hidden ">
                  <div className="w-1/2 p-10">
                    <h1 className="text-4xl font-bold ">Our new home</h1>
                    <p className="pt-32 pb-4">
                      We’re building a home for the people of Norwich, where
                      everyone is welcome. It will be a valuable community asset
                      as well as the place we gather as a church. There will be
                      a nursery, soft play, a café, meeting rooms, our social
                      supermarket, sports facilities, and plenty more.
                    </p>
                    <button className="px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="w-1/2 p-12  ">
                    <img
                      className="object-cover rounded-xl h-[400px] w-[900px]"
                      src={giving}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/**3 sticky */}
              <div className="lg:sticky w-[100%] h-[100vh] top-20 p-10 flex justify-center">
                <div className="h-[600px] rounded-3xl w-[910px] xl:w-[940px] bg-[#D2CBCB]  flex  overflow-hidden ">
                  <div className="w-1/2 p-10">
                    <h1 className="text-4xl font-bold ">Soul Foundation</h1>
                    <p className="pt-32 pb-4">
                      We love the people of our city and we aim to keep our
                      doors open at least five days a week. We have toddler
                      groups, wellbeing groups, friendship groups and study
                      groups among others. Church is so much more than a Sunday
                      service. Thanks for your support!
                    </p>
                    <button className="px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="w-1/2 p-12  ">
                    <img
                      className="object-cover rounded-xl h-[400px] w-[900px]"
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
                Sign up for our newsletter to find out more about what's
                happening at SOUL Chruch!
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

export default Giving;
