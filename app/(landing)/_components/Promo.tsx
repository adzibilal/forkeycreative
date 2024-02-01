'use client'
import { promoNotif } from '@/constants/promo'
import Image from 'next/image'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

import { AiOutlineClose } from 'react-icons/ai'

const Promo = () => {
    const listPromo = promoNotif

    const showToast = () => {
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
    useEffect(() => {
        const intervalId = setInterval(() => {
            showToast()
        }, Math.floor(Math.random() * (15000 - 9000 + 1)) + 5000)

        // Membersihkan interval ketika komponen unmount
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className='fixed bottom-5 left-5 bg-blue-primary max-w-[350px] p-5 rounded-lg'>
            <div className='text-white mb-2 text-md'>
                DISKON KHUSUS UNTUK 10 ORANG CLIENT DIHARI INI AKAN MENDAPATKAN
                POTONGAN HARGA SEBESAR <b>Rp. 200.000</b>!
            </div>
            <div className='bg-yellow-primary font-bold py-2 px-3 text-center rounded-md cursor-pointer'>
                Whatsapp Sekarang
            </div>
        </div>
    )
}

export default Promo
