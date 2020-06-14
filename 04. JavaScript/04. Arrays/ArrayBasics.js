var friends = ["Charlie", "Liz", "David", "Mattias"]

console.log(friends[0])

//  Updating values
friends[0] = "Chuck";
friends[1] = "Lizzie";

// Initialize empty array
var friends = []

//ARRAY METHODS
// push pop
// shift unshift
// indexOf
// slice

var colors = ['red', 'orange', 'yellow']

// PUSH - add to end
colors.push("green")
// POP - remove from end
colors.pop()
// SHIFT - remove from start
colors.shift()
// UNSHIFT - add to start
colors.unshift("dark green")
// indexOf - tries to find item in array, and return first instance
colors.indexOf('orange') // 2
colors.indexOf('pink') // -1
// SLICE - copy portions of array
var red_orange = colors.slice(0,2)
var colors_copy = colors.slice() // copies entire array!