// Changing style
// Adding & Removing class
// Changing content of tag
// Changing attributes

var tag = document.getElementById("highlight")

tag.style.color = 'blue'
tag.style.border = '10px solid red'
tag.style.fontSize = "70px"
tag.style.background = 'yellow'
tag.style.marginTop = '200px'

// Alternative - define all inside 'highlight' class
tag.classList.add("highlight-class")
tag.classList.remove("previous-class")
tag.classList.toggle("removeifPresent-addifNot")