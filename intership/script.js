document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // form reload hone se roke

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMsg = document.getElementById("successMsg");

  // Simple validation
  if (name === "" || email === "" || message.length < 10) {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all fields correctly.";
    return;
  }

  successMsg.style.color = "green";
  successMsg.textContent = "Message sent successfully!";

  // Optional: clear form
  document.getElementById("contactForm").reset();
});