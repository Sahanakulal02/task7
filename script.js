// Select elements using DOM methods
const text = document.getElementById("text");
const changeBtn = document.querySelector("#changeBtn");
const toggleBtn = document.querySelector("#toggleBtn");

// Handle button click event
changeBtn.addEventListener("click", function () {
    text.textContent = "Text changed using DOM!";
    text.style.color = "blue";

    console.log("Text updated successfully");
});

// Toggle class using JavaScript
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    console.log("Theme toggled");
});
