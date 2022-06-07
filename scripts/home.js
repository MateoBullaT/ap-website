//TOGGLE MENU RESPOSIVE
let menuToggle = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar");
menuToggle.onclick = ()=>{
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("navbar--active");
};