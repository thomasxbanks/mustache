'use strict'

$(document).ready(function() {

    // Set the required gap to show content below the fixed header
    // This is only necessary for the current styling
    $('html').css('padding-top', ($('#masthead').height() * 1.5))


    // Events to trigger on window scroll
    jQuery(window).scroll(function(event) {
        var scroll = jQuery(window).scrollTop()

        if (jQuery(window).scrollTop() > $('#masthead').height()) {
            $('#masthead').addClass('scaled')
        } else {
            $('#masthead').removeClass('scaled')
        }
    })
})
