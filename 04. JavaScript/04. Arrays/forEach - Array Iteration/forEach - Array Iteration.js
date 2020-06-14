// for - iterate over array
var colors = ['red','orange','yellow','green']

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

// forEach - iterate over array (Array method)
// function called for every element in array
colors.forEach(function(color){
    console.log(color)
})

// colors.forEach(printColor)
// Don't call the function now, but later