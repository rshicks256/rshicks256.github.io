let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-image");
const nodes2 = document.querySelectorAll(".character");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  nodes2[currentlySelected].classList.remove("active");

  currentlySelected--;

  nodes[currentlySelected].classList.add("active");
  nodes2[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  nodes2[currentlySelected].classList.remove("active");

  currentlySelected++;

  nodes[currentlySelected].classList.add("active");
  nodes2[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === nodes.length) {
    nextBtn.disabled = true;
  }
  if (currentlySelected + 1 === nodes2.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();