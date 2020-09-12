menu.onclick = function myFunction() {
	let x = document.getElementById('myTopnav')

	if (x.className == "topnav") {
		x.classList.add('responsive');
	} else {
		x.className = "topnav";
	}
}