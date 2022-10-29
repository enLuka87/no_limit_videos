document.addEventListener("DOMContentLoaded", function () {
	const allNavLinks = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	allNavLinks.forEach((link) =>
		link.addEventListener("click", () => navList.classList.remove("show"))
	);
});
