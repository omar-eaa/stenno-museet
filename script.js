// epidemier
// vacciner
// simulator

document.addEventListener("DOMContentLoaded", function () {
  const epidemier = document.getElementById("epidemier");
  epidemier.addEventListener("click", function () {
    window.location.href = "./tidslinje/html-sider/tidslinje.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const vacciner = document.getElementById("vacciner");
  vacciner.addEventListener("click", function () {
    window.location.href = "./vaccine/vaccine-pest.html";
  });
});
