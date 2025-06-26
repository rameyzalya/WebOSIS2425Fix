import React from "react";
import Link from "next/link";
import yu from "../_assets/Bot.png";
import hero from "../_assets/bidsmw/bid1smw.png";
import Image from "next/image";
import ketubing from "../_assets/ketuabid/uqi.png";
import ig from "../_assets/ig.png"
import ig2 from "../_assets/ig2.png"
import {farras,auf, pascal, orville, fhadlan, kaysia} from "../_assets/anggota/bidang 1/index";
import { link } from "fs";


const Bidang1Page = () => {
    return (
        <>
            <div className="judul mt-[150px] w-max text-center flex-col items-center mx-auto mb-20">
                <h1 className="text-[70px] font-bold text-[#6B0000]">BIDANG 1</h1>
                <p className="text-[20px] font-semibold text-[#6B0000]">KEIMANAN KEPADA TUHAN YANG MAHA ESA DAN AKHLAK MULIA</p>
            </div>
            <div className="relative items-center h-max-w-[100vw] mx-auto mt-10 flex flex-col justify-center text-center">
                {/* Hero Image */}
                <Image src={hero} width={1500} height={1500} alt="foto" className="max-w-full relative z-0" />
                {/* Yu Image */}
                <Image src={yu} alt="yu" className="absolute bottom-[-70px] z-10 w-[100vw]" />
            </div>
            <div className="h-[120vh] bg-[#6B0000] mt-[70px] text-center flex flex-col items-center ">
                <div className="judul display flex flex-col items-center w-[800px] text-center">
                    <h2 className="text-[50px] font-bold text-white">TUGAS UMUM</h2>
                    <p className="text-white text-xl m-3">Mengarahkan siswa untuk memperkuat keimanan dan memiliki akhlak yang baik melalui berbagai kegiatan keagamaan dan pembinaan moral, seperti kajian agama, kegiatan rohani, dan program yang mendorong perilaku positif.</p>
                </div>
                <div className="flex mt-5 w-[800]">
                    <Image src={ketubing} alt="ketubing" />
                    <div className="ketubing m-auto pl-10 text-left">
                        <h3 className="text-[25px] text-white">Koordinator</h3>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[3rem] text-white pb-2 max-lg:text-[2rem]">SYAUQI NUR FAUZI</h2>
                            <div className="h-1 w-[50%] bg-white item-star"></div>
                        </div>
                        <Link href="https://www.instagram.com/syauqinf?igsh=YTNxbXprZ2JyZHUw" target="_blank" rel="noopener noreferrer">
                            <Image src={ig} alt="ig" className="mt-10" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 flex-col h-[100vh]">
                <div className="text-center italic">
                    <p className="text-3xl text-[#6B0000]">Bidang 1</p>
                    <h3 className="m-3 text-4xl font-bold text-[#6B0000]">ANGGOTA BIDANG</h3>
                </div>
                <div className="flex flex-col items-center justify-center mt-10"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px]">
                    {/* FARRAS */}
                        <div className="max-w-[400px]">
                            <Image src={farras} alt="farras" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">MUHAMMAD ISRA FARRAS</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/muhammad_isra_farras?igsh=YXoycTV3b3c5bGt3" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* AUF */}
                        <div className="max-w-[400px]">
                            <Image src={auf} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Annisa Nuraufa</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/nisaauufa?igsh=ZjRzMDJrYW9oamxr" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* pascal */}
                        <div className="max-w-[400px]">
                                <Image src={pascal} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Michael Pascal</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/mi.pasc?igsh=MXYxOW9xMmQ0djRpMg==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* orpil*/}
                        <div className="max-w-[400px]">
                                <Image src={orville} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">Orville Giovanni Sambono</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/heyy.orville/" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* fadlan */}
                        <div className="max-w-[400px]">
                                <Image src={fhadlan} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">AHMAD FHADLAN AL-GHIFFARY</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/oy_padlan?igsh=dzNsZjNtOGpscGd2" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/*kaysa  */}
                        <div className="max-w-[400px]">
                                <Image src={kaysia} alt="Aufa" width={400} className="mt-[35px]"/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">KAYSIA PUTRI AMANDA</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota</h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/oy_padlan?igsh=dzNsZjNtOGpscGd2" target="_blank" rel="noopener noreferrer">
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