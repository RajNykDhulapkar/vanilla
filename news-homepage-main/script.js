const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");

const navAfter = window.getComputedStyle(
    navbar, "::after"
)

openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
});

navbar.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY);
})
