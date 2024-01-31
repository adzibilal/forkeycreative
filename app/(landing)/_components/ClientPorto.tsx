import { clientPorto } from '@/constants/client'
import Image from 'next/image'
import React from 'react'

const ClientPorto = () => {

    return (
        <div>
            <div className='max-con py-28'>
                <div className='text-zinc-700 text-5xl font-bold text-center uppercase'>
                    Our Clients
                </div>
                <div className='text-zinc-400 text-lg mt-6 text-center'>
                    Forkey creative sudah berpengalaman menangani 200+ Brand
                    dari seluruh Indonesia
                </div>


                <div className="grid grid-cols-3 gap-5 mt-10">
                    {clientPorto.map((item, index) => (
                        <div className="rounded-md overflow-hidden relative group hover:shadow-lg" key={index}>
                            <Image src={item.image} width={1000} height={1000} alt='' className='group-hover:scale-105 transition-all duration-500 ease-out'/>
                            <div className="absolute bg-white bottom-[-100%] group-hover:bottom-0 p-3 w-full transition-all duration-300 ease-out">
                                <div className="">{item.name}</div>
                                <div className="">{item.category}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ClientPorto
