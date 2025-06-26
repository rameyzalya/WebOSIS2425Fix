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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  // Handle body scroll when menu is open (for mobile)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - Responsive padding */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-36">
        <div className="w-full">
          <Hero />
        </div>
      </section>

      {/* Visi Misi Section - Responsive spacing */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#6B0000]">
        <div className="w-full">
          <VisiMisi />
        </div>
      </section>

      {/* Ketos Section - Responsive spacing */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-36 bg-slate-100">
        <div className="w-full">
          <Ketos />
        </div>
      </section>

      {/* Pinti Section - Responsive spacing */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="w-full">
          <Pinti />
        </div>
      </section>

      {/* Bidang Section - Responsive spacing */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-36 bg-slate-100">
        <div className="w-full">
          <Bidang />
        </div>
      </section>

      {/* Saksi Section - Responsive spacing with controlled container */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Saksi />
        </div>
      </section>

      {/* Footer Section - Responsive spacing */}
      <section className="bg-slate-600 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Page;
