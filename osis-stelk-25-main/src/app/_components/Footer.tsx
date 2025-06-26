import React from 'react';
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Menggunakan react-icons untuk logo

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 mb-12 text-slate-200 font-medium md:w-1/3'>
                        <h3 className='font-bold text-2xl mb-2'>Contact Us</h3>
                        <p>Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini,<br />Kota Makassar.</p>
                        <p>osisstelkmks@gmail.com</p>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Follow Us</h3>
                        <div className='flex space-x-4'>
                            {/* Instagram */}
                            <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='text-white text-3xl hover:text-primary transition duration-300' />
                            </Link>
                            {/* TikTok */}
                            <Link href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className='text-white text-3xl hover:text-primary transition duration-300' />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
                        <ul className='text-slate-400'>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#home'>Home</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#bidang'>Bidang</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#event'>Event</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;