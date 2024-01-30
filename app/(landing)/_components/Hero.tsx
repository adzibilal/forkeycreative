import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-zinc-50'>
            <div className='max-con min-h-[80vh] flex items-center'>
                <div className='grid grid-cols-[2fr_3fr] items-center w-full'>
                    <Image
                        width={1000}
                        height={500}
                        alt=''
                        src='/images/hero.png'
                        className='h-[70vh] w-auto mx-auto'
                    />
                    <div className=''>
                        <div className='text-blue-primary tracking-widest'>
                            FORKEY CREATIVE
                        </div>
                        <div className='text-zinc-800 text-5xl leading-[50px] mt-2'>
                            Bingung Gimana <br />{' '}
                            <span className='font-bold'>
                                Caranya Bikin Konten?
                            </span>
                        </div>
                        <div className='text-zinc-400 text-2xl mt-5'>
                            Padahal target penjualan masih jauh. Gausah <br />{' '}
                            bingung lagi, FORKEY CREATIVE BANTU!
                        </div>

                        <div className='bg-blue-primary hover:bg-blue-900 px-5 py-2 cursor-pointer text-white w-max rounded-md mt-7'>
                            Hubungi Sekarang
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
