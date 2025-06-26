import React from 'react'

function About() {
    return (
        <div className='bg-[#6B0000] flex flex-col items-center text-center py-10 container'>
            <div>
                <h1 className='text-[40px] font-semibold text-white'>VISI & MISI OSIS SMK TELKOM MAKASSAR</h1>
            </div>
            <div className='mt-8'>
                <h1 className='text-[35px] font-semibold text-white'>Visi</h1>
                <p className='text-white mt-4 max-w-3xl text-justify text-[22px] font-thin'>
                    Menjadikan <span className='font-medium'>OSIS SMK Telkom Makassar</span> sebagai motor penggerak <span className='font-medium'>transformasi</span> dan <span className='font-medium'>inovasi</span> di lingkungan sekolah, berlandaskan nilai nilai <span className='font-medium'>pancasila</span> dan <span className='font-medium'>budaya lokal,</span> untuk mengembangkan siswa menjadi pemimpin yang <span className='font-medium'>kreatif, mandiri,</span> dan <span className='font-medium'>berdaya saing global</span>.
                </p>
            </div>
            <div className='mt-8'>
                <h1 className='text-[35px] font-semibold text-white'>Misi</h1>
                <div className='text-white mt-4 max-w-3xl text-justify text-[22px] font-medium'>
                    <p>1. Menanamkan iman dan takwa sebagai pondasi karakter siswa, serta mengimplementasikan nilai-nilai keagamaan berlandaskan Pancasila melalui program-program kerja OSIS.</p>
                    <p>2. Mendorong partisipasi aktif siswa dalam kegiatan sekolah serta ekstrakurikuler untuk pengembangan minat, bakat, dan kreativitas.</p>
                    <p>3. Menjadikan OSIS sebagai platform untuk menampung aspirasi dan ide kreatif siswa melalui program SAKSI (Suara Aspirasi dan Aksi Siswa).</p>
                    <p>4. Memanfaatkan teknologi informasi dalam administrasi, komunikasi, serta publikasi kegiatan OSIS untuk meningkatkan efisiensi dan jangkauan informasi.</p>
                    <p>5. Mengembangkan program kerja OSIS melalui pendekatan inovatif dan berkelanjutan, serta melakukan evaluasi rutin untuk memastikan manfaat maksimal dari setiap program kerja.</p>
                </div>
            </div>
        </div>
    )
}

export default About