function doSomething() {
    console.log("Hello World!")
}

function square(num){
    // console.log(num*num)
    return (num*num)
}

function area(length, width){
    console.log(length*width)
}

// function declaration
function capitalize(str){
    return str.charAt(0).toUppercase() + str.slice(1)
}

// function expression - can be overwritten by reassigning to the var
var capitalize = function(str){
    return str.charAt(0).toUppercase() + str.slice(1)
}

