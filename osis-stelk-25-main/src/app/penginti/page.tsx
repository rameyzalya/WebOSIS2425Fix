import React from "react";
import Link from "next/link";
import yu from "../_assets/Bot.png";
import hero from "../_assets/bidsmw/intismw.png";
import Image from "next/image";
import ketubing from "../_assets/ketuabid/lucky.png";
import ig from "../_assets/ig.png"
import ig2 from "../_assets/ig2.png"
import { alya, kiki, nabila, vero, sakha, anin } from "../_assets/anggota/penginti/page";
import { link } from "fs";


const Bidang1Page = () => {
    return (
        <>
            <div className="judul mt-[150px] w-max text-center flex-col items-center mx-auto mb-20">
                <h1 className="text-[70px] font-bold text-[#6B0000]">PENGURUS INTI</h1>
            </div>
            <div className="relative items-center h-max-w-[100vw] mx-auto mt-10 flex flex-col justify-center text-center">
                {/* Hero Image */}
                <Image src={hero} width={1500} height={1500} alt="foto" className="max-w-full relative z-0 mt-1 md:bottom-[15px]" />
                {/* Yu Image */}
                <Image src={yu} alt="yu" className="absolute bottom-[-70px] z-10 w-[100vw]" />
            </div>
            <div className="h-[120vh] bg-[#6B0000] mt-[70px] text-center flex flex-col items-center ">
                <div className="judul display flex flex-col items-center w-[800px] text-center">
                    <h2 className="text-[50px] font-bold text-white">TUGAS UMUM</h2>
                    <p className="text-white text-xl m-3">Pengurus inti OSIS bertugas mengoordinasikan, merencanakan, dan memastikan seluruh kegiatan organisasi berjalan dengan tertib, efektif, dan sesuai tujuan OSIS.</p>
                </div>  
                <div className="flex mt-20 w-[500]">
                    <Image src={ketubing} width={400} alt="ketubing" />
                    <div className="ketubing m-auto pl-20 text-left">
                        <h3 className="text-[25px] text-white">Ketua OSIS</h3>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[3rem] text-white pb-2 max-w-[500px] max-lg:text-[2rem]">A. LUCKYANA RAFEYFA ULYA RIDWAN</h2>
                            <div className="h-1 w-[50%] bg-white item-star"></div>
                        </div>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <Image src={ig} alt="ig" className="mt-10" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 flex-col h-[100vh]">
                <div className="text-center italic">
                    <h3 className="m-3 text-4xl font-bold text-[#6B0000]">ANGGOTA INTI</h3>
                </div>
                <div className="flex flex-col items-center justify-center mt-10"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px]">
                    {/* agnes*/}
                        <div className="max-w-[400px]">
                            <Image src={alya} alt="farras" width={400} className="mt-[30px]"/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Rameyza Alya mahirah 
                                    Wahid</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Wakil Ketua 1
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* anya*/}
                        <div className="max-w-[400px]">
                            <Image src={kiki} alt="Aufa" width={400} className="mt-5"/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Muhammad Rizky Prasetya</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Wakil Ketua 2
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* fadhil */}
                        <div className="max-w-[400px]">
                                <Image src={nabila} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Nabila Humairah AR</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Sekertaris 1
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* fiqih*/}
                        <div className="max-w-[400px]">
                                <Image src={vero} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Veronika Andini</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Sekertaris 2
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* raisya */}
                        <div className="max-w-[400px]">
                                <Image src={sakha} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">MSakha Ibdail Kiram</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Bendahara 1
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* reza  */}
                        <div className="max-w-[400px]">
                                <Image src={anin} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Anindya Shakira Valentine</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Bendahara 2
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* yudhi */}
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Bidang1Page;