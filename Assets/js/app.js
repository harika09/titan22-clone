const error = document.querySelector(".login-error");

/* Login Form */
function loginForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email == "" || password == "") {
    error.style.display = "block";
  } else if (email.match(pattern)) {
    error.style.display = "none";
  }
}

/* Subscription */

function subscription() {
  const subError = document.querySelector(".sub-error");
  const emailSub = document.getElementById("sub-email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailSub) {
    subError.style.display = "block";
    document.getElementById("sub-email").style.outline = "1px solid red";
    document.querySelector(".sub-btn").style.border = "1px solid red";
  } else if (emailSub.match(pattern)) {
    subError.style.display = "none";
    document.getElementById("sub-email").style.outline = "1px solid #fff";
    document.querySelector(".sub-btn").style.border = "1px solid #fff";
  }
}
