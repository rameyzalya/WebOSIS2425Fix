import React from "react";
import Image from "next/image";
import Link from "next/link";
import toa from "../_assets/toa.png";

function Saksi() {
  return (
    <div
      className="relative w-full py-5 sm:py-8 md:py-10 lg:py-12 xl:py-20"
      id="saksi"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h2
              className="font-bold text-[#6B0000] leading-tight mb-3 sm:mb-4 lg:mb-6
                         text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              SAKSI
            </h2>
            <p
              className="font-medium text-[#3A0000] mb-6 sm:mb-8 lg:mb-12 leading-relaxed
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >
              (SUARA ASPIRASI DAN AKSI SISWA)
            </p>

            {/* Responsive Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://ngl.link/osisstelk25"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6B0000] hover:bg-[#3A0000] text-white font-bold 
                         flex items-center justify-center transition-all duration-300 
                         transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
                         
                         /* Mobile Styles */
                         w-full max-w-xs h-12 rounded-full text-sm
                         
                         /* Tablet Styles */  
                         sm:w-80 sm:h-14 sm:rounded-full sm:text-base
                         
                         /* Desktop Styles */
                         md:w-96 md:h-16 md:rounded-full md:text-lg
                         
                         /* Large Desktop Styles */
                         lg:w-[420px] lg:h-20 lg:rounded-full lg:text-xl
                         
                         /* Extra Large Desktop Styles */
                         xl:w-[501px] xl:h-[92px] xl:rounded-full xl:text-2xl"
              >
                SEND NOW
              </Link>
            </div>

            {/* Additional Info for Mobile */}
            <div className="mt-4 sm:mt-6 lg:hidden">
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Kirimkan aspirasi dan saran Anda untuk pengembangan kegiatan
                OSIS
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={toa}
                width={650}
                height={650}
                alt="SAKSI - Suara Aspirasi dan Aksi Siswa"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saksi;
