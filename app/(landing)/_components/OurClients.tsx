import { clientLogo } from '@/constants/client'
import Image from 'next/image'
import React from 'react'

const OurClients = () => {

    return (
        <div>
            <div className='max-con py-28'>
                <div className='text-zinc-700 text-5xl font-bold text-center uppercase max-sm:text-4xl'>
                    Our Clients
                </div>
                <div className='text-zinc-400 text-lg mt-6 text-center'>
                    Forkey creative sudah berpengalaman menangani 200+ Brand
                    dari seluruh Indonesia
                </div>

                <div className='mt-10 max-w-screen-xl flex flex-wrap gap-6 mx-auto items-center justify-center'>
                    {clientLogo.map((imageName, index) => (
                        <Image
                            key={index}
                            width={100}
                            height={100}
                            alt=''
                            src={`${imageName}`}
                            className='aspect-square rounded-full object-contain'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients
