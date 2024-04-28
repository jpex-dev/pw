function open() {
  const button = document.getElementById("myModal");
  button.style.display = "block";
}
function helloworld() {
  alert("Hello world");
  const hellowolrdContainer = document.getElementById("helloworldContainer");
  const hellowolrd = document.createElement("div");
  hellowolrd.id = "hellowolrd";
  hellowolrd.textContent = "Hello, World";
  hellowolrd.style.marginTop = "10px";
  hellowolrdContainer.appendChild(hellowolrd);
}
function modal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function clicked() {
  const body = document.getElementById("buttoncolor");
  body.style.transition = "background-color 0.3s ease";
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  body.style.backgroundColor = randomColor;
}
function submited() {
  var form = document.getElementById("loginForm");
  form.onsubmit = function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  };
}

function validateForm() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var isValid = true;

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Validate username
  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
    username.style.borderColor = "red";
    username.style.boxShadow = "red";
  }

  // Validate password
  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
    password.style.borderColor = "red";
    password.style.boxShadow = "red";
  } else if (password.value.length < 2) {
    // Update the minimum length to 2
    passwordError.textContent = "Password must be at least 2 characters long"; // Update the error message
    isValid = false;
    password.style.borderColor = "red";
    password.style.boxShadow = "red";
  }

  return isValid;
}
