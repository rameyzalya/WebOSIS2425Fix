"use client";
// import { useRouter } from 'next/navigation';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  bdg1,
  bdg2,
  bdg3,
  bdg4,
  bdg5,
  bdg6,
} from "../_assets/portofolio/index";
// import bidang1 from '../bidang1/bidang1';

function Portofolio() {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const router = useRouter()
  return (
    <>
      <div className="container mb-20" id="bidang">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-[#6B0000] text-3xl mb-4">BIDANG</h2>
            <p className="font-medium text-md text-black">
              OSIS SMK Telkom Makassar terbagi menjadi 6 bidang agar dapat fokus
              menjalankan program kerja dan tugas masing-masing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bidang 1 */}
          <div className="bidang relative group">
            <Link href="/bidang1">
              {" "}
              {/* Sesuaikan href dengan rute /bidang1 */}
              <Image
                src={bdg1}
                alt="Bidang 1"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 1
              </h3>
            </Link>
          </div>
          {/* Bidang 2 */}
          <div className="bidang relative group">
            <Link href="/bidang2">
              {" "}
              {/* Sesuaikan href dengan rute /bidang1 */}
              <Image
                src={bdg2}
                alt="Bidang 2"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 2
              </h3>
            </Link>
          </div>
          {/* Bidang 3 */}
          <div className="bidang relative group">
            <Link href="/bidang3" rel="noopener noreferrer">
              <Image
                src={bdg3}
                alt="Bidang 3"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 3
              </h3>
            </Link>
          </div>
          {/* Bidang 4 */}
          <div className="bidang relative group">
            <Link href="/bidang4" rel="noopener noreferrer">
              <Image
                src={bdg4}
                alt="Bidang 4"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 4
              </h3>
            </Link>
          </div>
          {/* Bidang 5 */}
          <div className="bidang relative group">
            <Link href="/bidang5" rel="noopener noreferrer">
              <Image
                src={bdg5}
                alt="Bidang 5"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 5
              </h3>
            </Link>
          </div>
          {/* Bidang 6 */}
          <div className="bidang relative group">
            <Link href="/bidang6" rel="noopener noreferrer">
              <Image
                src={bdg6}
                alt="Bidang 6"
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white bg-black bg-opacity-50 rounded-lg">
                Bidang 6
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
