"use client";
import React from "react";
import { motion } from "framer-motion";

// import Image from "next/image";
const secondmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mx-auto mb-10 bg-[#ffefe5] rounded-[30px]  ">
      <motion.div
        initial={{
          background: "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        whileInView={{
          background: "url('/mainbgSec.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="w-full bg-contain bg-no-repeat h-full flex flex-col justify-center items-center"
      >
        <div className=" ml-[280px]">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            Built out of frustration
          </motion.h2>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 font-mono font-bold text-6xl max-w-[10em]  "
          >
            Meet the ahead app
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-[400px] ml-24"
          >
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
          </motion.p>
          <br />
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="w-[400px] ml-24"
          >
            Think of its as a packet cheerleader towards a better, more
            fulfilling
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default secondmain;
