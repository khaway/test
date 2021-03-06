const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.options({
    processCssUrls: false,
    postCss: [
        tailwindcss('tailwind.config.js'),
    ]
})

mix.postCss('resources/postcss/outline.css', 'public/css')
mix.postCss('resources/postcss/style.css', 'public/css')
mix.js('resources/js/app.js', 'public/js')

