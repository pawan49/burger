const navToggler = document.querySelector(".toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
  const nav = document.querySelector(".nav-links");
  navToggler.classList.toggle("active");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}
