'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { productList } from '@/constants/products'
import { motion } from 'framer-motion'

const SliderProduct = () => {
    return (
        <div className='my-10'>
            <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
                {productList.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        
                        key={index}
                        className='border border-zinc-300 rounded-xl overflow-hidden cursor-grab group'>
                        <div className='w-full aspect-square p-5 overflow-hidden'>
                            <Image
                                src={`${item.image}`}
                                width={300}
                                height={300}
                                alt=''
                                className='w-full aspect-square object-cover group-hover:scale-110 transition-all ease-in-out duration-500'
                            />
                        </div>
                        <div className='bg-blue-primary text-left p-5 h-full'>
                            <div className='font-bold text-yellow-primary mb-2'>
                                {item.title}
                            </div>
                            <div className='text-sm text-white'>
                                {item.description}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SliderProduct
