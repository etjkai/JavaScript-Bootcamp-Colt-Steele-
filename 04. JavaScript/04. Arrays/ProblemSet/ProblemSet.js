function printReverse(array_input) {
    for (let i = array_input.length -1; i >= 0; i--) {
        console.log(array_input[i])
    }
}

function isUniform(array_input) {
    var first = array_input[0]
    for (let i = 1; i < array.length; i++) {
        if (i !== first){
            return false
        }
    }
    return true
}
// forEach has a function within. Writing a function that has a forEach, a return will only peel back from the inner function
// will always return True

function sumArray(array_input) {
    var total = 0
    array_input.forEach(function(x){
        total += x
    })
    return total
}

function max(array_input){
    bench = 0
    array_input.forEach(function(x){
        if (x > bench){
            bench = x
        }})
return bench
}