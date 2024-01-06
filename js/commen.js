// ** ==========  Background header ====== ** //
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport hight add the scroll header 
    // class to header tag
    if (this.scrollY >= 50) { header.classList.add('scroll-header') }
    else { header.classList.remove('scroll-header') }
}
window.addEventListener('scroll', scrollHeader);



// ** =========  navMenu ==== ** //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggler'),
    navClose = document.getElementById('nav-close');
// ====== menuShow === //
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
// ====== hideShow === //
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
// ** ==========  Remove menu mobile size ====== ** //
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));


