var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var ids;
function setGradient() {
  body.style.background = "linear-gradient(" + ids + "," + (color1.value) + " " + "10%, " + (color2.value) + " " + "50%, " + (color3.value) + " " + "100%)";
  css.textContent = body.style.background;
}
function getId(clicked) {
  ids = clicked.id;
  setGradient();
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

