var burger = document.getElementById("burger")
var lists2 = document.getElementById("lists2")

burger.addEventListener("click", function(){
    lists2.classList.toggle("translate")
    this.classList.toggle("rotate")
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
        lists2.classList.remove("translate")
        this.classList.remove("rotate")
    }
})