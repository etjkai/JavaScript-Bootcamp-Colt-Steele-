function sing(){
    console.log("Twinkle twinkle...");
    console.log("How I wonder how you are");
}

// Higher Order function - Function passed to another function
// setInterval(anotherFunc, interval)
setInterval(sing, 5000)

// Anonymous function
setInterval(function(){
    alert("Hi stupid"),
    console.log("I am an anonymous function!")
}, 2000)