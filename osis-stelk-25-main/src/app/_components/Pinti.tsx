import React from "react";
import Image from "next/image";
import inti from "../_assets/penginti.png";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="container relative mx-auto px-4">
        <div className="flex flex-wrap items-center relative">
          <div className="w-full p-2 md:w-1/2 mb-8 md:mb-[20px]">
            <h1 className="block font-bold text-[#6B0000] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight">
              PENGURUS INTI OSIS SMK TELKOM MAKASSAR 2024/2025
            </h1>
            <div className="mt-5 bg-[#6B0000] w-max rounded-lg transition duration-300 ease-in-out group-hover:brightness-80">
              <Link href="/penginti">
                <h1 className="text-[1.5rem] font-bold text-white p-3">
                  Pengurus Inti
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 flex justify-center relative">
            {/* Foto */}
            <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]">
              {
                <Image
                  src={inti}
                  width={900}
                  height={900}
                  alt="Pengurus Inti OSIS SMK Telkom Makassar"
                  className="w-full h-auto max-w-full relative z-0"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
