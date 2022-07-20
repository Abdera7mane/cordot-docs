document.addEventListener("DOMContentLoaded", function() {
	const stylesheet = document.querySelector("link[href='css/extra.css']");
	const parent = stylesheet.parentNode;
	parent.removeChild(stylesheet);
	parent.appendChild(stylesheet);
});