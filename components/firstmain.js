import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Star } from "lucide-react";
const firstmain = () => {
  return (
    <div className="w-[90%] h-[90vh] mt-6 mx-auto bg-[#EEEBFE] rounded-[30px] flex justify-around items-center ">
      <div className="h-[500px] w-[650px] mt-[15%] my-auto ml-8">
        <h3 className=" text-lg">Ahead App</h3>
        <h1 className=" font-mono font-bold text-6xl max-w-[10em] ">
          Master your Life by mastering emotions
        </h1>
        <div className="flex items-center gap-7">
          <Button className="mt-2">
            <Download className="mr-2 h-4 w-4" /> Download App
          </Button>
          <div className="flex mt-[-12px]">
            <Star color="#fcff52" fill="#fcff52" />
            <Star color="#fcff52" fill="#fcff52" />
            <Star color="#fcff52" fill="#fcff52" />
            <Star color="#fcff52" fill="#fcff52" />
            <Star color="#fcff52" fill="#fcff52" />
          </div>
          <h3 className="absolute text-lg mt-12 ml-44">100+ Downloads</h3>
        </div>
      </div>
      <Image src="/mainBg.svg" width={700} height={700} alt={"logo"} />
    </div>
  );
};

export default firstmain;
