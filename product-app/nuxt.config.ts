// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        modules: [
          '@nuxtjs/tailwindcss'
        ], 
        //..Meta data 
        app: {
          head: {
            title: 'App Buy',
            meta: [
              {
                name: 'description',
                content: 'Best place to buy your products'
              }
            ], 
            //..Material Icon link
            link: [
              {
                rel: "stylesheet", 
                 href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
              }
            ]
          }
        },
        //..configure the .env file to be accessed in the frontend but wont be exposed to users
        runtimeConfig: {
          currencyKey: process.env.CURRENCY_API_KEY
        }
})
        

// rel: 'stylesheet', 
// href: 'https://fonts.googleapis.com/icon?family=Material+Icons'