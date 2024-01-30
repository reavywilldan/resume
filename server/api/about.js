import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: `
            Hello, I'm Reavy Willdan Kurniawan, a software development professional with a primary focus as a Backend Developer.
            I am committed to creating efficient and innovative technology solutions to support business needs and provide great user experience.
            In addition, I also have an interest in music, especially in music production.
        `,
        id_ID: `
            Halo, saya Reavy Willdan Kurniawan, seorang profesional di bidang pengembangan perangkat lunak dengan fokus utama sebagai Backend Developer.
            Saya berkomitmen untuk menciptakan solusi teknologi yang efisien dan inovatif untuk mendukung kebutuhan bisnis dan memberikan pengalaman pengguna yang luar biasa.
            Selain itu, saya juga memiliki minat dalam bidang musik, khususnya di bidang produksi musik.
        `,
      },
    },
    {
      id: 2,
      description: {
        en: 'English.',
        id_ID: 'Indonesia.',
      },
    },
  ]
})
