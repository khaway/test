const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');


mix.options({
    processCssUrls: false,
    postCss: [
        tailwindcss('tailwind.config.js'),
    ]
})

mix.postCss('resources/postcss/style.css', 'public/css')

