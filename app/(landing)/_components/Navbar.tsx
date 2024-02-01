'use client'
import { navbarLinks } from '@/constants/navbarLinks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleClickMenu = () => {
        if (showMenu) {
            setShowMenu(false)
        }
    }

    return (
        <div className='bg-white shadow-lg sticky top-0 z-50'>
            <div className='max-con py-5 flex justify-between items-center relative'>
                <Image
                    src='/images/logo.png'
                    width={106}
                    height={35}
                    alt='Logo Forkeycreative'
                />

                <div
                    className={`flex items-center gap-4 max-md:absolute max-md:bg-white max-md:top-[100%] max-md:left-0 max-md:w-full overflow-hidden max-md:flex-col max-md:py-5 transition-all duration-200 ease-in-out ${
                        showMenu
                            ? 'max-md:h-max'
                            : 'max-md:h-0 max-md:!p-0'
                    } `}>
                    {navbarLinks.map((link, index) => (
                        <Link
                            href={link.path}
                            onClick={handleClickMenu}
                            className='cursor-pointer'
                            key={index}>
                            <div className='px-3 py-1 border-2 border-transparent hover:border-b-blue-primary transition-all duration-150 ease-in-out'>
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>

                <div
                    onClick={toggleMenu}
                    className='hidden max-md:block text-4xl cursor-pointer'>
                    <BiMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
