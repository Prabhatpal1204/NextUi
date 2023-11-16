"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
const thirdmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mt-6 mx-auto bg-[#EEEBFE] rounded-[30px]">
      <div className="p-10">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=" text-center text-lg font-mono"
        >
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </motion.h3>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-play font-extrabold text-6xl p-10"
        >
          Ever wondered what others think of you?
        </motion.h1>
      </div>
      <div className=" w-[80%]  mx-auto flex justify-around items-center relative">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center items-center h-[150px] z-10"
        >
          <Image src="/num1.svg" height={50} width={50} alt={" "} />
          <p className="w-[250px]">Answer questions on your social skills</p>
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-col justify-center items-center h-[150px] z-10"
        >
          <Image src="/num2.svg" alt={" "} height={50} width={50} />
          <p className="w-[250px]">
            Let others anonymously answer the same question about you
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.6 }}
          className="flex flex-col justify-center items-center h-[150px] z-10"
        >
          <Image
            src="/num3.svg"
            alt={" "}
            height={50}
            width={50}
            className="pt-[25px]"
          />

          <p className="w-[250px]">
            Find out where you and others see things the same way - and where
            not!
          </p>
        </motion.div>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: "100%" }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
          transition={{ duration: 2 }}
          className=" w-[70%] mx-auto border-dashed border-2 border-[#F3A60F]  absolute top-[31%]"
        />
      </div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 2.1 }}
      >
        {" "}
        <Image
          src="/thinking.svg"
          height={250}
          width={250}
          alt={" "}
          className="ml-[40%] mt-4"
        />
      </motion.div>
    </div>
  );
};

export default thirdmain;
