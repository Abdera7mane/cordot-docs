$(document).ready(() => {
	const stylesheet = $("link[href='css/extra.css']");
	stylesheet.detach();
	$("head").append(stylesheet);
});
