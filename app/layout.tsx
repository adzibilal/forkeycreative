import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import FacebookPixel from './_components/FacebookPixel'
import { url } from 'inspector'

const motserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'FORKEY CREATIVE',
    description: 'Elevating Your Brand',
    openGraph: {
        title: 'FORKEY CREATIVE',
        description: 'Elevating Your Brand',
        url: 'https://forkeycreative.com',
        siteName: 'Next.js',
        images: [
            {
                url: 'https://forkeycreative.com/api/og',
                width: 1200,
                height: 630,
                alt: 'Forkey Creative'
            },
        ]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={motserrat.className}>
                {children}
                <Analytics />
                <FacebookPixel />
                <Toaster />
            </body>
        </html>
    )
}
