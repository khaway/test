window.$ = require('jquery')

$(document).ready(function() {
    $('#sidebar-btn, #sidebar-btn2').on('click', function() {
        $('#SidenavToggler').find('img').toggle();
        $('#sidebar').toggleClass('visible hidden');
    });
});
