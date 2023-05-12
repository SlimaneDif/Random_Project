let menuBars = document.querySelector('.menu-bars');
let closeBars = document.querySelector('.close-bars');
let headerLinks = document.querySelector('.header-links');
menuBars.addEventListener("click", () => {
    headerLinks.classList.add("active");
    closeBars.classList.add("active-close")
    menuBars.style = "z-index: -1";
})
closeBars.addEventListener("click", () => {
    headerLinks.classList.remove("active");
    closeBars.style = "z-index: 1;"
    menuBars.style = "z-index: 3;"
})