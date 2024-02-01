import Image from 'next/image'
import React from 'react'
import SliderCLient from './SliderCLient'

const KeyValue = () => {
    return (
        <div className='bg-white py-20' id='marketing'>
            <div className='max-con'>
                <div className='grid grid-cols-2 mb-10 max-lg:flex max-lg:flex-col-reverse'>
                    <div className='flex flex-col items-start justify-center max-lg:text-center max-lg:items-center'>
                        <div className='text-sm text-blue-primary'>
                            FORKEY CREATIVE MENGHADIRKAN
                        </div>
                        <div className='font-bold text-5xl mt-5 mb-3 max-sm:text-4xl'>
                            Jasa Profesional
                        </div>
                        <div className='text-zinc-400 text-justify max-lg:text-center max-sm:text-sm'>
                            Untuk membantu optimasi brand kamu dan membantu
                            meningkatkan performa bisnis kamu secara
                            berkelanjutan. Melalui penerapan strategi digital
                            marketing dan pengelolaan social media yang tepat,
                            kamu akan mendapatkan peningkatan awareness terhadap
                            brand atau produk-produk kamu, pertumbuhan impresi
                            dan reach serta engagement, sehingga dapat
                            meningkatkan bisnis online kamu secara menyeluruh.
                        </div>
                    </div>
                    <div className='flex items-center justify-center max-lg:mb-10'>
                        <Image
                            src='/images/img1.png'
                            width={1000}
                            height={1000}
                            alt=''
                            className='w-full max-lg:w-[80%]'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 mb-10 max-lg:flex max-lg:flex-col'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src='/images/img2.png'
                            width={1000}
                            height={1000}
                            alt=''
                            className='w-full'
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center max-lg:text-center max-lg:items-center max-lg:mt-10'>
                        <div className='text-sm text-blue-primary'>
                            #ELEVATINGYOURBRAND
                        </div>
                        <div className='font-bold text-4xl mt-5 mb-3 max-sm:text-2xl'>
                            Forkey Creative membantu bisnismu untuk scale up
                            dibidang digital
                        </div>
                        <div className='text-zinc-400 text-justify max-lg:text-center max-sm:text-sm'>
                            Dengan Tim yang professional dan berpengalaman,
                            mampu memberikan hasil yang memuaskan tanpa harus
                            capek dan bingung mengurusnya sendiri.
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 mb-20 max-lg:flex max-lg:flex-col'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src='/images/img3.png'
                            width={1000}
                            height={1000}
                            alt=''
                            className='w-full'
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center max-lg:items-center max-lg:mt-10'>
                        <div className='text-sm text-blue-primary mb-2'>
                            #ELEVATINGYOURBRAND
                        </div>
                        <div className='text-zinc-400 text-justify max-lg:text-center max-sm:text-sm'>
                            Berdasarkan pengalaman, Brand yang mampu membuat
                            konten sesuai dengan target audiencenya mampu
                            menjadi top of mind di market, mengalahkan
                            kompetitornya bahkan meningkatkan penjualannya
                            hingga ratusan kali lipat!
                        </div>
                    </div>
                </div>

                <SliderCLient  />
            </div>
        </div>
    )
}

export default KeyValue
