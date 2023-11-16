import React from "react";
import { Button } from "./ui/button";

const lastmain = () => {
  const details = [
    {
      title: "Senior Full-Stack Engineer",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 60-80k€",
        "Start date: ASAP",
      ],
    },
    {
      title: "Senior Designer",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 90-100k€",
        "Start date: ASAP",
      ],
    },
    {
      title: "Senior Product Manager",
      points: [
        "Full time position",
        "Berlin or remote",
        "Salary: 120-130k€",
        "Start date: ASAP",
      ],
    },
  ];

  return (
    <div className="w-[90%] h-[48vh] mx-auto mt-14 mb-10">
      <h1 className=" text-6xl font-serif font-bold ml-10 mb-10">
        Open Vacancies ...{" "}
      </h1>
      <br />
      <div className=" mt-6 flex justify-around  gap-6 ">
        {details.map((detail) => (
          <div className="group w-[350px] h-[200px] ease-in-out duration-500 bg-[#ffefe5] rounded-[50px] hover:h-[250px]">
            <div className="p-10">
              <div className="card-body">
                <h5 className="text-lg font-semibold ">{detail.title}</h5>
                <ul className=" list-disc ml-6 mt-2">
                  {detail.points.map((point) => (
                    <li className=" font-bullet font-extralight">{point}</li>
                  ))}
                </ul>
              </div>
              <Button className=" mt-4 ml-2 opacity-0 transition-opacity duration-250 ease-in-out delay-150 group-hover:opacity-100">
                See Detials
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default lastmain;
