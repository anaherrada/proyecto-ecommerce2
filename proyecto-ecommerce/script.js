document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const nav = document.querySelector("nav");

    
    mobileMenuToggle.addEventListener("click", function () {
        
        nav.style.display = (nav.style.display === "block") ? "none" : "block";
    });
});