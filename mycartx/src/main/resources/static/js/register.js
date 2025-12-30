document.querySelector("#registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const phone = document.querySelector("#phone").value.trim();
  const address = document.querySelector("#address").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    address: address
  };

  fetch("https://aetiological-confarreate-lyle.ngrok-free.dev/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => res.text())
    .then(msg => {
      // show success or error message from backend
      alert(msg);

      // If registration was successful, save selected fields to localStorage
      // so the profile page can read them directly.
      if (msg && msg.toLowerCase().includes("successful")) {
        try {
          localStorage.setItem("user_name", name);
          localStorage.setItem("user_email", email);
          localStorage.setItem("user_phone", phone);
          localStorage.setItem("user_address", address);
        } catch (storageErr) {
          console.error('Failed to save user data to localStorage:', storageErr);
        }

        // Redirect user to profile page so they can see their info immediately
        window.location.href = "login.html";
      } else {
        // If registration was not successful, stay on register page (or go to login as before)
        // Currently we don't change page in that case.
      }
    })
    .catch(err => console.error(err));
});