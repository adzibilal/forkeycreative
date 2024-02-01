import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-zinc-50'>
            <div className='max-con min-h-[80vh] flex items-center max-lg:pb-20'>
                <div className='grid grid-cols-[2fr_3fr] max-lg:grid-cols-1 items-center w-full'>
                    <Image
                        width={1000}
                        height={500}
                        alt=''
                        src='/images/hero.png'
                        className='h-[70vh] max-lg:h-[55vh] w-auto mx-auto max-sm:mt-10'
                    />
                    <div className='max-lg:text-center max-lg:mt-5'>
                        <div className='text-blue-primary tracking-widest'>
                            FORKEY CREATIVE
                        </div>
                        <div className='text-zinc-800 text-5xl leading-[50px] mt-2 max-sm:text-4xl'>
                            Bingung Gimana <br />{' '}
                            <span className='font-bold'>
                                Caranya Bikin Konten?
                            </span>
                        </div>
                        <div className='text-zinc-400 text-2xl mt-5 max-sm:text-sm'>
                            Padahal target penjualan masih jauh. Gausah <br />{' '}
                            bingung lagi, FORKEY CREATIVE BANTU!
                        </div>
                        <Link
                            href={
                                'https://api.whatsapp.com/send?phone=6285173076203&text=Halo%20Forkey%20Creative%20saya%20ingin%20bekerja%20sama%20%F0%9F%91%8B'
                            }
                            target='_blank'>
                            <div className='bg-blue-primary hover:bg-blue-900 px-5 py-2 cursor-pointer text-white w-max rounded-md mt-7 max-lg:mx-auto'>
                                Hubungi Sekarang
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
