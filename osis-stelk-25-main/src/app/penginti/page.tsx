import React from "react";
import Link from "next/link";
import yu from "../_assets/Bot.png";
import hero from "../_assets/bidsmw/intismw.png";
import Image from "next/image";
import ketubing from "../_assets/ketuabid/lucky.png";
import ig from "../_assets/ig.png";
import ig2 from "../_assets/ig2.png";
// Import images directly from their paths
import alya from "../_assets/anggota/penginti/alya.png";
import kiki from "../_assets/anggota/penginti/kiki.png";
import nabila from "../_assets/anggota/penginti/nabila.png";
import vero from "../_assets/anggota/penginti/vero.png";
import sakha from "../_assets/anggota/penginti/sakha.png";
import anin from "../_assets/anggota/penginti/anin.png";

const Bidang1Page = () => {
  return (
    <>
      <div className="judul mt-[150px] w-max text-center flex-col items-center mx-auto mb-20">
        <h1 className="text-[70px] font-bold text-[#6B0000]">PENGURUS INTI</h1>
      </div>
      <div className="relative items-center h-max-w-[100vw] mx-auto mt-10 flex flex-col justify-center text-center">
        {/* Hero Image */}
        <Image
          src={hero}
          width={1500}
          height={1500}
          alt="foto"
          className="max-w-full relative z-0 mt-1 md:bottom-[15px]"
        />
        {/* Yu Image */}
        <Image
          src={yu}
          alt="yu"
          className="absolute bottom-[-70px] z-10 w-[100vw]"
        />
      </div>
      <div className="h-[120vh] bg-[#6B0000] mt-[70px] text-center flex flex-col items-center ">
        <div className="judul display flex flex-col items-center w-[800px] text-center">
          <h2 className="text-[50px] font-bold text-white">TUGAS UMUM</h2>
          <p className="text-white text-xl m-3">
            Pengurus inti OSIS bertugas mengoordinasikan, merencanakan, dan
            memastikan seluruh kegiatan organisasi berjalan dengan tertib,
            efektif, dan sesuai tujuan OSIS.
          </p>
        </div>
        <div className="flex mt-20 w-[500]">
          <Image src={ketubing} width={400} alt="ketubing" />
          <div className="ketubing m-auto pl-20 text-left">
            <h3 className="text-[25px] text-white">Ketua OSIS</h3>
            <div className="flex flex-col items-start">
              <h2 className="text-[3rem] text-white pb-2 max-w-[500px] max-lg:text-[2rem]">
                A. LUCKYANA RAFEYFA ULYA RIDWAN
              </h2>
              <div className="h-1 w-[50%] bg-white item-star"></div>
            </div>
            <Link
              href="https://www.instagram.com/luckyanaulyaa?igsh=MXJhNXg0aG5jY3Bubw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={ig} alt="ig" className="mt-10" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-10 flex-col min-h-[100vh]">
        <div className="text-center italic">
          <h3 className="m-3 text-4xl font-bold text-[#6B0000]">
            ANGGOTA INTI
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] w-full">
            {/* Alya */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={alya}
                  alt="Rameyza Alya mahirah Wahid"
                  width={350}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  Rameyza Alya mahirah Wahid
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Wakil Ketua 1
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link
                  href="https://www.instagram.com/ramezyalya?igsh=MXNhZ3Z2b2dmaGVtOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>

            {/* Kiki */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={kiki}
                  alt="Muhammad Rizky Prasetya"
                  width={350}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  Muhammad Rizky Prasetya
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Wakil Ketua 2
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link
                  href="https://www.instagram.com/rzkyyprasetya?igsh=MXdnam5sbzl0Mzh0MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>

            {/* Nabila */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={nabila}
                  alt="Nabila Humairah AR"
                  width={350}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  Nabila Humairah AR
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Sekertaris 1
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>

            {/* Vero */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={vero}
                  alt="Veronika Andini"
                  width={350}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  Veronika Andini
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Sekertaris 2
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link
                  href="https://www.instagram.com/veronikaandini?igsh=YXR2MGc4a2JqZ2Jt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>

            {/* Sakha */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[350px] overflow-hidden rounded-lg">
                <Image
                  src={sakha}
                  alt="MSakha Ibdail Kiram"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  MSakha Ibdail Kiram
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Bendahara 1
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link
                  href="https://www.instagram.com/ssakhaik?igsh=MXBvMmI0bW9qMDg1ZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>

            {/* Anin */}
            <div className="flex flex-col items-center w-full">
              <div className="w-[350px] h-[350px] overflow-hidden rounded-lg">
                <Image
                  src={anin}
                  alt="Anindya Shakira Valentine"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <h2 className="text-[22px] font-bold pb-2 text-[#6B0000]">
                  Anindya Shakira Valentine
                </h2>
                <h3 className="text-[16px] font-bold pb-2 text-[#6B0000]">
                  Bendahara 2
                </h3>
                <div className="h-1 w-[50%] bg-[#6B0000] mx-auto mb-3"></div>
                <Link
                  href="https://www.instagram.com/anindyashkrv?igsh=MWs2dHQ4ZmZiYXg1MA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ig2} alt="ig" className="mx-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bidang1Page;
