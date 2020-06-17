var numSquares = 6
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var messageDisplay = document.querySelector("#message")
var modeButtons = document.querySelectorAll(".mode")

init()

function init(){
    setupModeButtons();
    setupSquares()
    reset()
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click",function(){
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor
            // Compare color to clicked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                h1.style.backgroundColor = clickedColor
                changeColors(clickedColor)
                resetButton.textContent = 'Play again?'
            } else {
                this.style.backgroundColor = 'steelblue'
                messageDisplay.textContent = "Try Again!"
            }
        })
    }
}

function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add('selected')
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}


function reset(){
    colors = generateRandomColors(numSquares)
    // pick a new random color
    pickedColor = pickColor()
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent=''
    // change colors of squares on page
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display='block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display="none"
        }
    //     Add initial colours to squares
        
    h1.style.backgroundColor = 'steelblue'
    
}}

resetButton.addEventListener("click",function(){
    reset()
})



function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr
}


function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}