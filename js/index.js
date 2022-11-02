const toggle = document.querySelector(".toggle-button");
const nav = document.querySelector(".navbar-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    }
});

