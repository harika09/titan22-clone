const error = document.querySelector(".login-error");

/* Toggle Menu */
function toggleMenu() {
  const menu = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  menu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

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

/* Show Search */
function showSearch() {
  const searchBar = document.querySelector(".search");
  const cart = document.querySelector(".cart-content");
  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
    cart.style.display = "none";
  }
}

function closeSearch() {
  const searchBar = document.querySelector(".search");

  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  }
}

/* Show Cart */
function showCart() {
  const searchBar = document.querySelector(".search");
  const cart = document.querySelector(".cart-content");

  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
    searchBar.style.display = "none";
  }
}

$(".show-more a").on("click", function () {
  var $this = $(this);
  var $content = $this.parent().prev("div.product-details");
  var linkText = $this.text().toUpperCase();

  if (linkText === "READ MORE") {
    linkText = "read less";
    $content.switchClass("hideContent", "showContent");
  } else {
    linkText = "read more";
    $content.switchClass("showContent", "hideContent");
  }

  $this.text(linkText);
});

/* Show More */
// function showMore() {
//   const showMore = document.querySelector(".show-more-details");
//   const more = document.querySelector(".hideContent");

//   showMore.classList.toggle("active");
//   more.classList.toggle("active");
// }

const sizes = document.getElementsByClassName("size");
const soldout = document.getElementsByClassName("soldout");

for (var i = 0; i < soldout.length; i++) {
  soldout[i].addEventListener("click", function () {
    const btnCart = document.getElementById("btnCart");

    btnCart.classList.add("none");
    btnCart.value = "Sold Out";
  });
}

for (var i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function () {
    const current = document.getElementsByClassName(" active-size");
    const btnCart = document.getElementById("btnCart");

    current[0].className = current[0].className.replace(" active-size", "");

    this.className += " active-size";
    btnCart.classList.remove("none");
    btnCart.value = "Add to Cart";
  });
}

$(".product-desc").click(function () {
  $(".product-desc-text").slideToggle("fast");
});

/* Image Slider */

const smallImage = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImage.length; i++) {
  smallImage[i].addEventListener("click", function () {
    const primaryImage = document.getElementById("primaryImage");
    // primaryImage.src = smallImage[i].src;
    primaryImage.src = this.getAttribute("src");
  });
}
