import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

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
                {children}
                <Analytics />
            </body>
        </html>
    )
}
