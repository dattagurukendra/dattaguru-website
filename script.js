// Navbar color on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    if (window.scrollY > 80) {
        navbar.style.background = "#FF6F00";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }

});

// Hamburger menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks){
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
}
// Gallery Lightbox

function openImage(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
