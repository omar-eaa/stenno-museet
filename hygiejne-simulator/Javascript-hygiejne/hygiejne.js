const divBoks = document.querySelector(".boks");
const rightBtn = document.querySelector(".hygiejne-videre-knap");
rightBtn.addEventListener("click", () => {
divBoks.style.display = 'block';
})

document.addEventListener("DOMContentLoaded", function (){
    const vide = document.getElementById("vide"); 
    vide.addEventListener("click", function(){
        window.location.href = "."
    })
})