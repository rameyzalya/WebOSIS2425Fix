import React from 'react';
import Image from 'next/image';
import ketos from '../_assets/lucky.png';

function Hero() {
    return (
        <div className=' bg-slate-100'>
            <div className='container relative'>
                <div className='flex flex-wrap items-center relative lg:flex-row-reverse'>
                    {/* Foto */}
                    <div className='w-full p-4 lg:w-1/2 flex justify-center relative'>
                        <Image src={ketos} width={700} height={700} alt='foto' className='max-w-full relative z-0' />
                    </div>
                    {/* Teks */}
                    <div className='w-full p-2 lg:w-1/2 mb-[250px] pt-[150px] '>
                        <h1 className='block font-bold text-[#6B0000] text-[32px] leading-tight'>
                            Sambutan Ketua OSIS
                        </h1>
                        <p className='text-[20px] text-gray-700 mt-4 text-justify'>
                            "Saya bangga bisa mewakili aspirasi teman-teman semua. Bersama pengurus OSIS, kami berkomitmen untuk terus berinovasi, memperkuat kebersamaan, dan menghadirkan program-program yang bermanfaat serta memberi pengalaman berharga. SMK Telkom Makassar bukan hanya tempat belajar, tetapi juga rumah bagi potensi, kreativitas, dan cita-cita besar. Mari kita bersama menciptakan lingkungan yang positif dan inspiratif untuk mencapai visi bersama. Terima kasih atas kepercayaan dan dukungannya. Semoga kebersamaan ini terus membawa kita ke arah yang lebih baik."
                        </p>
                        <h1 className='block font-bold text-[#6B0000] text-[24px] leading-tight pt-5'>
                        A. Luckyana Rafeyfa Ulya
                        </h1>
                        <p className='text-[20px] text-gray-700 text-justify'>
                        Ketua OSIS Periode 2024/2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;