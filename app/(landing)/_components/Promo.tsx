'use client'
import { promoNotif } from '@/constants/promo'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import * as pixel from '@/lib/fbpixel'

const Promo = () => {
    const [showModal, setShowModal] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const listPromo = promoNotif

    const showToast = () => {
        toast.dismiss();
        const randomIndex = Math.floor(Math.random() * listPromo.length)
        const randomPromo = listPromo[randomIndex]

        toast.custom(
            t => (
                <div
                    className={`${
                        t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 relative ring-black ring-opacity-5`}>
                    <div className='flex-1 w-0 p-4'>
                        <div className='flex items-start'>
                            <div className='flex-shrink-0 pt-0.5'>
                                <Image
                                    className='h-10 w-10 rounded-full'
                                    src={randomPromo.image}
                                    width={100}
                                    height={100}
                                    alt=''
                                />
                            </div>
                            <div className='ml-3 flex-1'>
                                <p className='text-sm font-medium text-gray-900'>
                                    {randomPromo.name}
                                </p>
                                <p className='mt-1 text-xs text-gray-500'>
                                    {randomPromo.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-[5px] right-[5px]'>
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className='text-indigo-600 hover:text-indigo-500 text-xl'>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            ),
            {
                duration: 4000,
                position: 'bottom-center'
            }
        )
    }

    const hideModal = () => {
        Swal.fire({
            title: 'Kamu Yakin ?',
            text: 'Promo ini diskon hanya untuk 10 orang aja loh!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
        }).then(result => {
            if (result.isConfirmed) {
                setShowModal(false)
                setIsClosed(true)
            }
        })
    }

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage =
                (window.scrollY /
                    (document.documentElement.scrollHeight -
                        window.innerHeight)) *
                100

            if (scrollPercentage >= 35 && !showModal && !isClosed) {
                setShowModal(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isClosed, showModal])

    useEffect(() => {
        const intervalId = setInterval(() => {
            showToast()
        }, Math.floor(Math.random() * (15000 - 9000 + 1)) + 5000)

        // Membersihkan interval ketika komponen unmount
        return () => clearInterval(intervalId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            className={`modal-promo ${
                !showModal ? 'hidden' : ''
            } fixed bottom-0 left-0 w-screen h-screen bg-zinc-900/80 z-50 flex items-center justify-center`}>
            <div className='bg-blue-primary max-w-md p-5 rounded-lg relative max-sm:mx-5'>
                <div
                    className='absolute right-3 top-3 text-white text-xl cursor-pointer'
                    onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        hideModal()
                    }}>
                    <AiOutlineClose />
                </div>
                <div className='text-white mb-5 text-md text-center'>
                    DISKON KHUSUS UNTUK 10 ORANG CLIENT DIHARI INI AKAN
                    MENDAPATKAN POTONGAN HARGA SEBESAR <b>Rp. 200.000</b>!
                </div>
                <div
                    onClick={handleCta}
                    className='bg-yellow-primary font-bold py-2 px-3 text-center rounded-md cursor-pointer'>
                    Whatsapp Sekarang
                </div>
            </div>
        </div>
    )
}

export default Promo
