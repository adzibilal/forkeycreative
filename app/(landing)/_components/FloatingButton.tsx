'use client'
import React from 'react'
import * as pixel from '@/lib/fbpixel'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButton = () => {
    const handleCta = () => {
        pixel.btnFloatingWa()

        const text = `Halo Forkey Creative saya ingin bekerja sama 👋`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6285173076203&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }
    return (
        <div
            onClick={handleCta}
            className='fixed bottom-5 right-5 rounded-full bg-green-500 hover:bg-green-600 text-4xl text-white p-2 cursor-pointer'>
            <FaWhatsapp />
        </div>
    )
}

export default FloatingButton
