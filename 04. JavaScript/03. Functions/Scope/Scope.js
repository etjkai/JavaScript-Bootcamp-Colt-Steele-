// Situation 1: y is overwritten inside scope
var y = 99

function doMoreMath(){
    y = 100
    console.log(y)
}


// Situation 2: Create a new "phrase" that only exists within scope
var phrase = 'hi there'

function doSomething(){
    var phrase= "goodbye"
    console.log(phrase)
}

// Scope is not shared across functions