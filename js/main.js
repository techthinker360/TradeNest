// js/main.js – LEFT SLIDING MENU
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

function openMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
}

function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close when clicking a link
document.querySelectorAll('.side-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});