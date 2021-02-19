// section home
document.querySelectorAll("#total_minutes1").forEach(function (node) {
  let counter = 0;
  const timer = setInterval(() => {
    counter++;
    node.innerText = counter;
    if (counter >= 359) {
      clearInterval(timer);
    }
  }, 80);
});

document.querySelectorAll("#total_minutes2").forEach(function (node) {
  let counter = 0;
  const timer = setInterval(() => {
    counter++;
    node.innerText = counter;
    if (counter >= 480) {
      clearInterval(timer);
    }
  }, 50);
});

document.querySelectorAll("#total_minutes3").forEach(function (node) {
  let counter = 0;
  const timer = setInterval(() => {
    counter++;
    node.innerText = counter;
    if (counter >= 436) {
      clearInterval(timer);
    }
  }, 15);
});

window.addEventListener("load", function f() {
  document.querySelectorAll("#users_count").forEach(function (node) {
    let counter = 0;

    const timer = setInterval(() => {
      counter += 0.1;
      node.innerText = counter.toFixed(1);
      if (counter >= 24792 / 1000) {
        clearInterval(timer);
      }
    }, 15);
  });
  document.querySelectorAll("#projects_count").forEach(function (node) {
    let counter = 0;

    const timer = setInterval(() => {
      counter += 0.1;
      node.innerText = counter.toFixed(1);
      if (counter >= 34099 / 1000) {
        clearInterval(timer);
      }
    }, 15);
  });
});

// section header
document.querySelector(".menu-hamburger").addEventListener("click", function () {
  this.classList.toggle("change");
  var x = document.querySelector(".menu-hamburger-content");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById(".menu-hamburger-content").style.width = "0";
  } else {
    x.style.display = "block";
    document.querySelector(".menu-hamburger-content").style.width = "250px";
  }
});
