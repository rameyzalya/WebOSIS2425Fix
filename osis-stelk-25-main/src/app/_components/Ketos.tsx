import React from "react";
import Image from "next/image";
import ketos from "../_assets/lucky.png";

function Hero() {
  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96">
              <Image
                src={ketos}
                alt="A. Luckyana Rafeyfa Ulya - Ketua OSIS"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Teks */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#6B0000]">
                Sambutan Ketua OSIS
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                &quot;Saya bangga bisa mewakili aspirasi teman-teman semua.
                Bersama pengurus OSIS, kami berkomitmen untuk terus berinovasi,
                memperkuat kebersamaan, dan menghadirkan program-program yang
                bermanfaat serta memberi pengalaman berharga. SMK Telkom
                Makassar bukan hanya tempat belajar, tetapi juga rumah bagi
                potensi, kreativitas, dan cita-cita besar. Mari kita bersama
                menciptakan lingkungan yang positif dan inspiratif untuk
                mencapai visi bersama. Terima kasih atas kepercayaan dan
                dukungannya. Semoga kebersamaan ini terus membawa kita ke arah
                yang lebih baik.&quot;
              </p>

              <div className="space-y-2">
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  A. Luckyana Rafeyfa Ulya
                </p>

                <p className="text-base md:text-lg text-gray-600">
                  Ketua OSIS Periode 2024/2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
