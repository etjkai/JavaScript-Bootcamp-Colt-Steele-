// Document Methods

// getElementByID()
var tag = document.getElementById("highlighted")

// getElementsByClassName()
var tags = document.getElementsByClassName("bolded")
console.log(tags[1])
console.dir(tags[0]) // display it as a JS object with properties
// Node List - cannot use forEach loop

// getElementsByTagName()  [like li, or h1, body, head]
var tags = document.getElementsByTagName("h1")
tags[0].style.color='green'

// querySelector() - return FIRST matches with given CSS style selector
var tag_qs_1 = document.querySelector('#highlighted')
var tag_qs_2 = document.querySelector('.bolded')
var tag_qs_3 = document.querySelector('h1')
// e.g. var tag_qs_4 = document.querySelector('li a.special')

console.log(tag_qs_1)
console.log(tag_qs_2)
console.log(tag_qs_3)

// querySelectorAll() - return ALL elements that match
var lis = document.querySelectorAll("li")
console.log(lis)


document.getElementById("first")
document.getElementsByClassName("special")
document.getElementsByTagName("p")[0]
document.querySelector("p")