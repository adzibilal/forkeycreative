import React from 'react'

const CallToAction = () => {
    return (
        <div className="bg-[url('/images/call-to-action.png')]" id='pricing'>
            <div className='max-con flex flex-col items-center justify-center py-[100px] gap-5 my-5'>
                <h1 className='text-5xl font-extrabold text-white'>Konsultasikan Sekarang</h1>
                <div className='text-2xl font-light text-white w-[60%] text-center mb-4'>
                    Konsultasikan mengenai bisnismu agar bisa scale up dibidang
                    digital dan menjadi yang terbaik dibidangnya!
                </div>

                <div className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-sm cursor-pointer font-bold text-white">WhatsApp Sekarang</div>
            </div>
        </div>
    )
}

export default CallToAction
