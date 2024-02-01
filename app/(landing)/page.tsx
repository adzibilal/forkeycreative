import Image from 'next/image'
import Hero from './_components/Hero'
import CallToAction from './_components/CallToAction'
import OurClients from './_components/OurClients'
import KeyValue from './_components/KeyValue'
import OurProduct from './_components/OurProduct'
import Testimonials from './_components/Testimonials'
import ClientPorto from './_components/ClientPorto'
import Promo from './_components/Promo'

export default function Home() {
    return (
        <div className=''>
            <Hero />
            <KeyValue />
            <Testimonials />
            <ClientPorto />
            <OurProduct />
            <OurClients />
            <CallToAction />
            <Promo />
        </div>
    )
}
