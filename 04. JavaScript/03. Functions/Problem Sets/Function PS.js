function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    return false
}

function factorial(num){
    var number = 1
    for (var i = 1; i <= num; i++){
        number = number * i
    }
    return number
}

function kebabToSnake(str){
    return str.replace("-","_")
}