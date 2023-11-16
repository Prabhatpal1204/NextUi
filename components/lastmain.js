"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion, stagger } from "framer-motion";
const lastmain = () => {
  const details = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 60-80k€",
        "Start date: ASAP",
      ],
    },
    {
      id: 2,
      title: "Senior Designer",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 90-100k€",
        "Start date: ASAP",
      ],
    },
    {
      id: 3,
      title: "Senior Product Manager",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 120-130k€",
        "Start date: ASAP",
      ],
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  return (
    <div className="w-[90%] h-[48vh] mx-auto mt-14 mb-10">
      <motion.h1
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className=" text-6xl font-sans font-bold ml-10 mb-10"
      >
        Open vacancies ...{" "}
      </motion.h1>
      <br />
      <div className=" mt-6 flex justify-around  gap-6 ">
        {details.map((detail, i) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: i * 0.4 }}
            viewport={{ once: true }}
            className="group w-[350px] h-[200px] ease-in-out duration-500 bg-[#ffefe5] rounded-[20px] hover:h-[250px]"
          >
            <div className="p-10">
              <div className="card-body">
                <h5 className="text-lg font-semibold ">{detail.title}</h5>
                <ul className=" list-disc ml-6 mt-2">
                  {detail.points.map((point) => (
                    <li
                      key={details.id}
                      className=" font-bullet font-extralight"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className=" mt-4 ml-2 opacity-0 transition-opacity duration-250 ease-in-out delay-150 group-hover:opacity-100">
                See Detials
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default lastmain;
