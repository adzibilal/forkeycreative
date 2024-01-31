'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'

const SliderCLient = () => {
    const clientImages = Array.from(
        { length: 14 },
        (_, index) => `client${index + 1}.png`
    )

    return (
        <div className='my-10'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                className='mySwiper'>
                {clientImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={`/images/${img}`} width={500} height={100} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderCLient
