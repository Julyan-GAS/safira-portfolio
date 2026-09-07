// Menu navigasi
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

// Menutup menu setelah memilih halaman
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});