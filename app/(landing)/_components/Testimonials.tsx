import { testimonials } from '@/constants/testimonial'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className='bg-zinc-50'>
            <div className='max-con py-28'>
                <div className='text-zinc-700 text-5xl font-bold text-center uppercase'>
                    Testimonials
                </div>
                <div className='text-zinc-400 text-lg mt-6 text-center'>
                    Kata Mereka
                </div>

                <div className='grid grid-cols-3 gap-5 mt-10'>
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-xl shadow-sm p-5'>
                            <div className='flex gap-1 mb-2 items-center text-yellow-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='font-bold'>{item.name}</div>
                            <div className='text-sm text-zinc-400'>
                                {item.job}
                            </div>

                            <hr className='border-zinc-100 my-5' />

                            <div className='italic text-zinc-400'>
                                {item.comment}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
