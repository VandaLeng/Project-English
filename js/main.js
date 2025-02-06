window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// footer
const toggleMobile = () => {
	let menu = document.getElementById("menu");
	let menuIcon = document.getElementById("menu-icon");

	if (menuIcon.classList.contains("fa-bars")) {
		menuIcon.classList.remove("fa-bars");
		menuIcon.classList.add("fa-times");
		menu.classList.add("mobile-menu");
	} else {
		menuIcon.classList.remove("fa-times");
		menuIcon.classList.add("fa-bars");
		menu.classList.remove("mobile-menu");
	}
};
