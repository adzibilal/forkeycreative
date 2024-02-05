'use client'
import Link from 'next/link'
import React from 'react'
import * as pixel from '@/lib/fbpixel'

const CallToAction = () => {
    const handleCta = () => {
        pixel.btnWhatsApp()

        const text = `Halo Forkey Creative saya ingin bekerja sama 👋`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6285173076203&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }
    return (
        <div className="bg-[url('/images/call-to-action.png')]" id='pricing'>
            <div className='max-con flex flex-col items-center justify-center py-[100px] gap-5 my-5'>
                <h1 className='text-5xl font-extrabold text-white max-sm:text-4xl max-sm:text-center'>
                    Konsultasikan Sekarang
                </h1>
                <div className='text-2xl font-light text-white w-[60%] text-center mb-4 max-sm:text-lg max-sm:w-full max-lg:w-full'>
                    Konsultasikan mengenai bisnismu agar bisa scale up dibidang
                    digital dan menjadi yang terbaik dibidangnya!
                </div>

                <div onClick={handleCta} className='bg-green-500 hover:bg-green-600 px-5 py-2 rounded-sm cursor-pointer font-bold text-white'>
                    WhatsApp Sekarang
                </div>
            </div>
        </div>
    )
}

export default CallToAction
