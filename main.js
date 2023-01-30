let nav = document.querySelector(".nav")
let div1 = document.querySelector(".div1")
let b = document.querySelector(".container")
nav.addEventListener("click",function () {
    

    div1.style.animationName = "mine"
    div1.style.animationDuration = "1s"
    div1.style.animationTimeFunction = "ease-in-out"
    div1.style.animationFillMode = "forwards"
    div1.style.transform = "rotateY(-50deg) translateX(100px)";
    b.style.background= "rgb(49, 41, 23)"


})

let btn = document.querySelector("button")
console.log(btn);
function checkPass() {
    let password = document.getElementById("pass").value
    let confirm = document.getElementById("repeat").value
    if(password !== confirm){
        alert("Pass word do not match")
    }
    else{
        alert("Password Match")
        console.log(password);
    }
}
btn.addEventListener("click",checkPass())