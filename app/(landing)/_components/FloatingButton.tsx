'use client'
import React from 'react'
import * as pixel from '@/lib/fbpixel'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButton = () => {
    const handleCta = () => {
        pixel.btnFloatingWa()

        const text = `Halo Forkey Creative saya ingin bekerja sama 👋`

        // Mendefinisikan dua nomor telepon
        const phoneNumber1 = '6285173076203'
        const phoneNumber2 = '6282129933883'

        // Memilih nomor telepon secara acak
        const randomNumber = Math.random()
        const selectedPhoneNumber =
            randomNumber < 0.5 ? phoneNumber1 : phoneNumber2

        // Membuat URL WhatsApp dengan nomor telepon yang dipilih secara dinamis
        const waURL = `https://api.whatsapp.com/send?phone=${selectedPhoneNumber}&text=${encodeURIComponent(
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
