const navbarMenu=document.querySelector(".navbar-menu");
const hamburger=document.querySelector(".hamburger");
const line=document.querySelector(".line1");
const line2=document.querySelector(".line2");
console.log(line)
hamburger.addEventListener("click",function () {
    navbarMenu.classList.toggle("active");
    line.classList.toggle("change1");
    line2.classList.toggle("change2");
})