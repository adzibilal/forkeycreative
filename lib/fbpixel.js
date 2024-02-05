export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
    window.fbq('track', 'PageView')
}

export const btnWhatsApp = () => {
    window.fbq('track', 'btnWhatsApp')
}

export const btnPromo = () => {
    window.fbq('track', 'btnPromo')
}

export const btnFloatingWa = () => {
    window.fbq('track', 'btnFloatingWa')
}

export const clickSlider = () => {
    window.fbq('track', 'clickSlider')
}
// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
    window.fbq('track', name, options)
}