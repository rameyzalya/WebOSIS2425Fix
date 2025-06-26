import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lengkung from '../_assets/lengkung.png';

function Contact() {
    return (
        <div
            className='min-h-screen bg-curtain bg-center'
            style={{
                backgroundImage: `url(${lengkung.src})`,
                backgroundSize: 'curtain', // Membuat gambar meluas ke samping
            }}
        >
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-x mx-auto text-center mb-16 pt-16'>
                        <h2 className='font-bold text-white text-[44px] text-3xl mb-4'>Event</h2>
                        <h2 className='font-medium text-md text-white text-[36px] mb-4'>
                            Event Terbaru
                        </h2>
                    </div>
                    <div className='w-full lg:w-2/3 lg:mx-auto'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;