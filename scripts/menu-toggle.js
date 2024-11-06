// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const links = document.getElementById("main-nav-list");

button.addEventListener("click", function() {
    links.classList.toggle("toggled");
    console.log("click");
})

// Thumb Navigation Toggle
