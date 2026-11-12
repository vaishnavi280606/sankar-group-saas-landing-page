const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const form = document.querySelector("#demo-form");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector(".form-message");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !emailInput.validity.valid) {
    formMessage.textContent = "Please enter a valid work email.";
    formMessage.classList.add("error");
    emailInput.focus();
    return;
  }

  formMessage.classList.remove("error");
  formMessage.textContent = "Thanks! We'll be in touch within one business day.";
  form.reset();
});
