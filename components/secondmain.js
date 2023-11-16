import React from "react";
import Image from "next/image";
const secondmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mx-auto mb-10 bg-[#ffefe5] rounded-[30px]  ">
      <div className="w-full bg-[url('/mainbgSec.svg')] bg-contain bg-no-repeat h-full flex flex-col justify-center items-center">
        <div className=" ml-[280px]">
          <h2 className="text-lg">Built out of frustration</h2>
          <h1 className="mb-10 font-mono font-bold text-6xl max-w-[10em]  ">
            Meet the ahead app
          </h1>
        </div>
        <div className="w-[400px] ml-24">
          <p>
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
          </p>
          <br />
          <p>
            Think of its as a packet cheerleader towards a better, more
            fulfilling
          </p>
        </div>
      </div>
    </div>
  );
};

export default secondmain;
