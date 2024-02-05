'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

import Image from 'next/image'
import * as pixel from '@/lib/fbpixel'


const SliderHero = () => {
    function handleClickSlider() {
        pixel.clickSlider()

        const text = `Halo Forkey Creative saya ingin bekerja sama 👋`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6285173076203&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }

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
                            <div onClick={handleClickSlider} className='cursor-pointer'>
                                <Image
                                    className='aspect-[21/9] max-md:hidden object-cover'
                                    src='/images/slider-1.png'
                                    width={1900}
                                    height={900}
                                    alt=''
                                    loading='eager'
                                />
                                <Image
                                    className='hidden max-md:block object-cover'
                                    src='/images/m-slider-1.png'
                                    width={1024}
                                    height={768}
                                    alt=''
                                    loading='eager'
                                />
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div onClick={handleClickSlider} className='cursor-pointer'>
                                <Image
                                    className='aspect-[21/9] max-md:hidden object-cover'
                                    src='/images/slider-1.png'
                                    width={1900}
                                    height={900}
                                    alt=''
                                    loading='eager'
                                />
                                <Image
                                    className='hidden max-md:block object-cover'
                                    src='/images/m-slider-1.png'
                                    width={1024}
                                    height={768}
                                    alt=''
                                    loading='eager'
                                />
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SliderHero
