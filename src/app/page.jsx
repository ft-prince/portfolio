"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-5 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-24">
          <Image src="/Prince.png" alt="Portrait of Prince" fill className="object-contain" />
          
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Igniting Digital Adventures: Crafting Tomorrow's Experiences
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Welcome to the realm of digital exploration! I'm a passionate developer on a quest to push boundaries and craft unforgettable experiences. Dive into my portfolio to discover a world where imagination knows no bounds and every project is an exciting journey into the future. Let's shape tomorrow's digital landscape together with ingenuity and flair!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
