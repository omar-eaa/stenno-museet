"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // starting quiz 1️⃣ button
  document.getElementById("start-quiz").addEventListener("click", function () {
    window.location.href = "../html-sider/quiz-sider/pest-quiz.html";
  });
});

// showing answar to pest quiz 1
document
  .getElementById("quiz1-pest-answer")
  .addEventListener("click", function () {
    // Get all spans inside the container
    var spans = document.querySelectorAll(".pest-questions span");

    // Loop through each span
    spans.forEach(function (span, index) {
      // Check the index to determine which century is correct
      if (index === 0) {
        // If it's the first century, add a checkmark
        span.textContent += " ✅";
      } else {
        // Otherwise, add a cross mark
        span.textContent += " ❌";
      }
    });
  });
