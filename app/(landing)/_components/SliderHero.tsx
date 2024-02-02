'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

import Image from 'next/image'
import Link from 'next/link'

const SliderHero = () => {
    return (
        <div className='bg-white'>
            <div className='max-con pb-10 pt-10'>
                <div className='rounded-xl overflow-hidden'>
                    <Swiper
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 1
                            }
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className='mySwiper'>
                        <SwiperSlide>
                            <Link href={'/'}>
                                <Image
                                    className='aspect-[21/9] max-md:hidden object-cover'
                                    src='/images/slider-1.png'
                                    width={1900}
                                    height={900}
                                    alt=''
                                />
                                <Image
                                    className='hidden max-md:block object-cover'
                                    src='/images/m-slider-1.png'
                                    width={1024}
                                    height={768}
                                    alt=''
                                />
                            </Link>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Link href={'/'}>
                                <Image
                                    className='aspect-[21/9] max-md:hidden object-cover'
                                    src='/images/slider-1.png'
                                    width={1900}
                                    height={900}
                                    alt=''
                                />
                                <Image
                                    className='hidden max-md:block object-cover'
                                    src='/images/m-slider-1.png'
                                    width={1024}
                                    height={768}
                                    alt=''
                                />
                            </Link>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SliderHero
