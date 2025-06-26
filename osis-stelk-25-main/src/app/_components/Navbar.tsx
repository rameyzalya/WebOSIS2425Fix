"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import Foto from '../_assets/Yu.png';
import Logo from '../_assets/Logo.png';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenu = () => setMenu(!menu);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${isScrolled ? 'fixed bg-white bg-opacity-80 buram' : 'absolute bg-transparent'} top-0 left-0 w-full flex items-center z-10`}>
                <div>
                    <div className='container scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
                        <div className='flex items-center justify-between h-20 relative'>
                            <div className='px-4 flex items-center'>
                                <Image src={Logo} alt="BiruSenja Logo" width={350} height={60} />
                            </div>
                            <div className='flex items-center justify-center p-4'>
                                <button className='block absolute right-4 lg:hidden' onClick={handleMenu}>
                                    <span className={`bg-[#6B0000] block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                                    <span className={`bg-[#6B0000] block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${menu ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`bg-[#6B0000] block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                                </button>
                                <nav className={`${!menu ? 'hidden' : 'block'} absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-full lg:rounded-none lg:shadow-none`}>
                                    <ul className='block lg:flex justify-end items-center'>
                                        <li className='group'>
                                            <Link href='#home' className='text-base text-black py-2 mx-8 flex group-hover:text-[#6B0000] font-bold'>Home</Link>
                                        </li>
                                        <li className='group'>
                                            <Link href='#bidang' className='text-base text-black py-2 mx-8 flex group-hover:text-[#6B0000] font-bold'>Bidang</Link>
                                        </li>
                                        <li className='group'>
                                            <Link href='#saksi' className='text-base text-black py-2 mx-8 flex group-hover:text-[#6B0000] font-bold'>Saksi</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;