import React, { useEffect, useRef, useState } from "react";
import giving from "./assets/visit video.mp4";
import { motion } from "framer-motion";
import image from "./assets/pexels-rfstudio-3810792.jpg";
import image1 from "./assets/contentbg.jpg";
import contentbg from "./assets/aboutus.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PlanVisit = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(null);
  const [close, setClose] = useState(null);
  const [work, setWork] = useState(null);

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
  }, []);

  return (
    <div className="lg:pb-[90vh] overflow-hidden">
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
            animate={{ x: -1010 }}
            transition={{
              duration: 2,
              delay: 2,
              type: "spring",
              stiffness: 40,
            }}
            className=" py-10 px-4 text-center flex w-[2000px] justify-between"
          >
            <motion.h1 className="head uppercase text-[150px] font-bold    ">
              Soul Church
            </motion.h1>
            <h1 className="head uppercase text-[150px] font-bold   ">
              plan your visit
            </h1>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-[#F1E4EB]">
        {/**first container */}
        <div className="z-10 relative rounded-b-[100px] lg:rounded-b-[150px]  bg-white ">
          <div
            ref={para}
            className="w-[100%] overflow-hidden relative h-[100vh]"
          >
            <h1
              ref={ref}
              className="absolute head text-8xl lg:text-9xl lg:py-10 xl:py-8 xl:text-[180px] text-center w-[100%] bottom-2 uppercase text-white"
            >
              Welcome Home
            </h1>
            {/*   <img
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
                className="object-cover rounded-b-[100px] lg:rounded-b-[150px] w-[100%] h-[100vh]"
                src={giving}
                autoPlay
                loop
                muted
              ></video>
            </motion.div>
          </div>

          {/**second container */}
          <div className="w-[100%]  px-5 lg:px-10 mx-auto flex ">
            <div className="w-1/2 flex justify-center items-center lg:p-14 xl:p-24">
              <div>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-semibold">
                  What’s it like?
                </h1>
                <p className="pt-28 xl:pt-36 text-lg lg:text-xl xl:text-2xl">
                  Whoever you are and wherever you’re from, we want you to feel
                  at home from the moment you walk through the door. So here’s
                  some info on what you can expect when you join us at SOUL
                  Church.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-[100vh] flex justify-center items-center ">
              <div className="flex justify-center items-center">
                <img
                  className=" rounded-tl-full h-[500px] rounded-br-[2000px] object-contain"
                  src={contentbg}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/**third container */}
          <div className="w-[100%]  py-10 lg:py-32 bg-[#F1E4EB]">
            <div className="flex px-10">
              <div className="w-[40%]   text-[100px]   ">
                <div className="head lg:ml-10">FAQS</div>
              </div>
              <div className="w-[70%]  lg:px-20 ">
                <div>
                  {/**first page */}
                  <div className=" border-b border-gray-500">
                    <div className="flex  items-center">
                      <h1
                        onClick={() => setActive(!active)}
                        className="w-[100%] font-bold  py-10 flex justify-between items-center cursor-pointer text-gray-800 text-lg lg:text-xl"
                      >
                        what will happen my first time?
                        <div className=" w-6 h-[2px] relative bg-black">
                          {!active && (
                            <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                          )}
                        </div>
                      </h1>
                    </div>
                    {active && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          When you turn into Mason Road, our friendly Arrivals
                          Team will show you to a suitable parking space (Blue
                          badge parking available). When you come in to SOUL
                          Church, you'll see our cafe and a central atrium where
                          people can hang out and chat. From here, you can check
                          your kids in to their age groups and come into the
                          main auditorium for the service. Our Host Team will be
                          waiting to show you to your seat. Our services usually
                          last around 90 minutes, and include worship, prayer
                          and a message. We have a family room for those with
                          babies and toddlers and a private breastfeeding area.
                          You'll be able to watch the service on screen from
                          these rooms, so you won't miss anything.
                        </p>
                      </div>
                    )}
                  </div>
                  {/** second page */}
                  <div className=" border-b border-gray-500">
                    <h1
                      onClick={() => setOpen(!open)}
                      className="font-bold flex items-center py-8 justify-between cursor-pointer text-gray-800 text-lg lg:text-xl"
                    >
                      What to wear ?
                      <div className="ml-10 w-6 h-[2px] relative bg-black">
                        {!open && (
                          <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                        )}
                      </div>
                    </h1>
                    {open && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          Whatever you're comfortable in! With so many people,
                          it can get a bit warm, so layers are always a good
                          idea, but there's no dress code. Some people prefer to
                          come in their jeans or joggers, while others like to
                          dress more smartly. It really doesn't matter - we want
                          you to feel relaxed and at home.
                        </p>
                      </div>
                    )}
                  </div>
                  {/**third page */}
                  <div className=" border-b border-gray-500">
                    <h1
                      onClick={() => setClose(!close)}
                      className="font-bold cursor-pointer flex items-center justify-between text-gray-800 py-8 text-lg lg:text-xl"
                    >
                      What do you offer for family?
                      <div className="ml-10 w-6 h-[2px] relative bg-black">
                        {!close && (
                          <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                        )}
                      </div>
                    </h1>
                    {close && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          We cater for all ages here. If you have a baby in a
                          pram, we have an area of seating where we can take a
                          number of buggies and prams. It's next to our family
                          room, so if you need to pop out with your little one,
                          there's a place where they can play and you can feed
                          them and change nappies. We have a separate area for
                          breastfeeding if you prefer. Our kids' programme runs
                          throughout the service for those aged 3-11 and our
                          youth programme usually runs at the 9am and 11am
                          services for high school ages. SOUL Youth also runs on
                          Friday nights during term time, from 7-9pm.
                        </p>
                      </div>
                    )}
                  </div>
                  {/**fourth page */}
                  <div className=" border-b border-gray-500">
                    <h1
                      onClick={() => setWork(!work)}
                      className="font-bold cursor-pointer flex items-center justify-between text-gray-800 py-8 text-lg lg:text-xl"
                    >
                      What about my child's additional needs?
                      <div className="ml-10 w-6 h-[2px] relative bg-black">
                        {!work && (
                          <motion.div className="w-6 h-[2px] rotate-90 absolute bg-black"></motion.div>
                        )}
                      </div>
                    </h1>
                    {work && (
                      <div className="pb-4">
                        <p className="text-[17px]">
                          We do have loud music and flashing lights at our
                          services and we know this won't work for every child.
                          We have a dedicated sensory room for our SOUL
                          Champions, and we offer ear defenders to those who
                          might otherwise feel overwhelmed. Our kids' team are
                          experienced in dealing with children with additional
                          needs and we'll work with you to make sure your child
                          feels safe and settled in this new environment. If
                          you've got any questions, please drop us a line at
                          info@soulchurch.com.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**fourth container */}

          <div className="relative w-[100%] bg-[#F1E4EB] border-b-4 border-black">
            <div className="">
              <div className=" w-[100%]   p-10 flex justify-center">
                <div className=" rounded-3xl w-[1000px] bg-[#f5f0f0]  flex  overflow-hidden ">
                  <div className="w-1/2 p-10">
                    <h1 className="text-6xl font-bold ">
                      Accessibility and additional needs
                    </h1>
                    <p className="pt-32 pb-4">
                      We have accessible parking on site and all public areas of
                      the building are on the ground floor with no steps. We
                      have facilities for those with sensory issues too. And
                      there's a dedicated private breastfeeding room.
                    </p>
                    <button className="px-6 lg:px-8 py-2 bg-black text-white hover:bg-white hover:text-black uppercase duration-500 rounded-full border-2 border-black">
                      Learn more
                    </button>
                    <button className="px-6 ml-4 py-2 bg-white uppercase text-black hover:bg-black hover:text-white duration-500 rounded-full border-2 border-black">
                      give
                    </button>
                  </div>
                  <div className="w-1/2 p-12 flex justify-center items-center ">
                    <img
                      className="object-cover rounded-xl h-[400px] w-[900px]"
                      src={image1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="  bg-[#333333]">
              {/**infinity scroll */}
              <div className=" w-[100%] py-12 lg:py-28 xl:py-36 flex justify-center overflow-hidden items-center ">
                <h1 className="scroll uppercase text-white  w-[100%] whitespace-nowrap head text-[7em] ">
                  {" "}
                  Outward focused - life giving - christ center - people
                  empowering - Outward focused - life giving - christ center -
                  people empowering
                </h1>
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

export default PlanVisit;
