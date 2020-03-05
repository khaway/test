window.$ = require('jquery')

$(document).ready(function() {
    $('#sidebar-btn, #sidebar-btn2').on('click', function() {
        $('#sidebar').toggleClass('visible hidden');
    });
});
