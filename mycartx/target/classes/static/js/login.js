document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Temporary alert (later we connect to backend)
  alert("Login clicked with:\nEmail: " + email + "\nPassword: " + password);

  const user = {
    email: email,
    password: password,
    role: "patient" // default role
  };

  fetch("https://aetiological-confarreate-lyle.ngrok-free.dev/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(res => res.text())
    .then(msg => {
      alert(msg); // show success or error message
      if (msg.includes("successful")) {
        alert("Sucess") // redirect after registration
         window.location.href = "home.html";
      }});
    
      // Later replace this with fetch to backend
    });