//znikanie nawigacji po kliknięciu w link

document.addEventListener("DOMContentLoaded", function () {
	const allNavLinks = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	allNavLinks.forEach((link) =>
		link.addEventListener("click", () => navList.classList.remove("show"))
	);
});

//aktualny rok w stopce

const footerYear = document.querySelector(".footer-year");

const CurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

CurrentYear();
