let spinner = document.querySelector(".spinner");

window.addEventListener("scroll", function () {
    let x = window.scrollY;
    if (x > 500) {
        spinner.style.opacity = 1
    } else {
        spinner.style.opacity = 0
    }
})


let navBtn = document.querySelector(".menu-btn i");
let menu = document.querySelector(".responsive-nav");
// let main = document.querySelector("main");

function showMenu() {
    if (menu.style.height == 0) {
        menu.style.height = menu.scrollHeight + "px";
    } else {
        menu.style.height = null;
    }
}
navBtn.addEventListener("click", showMenu);

// main.addEventListener("click", function(){
//     if(menu.style.height = menu.scrollHeight + "px"){
//         menu.style.height = "0px";
//     }
// })