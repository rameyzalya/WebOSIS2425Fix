import React from "react";
import Image from "next/image";
import Link from "next/link";
import toa from "../_assets/toa.png";

function Saksi() {
  return (
    <div id="saksi">
      <div className="container relative">
        <div className="flex flex-wrap items-center relative">
          <div className="w-full p-2 lg:w-1/2 mb-[250px]">
            <h2 className="block font-bold text-[#6B0000] text-[39px] leading-tight text-center">
              SAKSI
            </h2>
            <p className="font-medium text-[#3A0000] text-[39px] text-center">
              (SUARA ASPIRASI DAN AKSI SISWA)
            </p>
            {/* Button */}
            <div className="text-center mt-6">
              <Link
                href="https://ngl.link/osisstelk25"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6B0000] text-white text-[29px] font-bold flex items-center justify-center transition duration-300 hover:bg-[#3A0000]"
                style={{
                  width: "501px",
                  height: "92px",
                  borderRadius: "69px",
                  margin: "0 auto",
                }}
              >
                SEND NOW
              </Link>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/2 flex justify-center relative">
            {/* Foto */}
            <Image
              src={toa}
              width={650}
              height={650}
              alt="foto"
              className="max-w-full relative z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saksi;
