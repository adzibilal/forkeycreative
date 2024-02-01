'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules';

import Image from 'next/image'
import { productList } from '@/constants/products'

const SliderProduct = () => {
    return (
        <div className='my-10'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                loop={true}
                modules={[Autoplay]}
                className='mySwiper'>
                {productList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='border border-zinc-300 rounded-xl overflow-hidden cursor-grab group'>
                            <div className='w-full aspect-square p-5 overflow-hidden'>
                                <Image
                                    src={`${item.image}`}
                                    width={300}
                                    height={300}
                                    alt=''
                                    className='w-full aspect-square object-cover group-hover:scale-110 transition-all ease-in-out duration-500'
                                />
                            </div>
                            <div className='bg-blue-primary text-left p-5'>
                                <div className='font-bold text-yellow-primary mb-2'>
                                    {item.title}
                                </div>
                                <div className='text-sm text-white'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderProduct
