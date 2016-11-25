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

// Create an empty array to drop all the data in once the call is successful
const people = []

// Get all of the people
$.get('data/person.json', function(data) {
    $.each(data, function(i, obj) {
        displayPerson(data[i]) // Show each piece of data
        people.push(data[i]) // Store each piece of data in the array
    })
})
