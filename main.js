let nav = document.querySelector(".nav")
let div1 = document.querySelector(".div1")
nav.addEventListener("click",function () {
    

    div1.style.animationName = "mine"
    div1.style.animationDuration = "1s"
    div1.style.animationTimeFunction = "ease-in-out"
    div1.style.animationFillMode = "forwards"
    div1.style.transform = "rotateY(-50deg) translateX(200px)";


})