const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const formNote = document.getElementById("formNote");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

function fakeSubmit(event) {
  event.preventDefault();
  formNote.textContent = "تم إرسال الرسالة بشكل تجريبي. اربط النموذج لاحقًا مع البريد أو واتساب أو Google Forms.";
  event.target.reset();
  return false;
}

window.fakeSubmit = fakeSubmit;
