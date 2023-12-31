"use client";
import React from "react";
import { MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
const footer = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full h-[30vh] mt-10 flex flex-col gap-4 "
    >
      <hr className="border-2 " />

      <div className="flex flex-col items-center">
        <Image
          src="/images/logo.svg"
          height={60}
          width={60}
          alt={" "}
          className="mt-10"
        />

        <h1 className="font-mono text-3xl font-bold text-[#6341EF]">ahead</h1>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <MapPin size={24} />
        Amravati,India
        <Mail size={24} /> prabhat.pal1204@gmail.com
      </div>
    </motion.div>
  );
};

export default footer;
