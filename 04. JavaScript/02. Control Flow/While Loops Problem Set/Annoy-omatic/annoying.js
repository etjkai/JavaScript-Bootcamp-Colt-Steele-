// Version 1 
// var answer = prompt("Are we there yet?")

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

// alert("Yay! We made it.")

// answer.indexOf("")

// Version 2 - detect if "yes" is contained in answer
var answer = prompt("Are we there yet?")

while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("Yay! We made it.")

answer.indexOf("")