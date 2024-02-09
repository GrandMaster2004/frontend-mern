
// Menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);
    // remove menu icon navbar when click navbar link
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};
// Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
};

//  scroll reveal


// login

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
    wrapper.classList.add('active');
    console.log("registerlink");
});
loginLink.addEventListener("click", () => {
    wrapper.classList.remove('active');
    console.log("login link");
});
btnPopup.addEventListener("click", () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener("click", () => {
    wrapper.classList.remove('active-popup');
});
