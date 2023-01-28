let nav = document.querySelector(".navig")
let div1 = document.querySelector(".div1")
nav.addEventListener("click",function () {
    div1.style.animationName = "mine"
    div1.style.animationDuration = "2s"
    div1.style.animationTimeFunction = "ease"
    div1.style.animationFillMode = "forwards"
    div1.style.transform = "rotateY(-10 deg)"
    div1.style.perspective = "1000px"
    div1.style.transformStyle = "preserve-3d "
    document.body.style.transformStyle = "preserve-3d "
    document.body.style.perspective = "1000px"
})