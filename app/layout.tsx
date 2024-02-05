import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import FacebookPixel from './_components/FacebookPixel'
import Head from 'next/head'

const motserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'FORKEY CREATIVE',
    description: 'Elevating Your Brand'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={motserrat.className}>
                <Head>
                    <meta
                        property='og:image'
                        content='/images/meta-img.png'
                    />
                    <meta property='og:image:width' content='1900' />
                    <meta property='og:image:height' content='950' />
                </Head>
                {children}
                <Analytics />
                <FacebookPixel />
                <Toaster />
            </body>
        </html>
    )
}
