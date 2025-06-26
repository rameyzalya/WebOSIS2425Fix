import React from "react";
import Image from "next/image";
import Link from "next/link";
import Foto from "../_assets/Yu.png";
import Bot from "../_assets/Bot.png";

function Hero() {
  return (
    <div className="relative" id="home">
      <div className="relative">
        <div className="flex flex-wrap items-center relative">
          <div className="w-full lg:w-1/2 mb-[250px] pl-16 lg:pl-24">
            <h1 className="text-[2rem] ">Welcome </h1>
            <h1 className="block font-bold text-[#6B0000] text-[5rem] leading-tight">
              OSIS SMK TELKOM MAKASSAR
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Foto */}
            <Image
              src={Foto}
              width={700}
              height={700}
              alt="foto"
              className="max-w-full relative z-0"
            />
            {/* Bot */}
          </div>
          <Image
            src={Bot}
            alt="bot image"
            className="absolute bottom-0 left-0 w-screen z-10 m-0 p-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
