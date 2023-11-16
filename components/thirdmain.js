import React from "react";
import Image from "next/image";
const thirdmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mt-6 mx-auto bg-[#EEEBFE] rounded-[30px]">
      <div className="p-10">
        <h3 className=" text-center text-lg font-mono">
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </h3>
        <h1 className="text-center font-play font-extrabold text-6xl p-10">
          Ever wondered what others think of you?
        </h1>
      </div>
      <div className=" w-[80%]  mx-auto flex justify-around items-center relative">
        <div className="flex flex-col justify-center items-center h-[150px] z-10">
          <Image src="/num1.svg" height={50} width={50} alt={" "} />
          <p className="w-[250px]">Answer questions on your social skills</p>
        </div>
        <div className="flex flex-col justify-center items-center h-[150px] z-10">
          <Image src="/num2.svg" alt={" "} height={50} width={50} />
          <p className="w-[250px]">
            Let others anonymously answer the same question about you
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-[150px] z-10">
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
        </div>
        <hr className=" w-[70%] mx-auto border-dashed border-2 border-[#F3A60F]  absolute top-[31%]" />
      </div>
      <Image
        src="/thinking.svg"
        height={250}
        width={250}
        alt={" "}
        className="ml-[40%] mt-4"
      />
    </div>
  );
};

export default thirdmain;
