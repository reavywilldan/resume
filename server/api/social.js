import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
    return [
        {
            id: 1,
            name: 'LINKEDIN',
            displayName: 'Reavy Willdan Kurniawan',
            link: 'https://www.linkedin.com/in/reavy-willdan-kurniawan-0b57a6179/',
            icon: 'logo-linkedin'
        },
        {
            id: 2,
            name: 'GITHUB',
            displayName: 'Reavy Willdan',
            link: 'https://github.com/reavywilldan/',
            icon: 'logo-github'
        },
        {
            id: 3,
            name: 'INSTAGRAM',
            displayName: 'Reavy Willdan Kurniawan',
            link: 'https://www.instagram.com/reavywilldan_/',
            icon: 'logo-instagram'
        },
    ]
})
