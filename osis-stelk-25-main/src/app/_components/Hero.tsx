import React from "react";
import Image from "next/image";
import Foto from "../_assets/Yu.png";
import Bot from "../_assets/Bot.png";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      <div className="relative h-full">
        <div className="flex flex-wrap items-center relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-screen">
          <div className="w-full lg:w-1/2 mb-[250px] pl-7 z-20 relative">
            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2rem]">
              Welcome
            </h1>
            <h1
              className="block font-bold text-[#6B0000] leading-tight
                         text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]"
            >
              OSIS SMK TELKOM MAKASSAR
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative px-4 sm:px-6 md:px-8 lg:px-0 z-5">
            {/* Foto dengan padding horizontal */}
            <div className="w-full max-w-[600px] lg:max-w-[700px] px-2 sm:px-4 md:px-6 lg:px-0">
              <Image
                src={Foto}
                width={700}
                height={700}
                alt="foto"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bot image positioned at the very bottom */}
        <div className="absolute bottom-0 left-0 w-screen z-10 m-0 p-0">
          <Image
            src={Bot}
            alt="bot image"
            className="w-full h-auto object-cover object-bottom"
            style={{
              display: "block",
              margin: 0,
              padding: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
