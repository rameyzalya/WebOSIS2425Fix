"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../_assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Handle hash navigation
  const navigateToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    setMenuOpen(false);
  };

  // Auto-scroll to hash on page load
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        !(event.target as Element).closest("nav") &&
        !(event.target as Element).closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex-shrink-0"
          >
            <Image
              src={Logo}
              alt="OSIS SMK TELKOM MAKASSAR"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-60 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-[#6B0000] transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#6B0000] transition-all duration-300 ease-in-out my-1 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#6B0000] transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-16 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg lg:static lg:flex lg:bg-transparent lg:shadow-none lg:block lg:backdrop-blur-none`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-0 lg:gap-8">
              <li>
                <button
                  onClick={() => navigateToSection("home")}
                  className="text-base font-semibold text-[#6B0000] hover:text-[#8B0000] transition-colors duration-200 py-2 px-3 rounded-md hover:bg-red-50 lg:hover:bg-transparent"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("bidang")}
                  className="text-base font-semibold text-[#6B0000] hover:text-[#8B0000] transition-colors duration-200 py-2 px-3 rounded-md hover:bg-red-50 lg:hover:bg-transparent"
                >
                  Bidang
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("saksi")}
                  className="text-base font-semibold text-[#6B0000] hover:text-[#8B0000] transition-colors duration-200 py-2 px-3 rounded-md hover:bg-red-50 lg:hover:bg-transparent"
                >
                  Saksi
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
