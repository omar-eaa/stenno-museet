const btn = document.querySelector("#btn");

const main = document.querySelector(".container");

const message = pageElem(
  main,
  "div",
  "Nu har du læst om Amara’s tuberkulose forløb - tag quizzen herunder for at lære mere om Tuberkulose",
  "message"
);

const output = pageElem(main, "div", "", "game");

const url = "/Json/tuberkulosedata.json";

const game = { score: 0 };

btn.onclick = loadData;

function pageElem(parent, t, html, c) {
  const element = document.createElement(t);
  element.innerHTML = html;
  element.classList.add(c);
  return parent.appendChild(element);
}

function loadData() {
  btn.style.display = "none";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const temp = {
        total: data.length,
        q: data,
        counter: 0,
      };
      createQuestion(temp);
    });
}

function createQuestion(data) {
  const el = pageElem(output, "div", "", "question");

  if (data.q.length === 0) {
    message.innerHTML = `<h1>Færdig!</h1><div>Du fik ${game.score} ud af ${data.total} korrekt`;
  } else {
    const tBtn = pageElem(el, "button", "Næste spørgsmål", "next");
    tBtn.onclick = () => {
      el.remove();
      createQuestion(data);
    };

    const question = data.q.shift();
    data.counter++;
    message.textContent = `Spørgsmål ${data.counter} af ${data.total} `;

    if (data.q.length === 0) {
      tBtn.textContent = "Afslut";
    }

    tBtn.style.display = "none";
    outputQuestion(question, el, tBtn);
  }
}

function outputQuestion(question, parent, tBtn) {
  console.log(question);
  const que = pageElem(parent, "div", `${question.question}?`, "question");
  const array = question.options;
  array.push(question.answer);
  array.sort(() => {
    return Math.random() - 0.5;
  });

  const btns = pageElem(parent, "div", "", "opts");

  array.forEach((e) => {
    const optemp = pageElem(btns, "p", e, "btns");
    optemp.onclick = () => {
      if (question.answer == e) {
        message.textContent = "Korrekt";
        game.score++;
      } else {
        message.textContent = "Ikke korrekt";
      }

      const temps = parent.querySelectorAll(".btns");
      temps.forEach((el) => {
        el.disabled = true;
        const bgc = question.answer == el.textContent ? "green" : "red";
        el.style.backgroundColor = bgc;
      });
      tBtn.style.display = "block";
    };
  });
}

function pageElem(parent, t, html, c) {
  const element = document.createElement(t);
  element.innerHTML = html;
  element.classList.add(c);
  return parent.appendChild(element);
}

document.addEventListener("DOMContentLoaded", function () {
  const tidslinje = document.getElementById("tidslinje");
  tidslinje.addEventListener("click", function () {
    window.location.href = "../tidslinje/html-sider/tidslinje.html";
  });
});

// slide in text 

document.addEventListener("DOMContentLoaded", function () {
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    const section1 = document.querySelector("#section1 .slide-in-text");
    const section2 = document.querySelector("#section2 .slide-in-text");
    const section3 = document.querySelector("#section3 .slide-in-text");
    const section4 = document.querySelector("#section4 .slide-in-text"); // Corrected selection for section 4

    if (isInViewport(section1)) {
      section1.classList.add("show");
    }
    if (isInViewport(section2)) {
      section2.classList.add("show");
    }
    if (isInViewport(section3)) {
      section3.classList.add("show");
    }
    if (isInViewport(section4)) { // Check if section 4 is in view
      section4.classList.add("show"); // Add animation activation class for section 4
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check when the page loads
});
