import { navbarLinks } from '@/constants/navbarLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white shadow-lg sticky top-0'>
            <div className='max-con py-5 flex justify-between items-center'>
                <Image
                    src='/images/logo.png'
                    width={106}
                    height={35}
                    alt='Logo Forkeycreative'
                />

                <div className='flex items-center gap-4'>
                    {navbarLinks.map((link, index) => (
                        <Link
                            href={link.path}
                            className='cursor-pointer'
                            key={index}>
                            <div className='px-3 py-1 border-2 border-transparent hover:border-b-blue-primary transition-all duration-150 ease-in-out'>{link.label}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
