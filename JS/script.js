// Info Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  modal.style.animation = "modalIn 0.3s linear";
};

span.onclick = function () {
  modal.style.animation = "modalOut 0.3s linear";
  setTimeout(() => {
    modal.style.display = "none";
  }, 130);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.animation = "modalOut 0.3s linear";
    setTimeout(() => {
      modal.style.display = "none";
    }, 130);
  }
};

// Typing Animation
var typed = new Typed(".auto-type", {
  strings: ["Ari ZM", "Hello Comrades!"],
  typeSpeed: 80,
  backSpeed: 80,
  // backDelay: 500,
  // startDelay: 1000,
  loop: true,
});
