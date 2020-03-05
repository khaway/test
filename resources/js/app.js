import Vue from 'vue'
import App from "./App.vue";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

window.$ = require('jquery')

$(document).ready(function() {
    $('#sidebar-btn, #sidebar-btn2').on('click', function() {
        $('#sidebar').toggleClass('visible hidden');
    });
});

var slider = tns({
    container: '.autoplay',
    items: 1,
    speed: 200,
    mouseDrag: true,
    // autoplayButtonOutput: false,
    swipeAngle: false,
    controls: false,
    controlsText: Array,
    nav: true,
    navPosition: top
});

//
// const app = new Vue({
//    el: '#app',
//    render: h => h(App)
// });

