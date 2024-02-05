/* eslint-disable */
// @ts-nocheck
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
    const imageData = await fetch(
        new URL('../../../public/images/meta-img.png', import.meta.url)
    ).then(res => res.arrayBuffer())

    return new ImageResponse(
        (
            <div tw='flex flex-col w-full h-full items-center justify-center'>
                <img tw='h-full object-cover' src={imageData} alt='' />
            </div>
        )
    )
}
