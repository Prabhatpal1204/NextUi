"use client";
import React from "react";
import { motion } from "framer-motion";
const verticalsection = () => {
  return (
    <div
      // initial="hidden"
      // whileInView="visible"
      // transition={{ duration: 0.6 }}
      className="w-[88%] h-[30vh] mx-auto flex items-center gap-4 justify-around"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" w-[250px] "
      >
        <h1 className=" font-bold font-mono text-4xl">EQ Beats IQ</h1>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-[300px] font-serif"
      >
        <p>
          People with high emotional intelligence(EQ) live more fulfilled lives.
          They tend to be happier and have healthier realtionships
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-[300px] mb-8 font-serif"
      >
        <p>
          They are more successful in their pursuit and make for inspiring
          leaders. According to science, they earn $29k a year
        </p>
      </motion.div>
    </div>
  );
};

export default verticalsection;
