// initfor (init; condition; step) {
//     run some code
// }
// Declare variable and set to initial value
// When loop should keep running
// What to do at end of iteration

// // Example 1
// for (var count = 0; count < 6; count++) {
//     console.log(count)
// }

// // Example 2
// var string='hello, this is a very long string!'
// for (var i = 0; i < string.length; i++) {
//     console.log(string[i])
// }


// Problem 1
for (var i = -10; i<20; i++) {
    console.log(i)
}

// Problem 2
for (var j = 10; j < 40; j+= 2) {
    console.log(j)
}

// Problem 3
for (let k = 301; k <= 333; k+=2) {
    console.log(k)
}

for (let m = 300; m <= 333; m++){
    if (m%2 === 1){
        console.log(m)
    }
}

// Problem 4
for (let l = 5; l<=50; l++){
    if (l%5 === 0 && l%3 ===0){
        console.log(l)
    }
}