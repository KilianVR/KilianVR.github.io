const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const successMessage = document.createElement("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  successMessage.textContent = "El mensaje se ha enviado correctamente.";
  successMessage.style.color = "#008000";
  form.appendChild(successMessage);

  name.value = "";
  email.value = "";
  message.value = "";

  setTimeout(() => {
    successMessage.remove();
  }, 3000);
});