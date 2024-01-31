import React from 'react'
import SliderProduct from './SliderProduct'

const OurProduct = () => {
    return (
        <div>
            <div className='max-con py-28'>
                <div className='text-zinc-700 text-5xl font-bold text-center uppercase'>
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
