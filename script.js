function sunToMoon() {
	document.querySelector(".theme-icon").setAttribute("data-feather", "moon");
	feather.replace()
}

function moonToSun() {
	document.querySelector(".theme-icon").setAttribute("data-feather", "sun");
	feather.replace()
}

var currentTheme;

function checkTheme() {
	currentTheme = localStorage.getItem("theme");

	console.log(currentTheme);
			
	if (currentTheme === null) {
		console.log("Null, set to light.");
		localStorage.setItem("theme", "light-theme");
		document.body.classList.add("light-theme");
		sunToMoon();

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 		{
	    console.log("null dark, set to dark");
			document.body.classList.add("dark-theme");
			moonToSun();
			localStorage.setItem("theme", "dark-theme");
		}

		else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) 		{
	    console.log("null light, set to light");
			document.body.classList.add("light-theme");
			sunToMoon();
			localStorage.setItem("theme", "light-theme");
		}
	}

	else if (currentTheme === "light-theme") {
		console.log("light, set to light");
		document.body.classList.add("light-theme");
		sunToMoon();
	}

	else if (currentTheme === "dark-theme") {
		console.log("dark, set to dark");
		document.body.classList.add("dark-theme");
		moonToSun();
	}

	else {
		localStorage.clear();
	}
}

function changeTheme() {
	currentTheme = localStorage.getItem("theme");

	console.log("theme before change:")
	console.log(currentTheme);

	if (currentTheme === "light-theme") {
		document.body.classList.remove("light-theme");
		document.body.classList.add("dark-theme");
		localStorage.setItem("theme", "dark-theme");	
		moonToSun();
	}

	else if (currentTheme === "dark-theme") {
		document.body.classList.remove("dark-theme");
		document.body.classList.add("light-theme");
		localStorage.setItem("theme", "light-theme");	
		sunToMoon();
	}

	currentTheme = localStorage.getItem("theme");
	console.log("current theme after change:")
	console.log(currentTheme);
	
}

checkTheme();

