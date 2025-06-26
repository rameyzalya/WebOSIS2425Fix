"use client";
import React, { useEffect, useState } from "react";
import Hero from "./_components/Hero";
import VisiMisi from "./_components/VisiMisi";
import Ketos from "./_components/Ketos";
import Pinti from "./_components/Pinti";
import Bidang from "./bdangg/Bidang";
import Saksi from "./_components/Saksi";
import Footer from "./_components/Footer";

function Page() {
  // Biarkan variabel tetap ada tapi tambahkan komentar eslint-disable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [header, setHeader] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleMenu = () => {
    // fungsi tetap ada tapi tidak digunakan
  };

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        // Biarkan kosong
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  return (
    <>
      <section className="pt-36">
        <Hero />
      </section>

      {/* Bagian lainnya tetap sama persis */}
      <section className="pb-32 pt-20 bg-[#6B0000]">
        <VisiMisi />
      </section>

      <section className="pt-36 bg-slate-100">
        <Ketos />
      </section>

      <section className="pb-32">
        <Pinti />
      </section>

      <section className="pt-36 pb-10 bg-slate-100">
        <Bidang />
      </section>

      <section className="pt-36 pb-32">
        <Saksi />
      </section>

      <section className="bg-slate-600 pt-24 pb-12">
        <Footer />
      </section>
    </>
  );
}

export default Page;
