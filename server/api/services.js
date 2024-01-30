import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'PHP',
      description: {
        en: 'PHP is a programming language that I use to develop web applications, especially back end applications.',
        id_ID: 'PHP adalah bahasa pemrograman yang saya gunakan untuk mengembangkan aplikasi web, terutama aplikasi back end.',
      },
      icon: 'devicon:php',
      image: null,
    },
    {
      id: 2,
      title: 'Laravel',
      description: {
        en: 'I use Laravel as a PHP framework to develop web applications, especially back end applications.',
        id_ID: 'Saya menggunakan Laravel sebagai framework PHP untuk mengembangkan aplikasi web, terutama aplikasi back end.',
      },
      icon: 'devicon:laravel',
      image: null,
    },
    {
      id: 3,
      title: 'Javascript',
      description: {
        en: 'Javascript is the programming language I use to develop web applications from both the front end and back end.',
        id_ID: 'Javascript adalah bahasa pemrograman yang saya gunakan untuk mengembangkan aplikasi web baik dari sisi front end maupun back end.',
      },
      icon: 'devicon:javascript',
      image: null,
    },
    {
      id: 4,
      title: 'Node.js',
      description: {
        en: 'Node.js is a runtime platform that allows you to run Javascript on the server side, I use this tool to develop back end applications.',
        id_ID: 'Node.js adalah sebuah platform runtime yang memungkinkan Anda menjalankan Javascript di sisi server, tool ini saya gunakan untuk mengembangkan aplikasi back end.',
      },
      icon: 'devicon:nodejs',
      image: null,
    },
    {
      id: 5,
      title: 'Express.js',
      description: {
        en: 'I use Express.js as a Node.js framework to develop web applications, especially back end applications.',
        id_ID: 'Saya menggunakan Express.js sebagai kerangka kerja Node.js untuk mengembangkan aplikasi web, terutama aplikasi back end.',
      },
      icon: 'devicon:express',
      image: null,
    },
    {
      id: 6,
      title: 'Vue.js',
      description: {
        en: 'I use Vue, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
        id_ID: 'Terkadang saya juga menggunakan Vue, framework JavaScript dan Typescript sumber terbuka modern, ketika membuat website maupun aplikasi.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
  ]
})
