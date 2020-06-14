// Adding methods to Objects: Adding function as a property
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    add: function(x,y){
        return x + y
    }
}
// obj.add(2,5) = 7


// 'this' keyword

var comments = {
    data: ['Good Job',"Hello","Goodbye"]
}

comments.print = function(){
    // References the  comments Object - no need to accept an argument
    this.data.forEach(function(elem){
        console.log(elem)
    })
}