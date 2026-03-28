const form = document.querySelector("#subscribe-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");

  message.textContent = `شكرًا ${name}! تم تسجيل اشتراكك بنجاح.`;
  form.reset();
});
