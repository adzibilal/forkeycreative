import { navbarLinks } from '@/constants/navbarLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BiMenu} from 'react-icons/bi'


const Navbar = () => {
    return (
        <div className='bg-white shadow-lg sticky top-0 z-50'>
            <div className='max-con py-5 flex justify-between items-center'>
                <Image
                    src='/images/logo.png'
                    width={106}
                    height={35}
                    alt='Logo Forkeycreative'
                />

                <div className='flex items-center gap-4 max-md:hidden'>
                    {navbarLinks.map((link, index) => (
                        <Link
                            href={link.path}
                            className='cursor-pointer'
                            key={index}>
                            <div className='px-3 py-1 border-2 border-transparent hover:border-b-blue-primary transition-all duration-150 ease-in-out'>{link.label}</div>
                        </Link>
                    ))}
                </div>

                <div className="hidden max-md:block text-4xl cursor-pointer">
                    <BiMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
