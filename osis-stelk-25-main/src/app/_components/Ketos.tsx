import React from "react";
import Image from "next/image";
import ketos from "../_assets/lucky.png";

// Placeholder untuk gambar (karena tidak ada akses ke file asli)
const PlaceholderImage = () => (
  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
    <div className="text-center text-gray-600">
      <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <p className="text-sm">Foto Ketua OSIS</p>
    </div>
  </div>
);

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
                "Saya bangga bisa mewakili aspirasi teman-teman semua. Bersama
                pengurus OSIS, kami berkomitmen untuk terus berinovasi,
                memperkuat kebersamaan, dan menghadirkan program-program yang
                bermanfaat serta memberi pengalaman berharga. SMK Telkom
                Makassar bukan hanya tempat belajar, tetapi juga rumah bagi
                potensi, kreativitas, dan cita-cita besar. Mari kita bersama
                menciptakan lingkungan yang positif dan inspiratif untuk
                mencapai visi bersama. Terima kasih atas kepercayaan dan
                dukungannya. Semoga kebersamaan ini terus membawa kita ke arah
                yang lebih baik."
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
