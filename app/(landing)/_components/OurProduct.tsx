import React from 'react'
import SliderProduct from './SliderProduct'
import { productList } from '@/constants/products'
import Image from 'next/image'

const OurProduct = () => {
    return (
        <div>
            <div className='max-con py-28'>
                <div className='text-zinc-700 text-5xl font-bold text-center uppercase max-sm:text-4xl'>
                    Our Product
                </div>
                <div className='text-zinc-400 text-lg mt-6 text-center'>
                    Forkey creative sudah berpengalaman menangani 200+ Brand
                    dari seluruh Indonesia
                </div>

                

                <SliderProduct />
            </div>
        </div>
    )
}

export default OurProduct
