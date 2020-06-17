// Clicking | Hovering  | Drag & Drop

// Select Element & Add Event Listener (Manipulation)
// element.addEventListener(type, functionToCall)

var button = document.querySelector('button')
var paragraph = document.querySelector("p")

// Using an anonymous function
button.addEventListener('click', function(){
    paragraph.textContent = "Someone clicked the button!"
})

// Adding Event Listeners to many elements
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
        this.style.color = 'purple'
    })
    
}

// Using a named function
function changeText(){
    paragraph.textContent = "Someone clicked the button"
}

button.addEventListener("click", changeText)