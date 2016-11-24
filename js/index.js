'use strict'

function displayPerson(person) {
    $.get('templates/card-person.html', function(templates) {
        const template = $(templates).filter('#tmplPerson').html()
        const main = document.querySelector('main')
        const container = document.createElement('article')
        const content = Mustache.render(template, person)
        container.className = 'card-person'
        container.innerHTML = content
        main.appendChild(container)
    })
}

function filter(arr, criteria) {
    return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
            return obj[c] == criteria[c]
        })
    })
}

$(document).ready(function() {

    // Set the required gap to show content below the fixed header
    // This is only necessary for the current styling
    $('html').css('padding-top', ($('#masthead').height() * 1.5))


    // Create an empty array to drop all the data in once the call is successful
    const people = []

    // Get all of the people
    $.get('data/person.json', function(data) {
        $.each(data, function(i, obj) {
            displayPerson(data[i]) // Show each piece of data
            people.push(data[i]) // Store each piece of data in the array
        })
    })

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
