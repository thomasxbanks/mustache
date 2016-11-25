'use strict'

function filter(arr, criteria) {
    return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
            return obj[c] == criteria[c]
        })
    })
}

$('#masthead nav button').on('click', function() {
    // Define local variables
    let rule = $(this).data('rule')
    let value = $(this).data('value')

    // Toggle the active state
    $('.is-active').removeClass('is-active')
    $(this).addClass('is-active')

    // Sort the cards by the given values
    let results = filter(people, {
        [rule]: value
    })

    // Remove the existing data
    $('main').html('')

    // Display the data
    $.each(results, function(i, obj) {
        displayPerson(results[i])
    })

})
