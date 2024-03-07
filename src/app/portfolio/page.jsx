"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: " Next.js Earser.io Clone",
    desc: "This Full stack project is a clone of Earser.io, built using Next.js framework. Earser.io is a web-based collaborative whiteboard tool that allows users to draw, write, and collaborate in real-time. This clone aims to replicate the core functionality of Earser.io, providing users with a platform to collaborate and share ideas seamlessly.",
    img: "/earser.png",
    link: "https://erasor-clone-xi.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next js movie app",
    desc: "This Full stack project is a Next.js application that leverages the TMDB API to display information about movies. Users can browse through a vast collection of movies, view details such as ratings, release dates, and summaries, and search for specific titles",
    img: "/movie.png",
    link: "https://mern-movie-app-delta.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React Xcrypto Application",
    desc: "The React Xcrypto Application is a cryptocurrency tracking tool built using React.js. It provides users with real-time information about various cryptocurrencies, including their prices, market caps, and trading volumes. With a user-friendly interface and up-to-date data, it's an essential tool for anyone interested in the cryptocurrency market.    ",
    img: "/Xcrypto.png",
    link: "https://crypto-project-iota.vercel.app/coins",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MERN - Doctor Appointment Application",
    desc: "The MERN - Doctor Appointment Application is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables users to schedule, manage, and cancel appointments with doctors. With its intuitive interface and seamless functionality, it simplifies the process of booking medical appointments for patients and healthcare providers alike .",
    img: "/doctor.png",
    link: "https://github.com/ft-prince/Doctor-Appointment-Application",
  },

  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "MERN - Blood Bank Application",
    desc: "The MERN - Blood Bank Application is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It serves as a platform for managing blood donation and distribution processes. With its intuitive interface and comprehensive features, it facilitates the coordination of blood donation drives, blood requests, and donor management, ultimately contributing to saving lives and improving healthcare outcomes.    ",
    img: "/Blood.png",
    link: "https://github.com/ft-prince/my-blood-bank",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-100 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[800px] xl:h-[500px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] ">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
