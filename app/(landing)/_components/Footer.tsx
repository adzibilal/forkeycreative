import { footerLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-zinc-900 py-16'>
            <div className='max-con'>
                <div className='grid grid-cols-[1fr_2fr_1.5fr] gap-5'>
                    <div className=''>
                        <div className='text-zinc-400 font-semibold mb-2 text-xl'>
                            FORKEY OFFICE
                        </div>
                        <div className='text-zinc-500 mb-2'>
                            Sukajadi, Kota Bandung 40162
                        </div>
                        <Link
                            href='mailto:sales@theseocompany.com'
                            target='_blank'
                            className='text-blue-500'>
                            forkeycreative@gmail.com
                        </Link>
                    </div>
                    <div className=''>
                        <div className='text-zinc-400 font-semibold mb-2 text-xl'>
                            ABOUT US
                        </div>
                        <div className='text-zinc-500 mb-2 text-justify text-sm'>
                            Forkey creative merupakan agensi Digital Marketing
                            yang berfokus pada konten sosial media. Selain
                            konten, forkey juga menyediakan jasa advertising,
                            optimasi sosial media, marketplace management dan
                            konsultasi terkait digital marketing. Dengan
                            menggunakan pola konten yang telah teruji banyak
                            brand dan berbagai bidang bisnis, Forkey Creative
                            siap membantu bisnismu naik level!
                            #elevatingyourbrand
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-zinc-400 font-semibold mb-2 text-xl'>
                            OUR PRODUCT
                        </div>
                        <div className='flex flex-col gap-3'>
                            {footerLinks.map((link, index) => (
                                <Link key={index} href={link.path} className='text-zinc-500 hover:text-blue-500 cursor-pointer'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className='border-zinc-500 my-14'/>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Link className='text-2xl text-zinc-400 hover:text-blue-500' href={'/'}>
                            <FaFacebook />
                        </Link>
                        <Link className='text-2xl text-zinc-400 hover:text-blue-500' href={'https://instagram.com/forkeycreative?igshid=NDk5N2NlZjQ='} target='_blank'>
                            <FaInstagram />
                        </Link>
                        <Link className='text-2xl text-zinc-400 hover:text-blue-500' href={'/'}>
                            <FaTwitter />
                        </Link>
                        <Link className='text-2xl text-zinc-400 hover:text-blue-500' href={'/'}>
                            <FaYoutube />
                        </Link>
                    </div>

                    <div className="text-zinc-400">FORKEY CREATIVE {currentYear} © All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
