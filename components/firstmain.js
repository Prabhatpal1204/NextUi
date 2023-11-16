"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
const firstmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mt-6 mx-auto bg-[#EEEBFE] rounded-[30px] flex justify-around items-center ">
      <div className="h-[500px] w-[650px] mt-[15%] my-auto ml-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <h3 className=" text-lg">Ahead App</h3>
          <h1 className=" font-mono font-bold text-6xl max-w-[10em] ">
            Master your Life by mastering emotions
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-7"
        >
          <Button className="mt-2">
            <Download className="mr-2 h-4 w-4" /> Download App
          </Button>
          <div className="flex mt-[-12px]">
            <Star color="#fcba03" fill="#fcba03" />
            <Star color="#fcba03" fill="#fcba03" />
            <Star color="#fcba03" fill="#fcba03" />
            <Star color="#fcba03" fill="#fcba03" />
            <Star color="#fcba03" fill="#fcba03" />
          </div>
          <h3 className="absolute text-lg mt-12 ml-44">100+ Downloads</h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image src="/mainBg.svg" width={700} height={700} alt={"logo"} />
      </motion.div>
    </div>
  );
};

export default firstmain;
