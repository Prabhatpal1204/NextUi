"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
const navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-30 h-[60px] ">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center w-[92%] mt-2 mx-auto"
      >
        <div>
          <Image
            src="/images/logo.svg"
            width={60}
            height={20}
            alt={"logo"}
            className="mt-2"
          />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                Emotions
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Manifesto
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Self-awareness test
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Work With US
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Button size="sm">Download App</Button>
        </div>
      </motion.nav>
    </div>
  );
};

export default navbar;
