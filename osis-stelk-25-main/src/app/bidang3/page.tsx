import React from "react";
import Link from "next/link";
import yu from "../_assets/Bot.png";
import hero from "../_assets/bidsmw/bid3smw.png";
import Image from "next/image";
import ketubing from "../_assets/ketuabid/nabe.png";
import ig from "../_assets/ig.png"
import ig2 from "../_assets/ig2.png"
import {agnes, anya, fadhil, fiqih, raisya, reza, zize} from "../_assets/anggota/bidang 3/page";
import { link } from "fs";


const Bidang1Page = () => {
    return (
        <>
            <div className="judul mt-[150px] w-max text-center flex-col items-center mx-auto mb-20">
                <h1 className="text-[70px] font-bold text-[#6B0000]">BIDANG 3</h1>
                <p className="text-[20px] font-semibold text-[#6B0000]">PENGEMBANGAN MINAT, BAKAT, DAN PRESTASI</p>
            </div>
            <div className="relative items-center h-max-w-[100vw] mx-auto mt-10 flex flex-col justify-center text-center">
                {/* Hero Image */}
                <Image src={hero} width={1500} height={1500} alt="foto" className="max-w-full relative z-0 mt-1 md:bottom-[-70px]" />
                {/* Yu Image */}
                <Image src={yu} alt="yu" className="absolute bottom-[-70px] z-10 w-[100vw]" />
            </div>
            <div className="h-[120vh] bg-[#6B0000] mt-[70px] text-center flex flex-col items-center ">
                <div className="judul display flex flex-col items-center w-[800px] text-center">
                    <h2 className="text-[50px] font-bold text-white">TUGAS UMUM</h2>
                    <p className="text-white text-xl m-3">Sebagai ruang bagi siswa untuk mengeksplorasi minat dan bakat serta mencapai prestasi di bidang akademik, seni, budaya, dan olahraga melalui kompetisi, turnamen, dan festival yang terstruktur.</p>
                </div>  
                <div className="flex mt-20 w-[500]">
                    <Image src={ketubing} width={400} alt="ketubing" />
                    <div className="ketubing m-auto pl-20 text-left">
                        <h3 className="text-[25px] text-white">Koordinator</h3>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[3rem] text-white pb-2 max-w-[500px] max-lg:text-[2rem]">MUHAMMAD NABIL SAFWAN</h2>
                            <div className="h-1 w-[50%] bg-white item-star"></div>
                        </div>
                        <Link href="https://www.instagram.com/nabilsfwan?igsh=MXJ6eDdyZHZzYWdkYQ==" target="_blank" rel="noopener noreferrer">
                            <Image src={ig} alt="ig" className="mt-10" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 flex-col h-[100vh]">
                <div className="text-center italic">
                    <p className="text-2xl text-[#6B0000]">Anggota</p>
                    <h3 className="m-3 text-4xl font-bold text-[#6B0000]">ANGGOTA BIDANG</h3>
                </div>
                <div className="flex flex-col items-center justify-center mt-10"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px]">
                    {/* agnes*/}
                        <div className="max-w-[400px]">
                            <Image src={agnes} alt="farras" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">DIONSIANA AGNESIA MAKU </h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/agnesia_maku?igsh=MTFhYmw5ZW9jNmFjMg==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* anya*/}
                        <div className="max-w-[400px]">
                            <Image src={anya} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">FARSYA CANTIKA ATALLA S</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/farsyacntika?igsh=ZzE0cmU4ZGVjam9m&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* fadhil */}
                        <div className="max-w-[400px]">
                                <Image src={fadhil} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">AHMAD FADHIL AL-HADY</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/al.hadyyy?igsh=MWNqMzY2bG10cW0wYg==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* fiqih*/}
                        <div className="max-w-[400px]">
                                <Image src={fiqih} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">MUH. FHIQIH RAFAEL ISNAIYANTO</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/firss_aja?igsh=bGJ5eXZjb2JtcW9h&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* raisya */}
                        <div className="max-w-[400px]">
                                <Image src={raisya} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">RAISYA REZKITA IDRIS</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/onyoursyaaa?igsh=Yzl0YmRkOHhrYzc1" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* reza  */}
                        <div className="max-w-[400px]">
                                <Image src={reza} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">ANDI REZA SYAHPUTRA</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/andisyahputra9872?igsh=MTFtcmNhbDYxcGkwag==" target="_blank" rel="noopener noreferrer">
                                        <Image src={ig2} alt="ig" className="mt-3"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* yudhi */}
                        <div className="max-w-[400px]">
                                <Image src={zize} alt="Aufa" width={400}/>
                            <div>
                                <div className="flex flex-col items-start ml-5">
                                    <h2 className="text-[25px] font-bold pb-2 text-[#6B0000] mt-5">NUR AZIZAH RIZKY BUDIARTI</h2>
                                    <h2 className="text-[18px] font-bold pb-2 text-[#6B0000]">Anggota
                                    </h2>
                                    <div className="h-1 w-[50%] bg-[#6B0000] item-star"></div>
                                    <Link href="https://www.instagram.com/___nrazizhh?igsh=MTFkNDhoZmk0YWZucQ==" target="_blank" rel="noopener noreferrer">
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