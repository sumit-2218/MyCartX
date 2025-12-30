document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = {
    email: email,
    password: password
  };

  fetch("https://aetiological-confarreate-lyle.ngrok-free.dev/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Invalid credentials");
      }
      return res.json();
    })
    .then(data => {
      // Save user info in localStorage
      localStorage.setItem("user_id", data.id);
      localStorage.setItem("user_name", data.name);
      localStorage.setItem("user_email", data.email);
      localStorage.setItem("user_phone", data.phone);
      localStorage.setItem("user_address", data.address);

      alert("Login Successful!");
      window.location.href = "home.html";
    })
    .catch(err => {
      alert("Login failed! Invalid email or password.");
    });
});