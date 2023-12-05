var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
function setGradient() {
	body.style.background =
		"linear-gradient(to bottom left, "
		+ (color1.value)+" "+"30%, "
		+ (color2.value)+" "+"40%, "
		+ (color3.value) +" "+ "70%)";

	css.textContent = body.style.background+";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);