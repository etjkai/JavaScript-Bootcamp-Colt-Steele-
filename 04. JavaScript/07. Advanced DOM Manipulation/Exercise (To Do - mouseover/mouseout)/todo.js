var lis = document.querySelectorAll("li")


for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected")
    })

    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected")  // Referencing element that the event is triggered on
    })

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done")
    })
}
