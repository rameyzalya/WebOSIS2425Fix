import React from "react";
import Link from "next/link";
import yu from "../_assets/Bot.png";
import hero from "../_assets/bidsmw/bid2smw.png";
import Image from "next/image";
import ketubing from "../_assets/ketuabid/nabil.png";
import ig from "../_assets/ig.png"
import ig2 from "../_assets/ig2.png"
import {brayn, jacqlein, mia, nade, nahza, richard, yudhi} from "../_assets/anggota/bidang 2/page"
import { link } from "fs";


const Bidang1Page = () => {
    return (
        <>
            <div className="judul mt-[150px] w-max text-center flex-col items-center mx-auto mb-20">
                <h1 className="text-[70px] font-bold text-[#6B0000]">BIDANG 2</h1>
                <p className="text-[20px] font-semibold text-[#6B0000]">PEMBINAAN KARAKTER KEBANGSAAN, KEDISIPLINAN DAN KEPEDULIAN SOSIAL</p>
            </div>
            <div className="relative items-center h-max-w-[100vw] mx-auto mt-10 flex flex-col justify-center text-center">
                {/* Hero Image */}
                <Image src={hero} width={1500} height={1500} alt="foto" className="max-w-full relative z-0 mt-1 md:bottom-[-75px]" />
                {/* Yu Image */}
                <Image src={yu} alt="yu" className="absolute bottom-[-70px] z-10 w-[100vw]" />
            </div>
            <div className="h-[120vh] bg-[#6B0000] mt-[70px] text-center flex flex-col items-center ">
                <div className="judul display flex flex-col items-center w-[800px] text-center">
                    <h2 className="text-[50px] font-bold text-white">TUGAS UMUM</h2>
                    <p className="text-white text-xl m-3">Berfokus pada pembentukan karakter kebangsaan, penanaman nilai to,leransi, dan kepekaan sosial yang luas, menjadikannya dasar yang kuat untuk membangun siswa yang cinta tanah air, peduli lingkungan, dan toleran.</p>
                </div>  
                <div className="flex mt-1 w-[500]">
                    <Image src={ketubing} width={450} alt="ketubing" />
                    <div className="ketubing m-auto pl-20 text-left">
                        <h3 className="text-[25px] text-white">Koordinator</h3>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[3rem] text-white pb-2 max-w-[500px] max-lg:text-[2rem]">ANDI MAKKAWARU NABIL AL-FATAH</h2>
                            <div className="h-1 w-[50%] bg-white item-star"></div>
                        </div>
                        <Link href="https://www.instagram.com/nabilalftah?igsh=Nmp5MXl0d2U5Ymhz" target="_blank" rel="noopener noreferrer">
                            <Image src={ig} alt="ig" className="mt-10" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 flex-col h-[100vh]">
                <div className="text-center italic">
                    <p className="text-2xl text-[#6B0000]">Bidang 2</p>
                    <h3 className="m-3 text-4xl font-bold text-[#6B0000]">ANGGOTA BIDANG</h3>
                </div>
                <div className="flex flex-col items-center justify-center mt-10"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px]">
                    {/* brayn*/}
                        <div className="max-w-[400px]">
                            <Image src={brayn} alt="farras" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">BRAYN RICHARD WANGSHAH</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/brrynnn_21?igsh=MXdjdTQwYnM3MjBwaQ==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* jaqlein*/}
                        <div className="max-w-[400px]">
                            <Image src={jacqlein} alt="Aufa" width={400} className="mt-[20px]"/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">JACQLIEN ECCLESIA GERALDY PEURU</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/jacqlienecclessia?igsh=ZHgzMm9mMGRmY2hi" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* mia */}
                        <div className="max-w-[400px]">
                                <Image src={mia} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">AMIRA THALITA</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/m14thlita?igsh=M2drZmNmMzFkaHRi" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* nade*/}
                        <div className="max-w-[400px]">
                                <Image src={nade} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">ANADYA ARRAYAN AERADI AMSAH</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/anadya.ar?igsh=b3RjcGc0bXNkdGNk&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* nahza */}
                        <div className="max-w-[400px]">
                                <Image src={nahza} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">NAHZA MAESARAH AZAN</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/_nzzzmsrh?igsh=ZG1lMXZhdjV4eXg3" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* richard  */}
                        <div className="max-w-[400px]">
                                <Image src={richard} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">RICHARD JOEL PINANTOAN </h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/jp_richard___?igsh=anZiYTFjMmlzbTNj" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* yudhi */}
                        <div className="max-w-[400px]">
                                <Image src={yudhi} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">MUHAMMAD YUDHISTIRAJA</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/ykins_?igsh=MTVtdW1wYXlrN3BtYw==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Bidang1Page;