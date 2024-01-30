import Image from 'next/image'
import React from 'react'

const OurClients = () => {
    const clientImages = Array.from(
        { length: 36 },
        (_, index) => `c${index + 1}.png`
    )

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

                <div className='mt-5 flex flex-wrap gap-5 items-center justify-center'>
                    {clientImages.map((imageName, index) => (
                        <Image
                            key={index}
                            width={100}
                            height={100}
                            alt=''
                            src={`/client/${imageName}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients
