import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import inti from '../_assets/penginti.png';

function Hero() {
    return (
        <div>
            <div className='container relative'>
                <div className='flex flex-wrap items-center relative'>
                    <div className='w-full p-2 lg:w-1/2 mb-[250px]'>
                        <h1 className='block font-bold text-[#6B0000] text-[60px] leading-tight'>PENGURUS INTI OSIS 
                        SMK TELKOM MAKASSAR 2024/2025</h1>
                        <div className='mt-5 bg-[#6B0000] w-max rounded-lg transition duration-300 ease-in-out group-hover:brightness-80'>
                            <Link href="/penginti">
                                <h1 className='text-[1.5rem] font-bold text-white p-3'>Pengurus Inti</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full p-4 lg:w-1/2 flex justify-center relative'>
                        {/* Foto */}
                        <Image src={inti} width={700} height={700} alt='foto' className='max-w-full relative z-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;