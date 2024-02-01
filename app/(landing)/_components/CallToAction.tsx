import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
    return (
        <div className="bg-[url('/images/call-to-action.png')]" id='pricing'>
            <div className='max-con flex flex-col items-center justify-center py-[100px] gap-5 my-5'>
                <h1 className='text-5xl font-extrabold text-white max-sm:text-4xl max-sm:text-center'>
                    Konsultasikan Sekarang
                </h1>
                <div className='text-2xl font-light text-white w-[60%] text-center mb-4 max-sm:text-lg max-sm:w-full max-lg:w-full'>
                    Konsultasikan mengenai bisnismu agar bisa scale up dibidang
                    digital dan menjadi yang terbaik dibidangnya!
                </div>

                <Link
                    href={
                        'https://api.whatsapp.com/send?phone=6285173076203&text=Halo%20Forkey%20Creative%20saya%20ingin%20bekerja%20sama%20%F0%9F%91%8B'
                    }
                    target='_blank'>
                    <div className='bg-green-500 hover:bg-green-600 px-5 py-2 rounded-sm cursor-pointer font-bold text-white'>
                        WhatsApp Sekarang
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction
