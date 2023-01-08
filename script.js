const navToggle = document.querySelector(".nav-toggle");

const navBar = document.querySelector(".nav-bar");

const navBg = document.querySelector(".nav-mobile");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navBar.classList.toggle("active");
    navBg.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navBar.classList.remove("active");
    navBg.classList.remove("active");
}))