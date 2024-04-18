const divBoks = document.querySelector(".boks");
const rightBtn = document.querySelector(".hygiejne-videre-knap");
rightBtn.addEventListener("click", () => {
  divBoks.style.display = "block";
});

// knap tilabge til side 3
document.addEventListener("DOMContentLoaded", function () {
  const tilbage = document.getElementById("tilbage");
  tilbage.addEventListener("click", function () {
    window.location.href = "../hygiejne-simulator/hygiejne-side3.html";
  });
});

// rigtig
document.addEventListener("DOMContentLoaded", function () {
  const rigtig = document.getElementById("rigtig");
  rigtig.addEventListener("click", function () {
    window.location.href = "../hygiejne-simulator/hygiejne-rigtig2.html";
  });
});

// forkert

document.addEventListener("DOMContentLoaded", function () {
  const forkert = document.getElementById("forkert");
  forkert.addEventListener("click", function () {
    window.location.href = "../hygiejne-simulator/hygiejne-forkert2.html";
  });
});
