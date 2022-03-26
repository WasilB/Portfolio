window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});



const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
	serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
	learnmoreBtn.addEventListener("click", () => {
		modal(i);
	});
});

modalCloseBtns.forEach((modalCloseBtn) => {
	modalCloseBtn.addEventListener("click", () => {
		serviceModals.forEach((modalView) => {
			modalView.classList.remove("active");
		});
	});
});



const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
	portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
	imgCard.addEventListener("click", () => {
		portfolioModal(i);
	});
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
	portfolioCloseBtn.addEventListener("click", () => {
		portfolioModals.forEach((portfolioModalView) => {
			portfolioModalView.classList.remove("active");
		});
	});
});

var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
	scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () =>{
	const sections = document.querySelectorAll("section");
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		let sectionHeight = current.offsetHeight;
		let sectionTop = current.offsetTop - 50;
		let id  = current.getAttribute("id");

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector(".navItems a[href*=" + id + "]").classList.add("active");
		}
		else{
			document.querySelector(".navItems a[href*=" + id + "]").classList.remove("active");
		}
	});
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	themeBtn.classList.toggle("sun");

	localStorage.setItem("saved-theme", getCurrentTheme());
	localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
	document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
	themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const naviItems = document.querySelectorAll(".navItems a");

menuBtn.addEventListener("click", () => {
	navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	navigation.classList.remove("active");
});

naviItems.forEach((naviItem) => {
	naviItem.addEventListener("click", () => {
		navigation.classList.remove("active");
	});
});


ScrollReveal({
	//reset: true,
	distance: '60px',
	duration: 2500,
	delay: 100
});


/*
ScrollReveal().reveal('.home .info h2, .sectionTitle01, .sectionTitle02', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .aboutInfo .btn', { delay: 300, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.mediaIcons i, .contactLeft li', { delay: 200, origin: 'left', interval: 200 });
ScrollReveal().reveal('.homeImg, .aboutImg', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about .description,', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.about .professionalList li', { delay: 200, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skillsDescription, .servicesDescription, .contactCard, .client-swiper, .contactLeft h2', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.experienceCard, .serviceCard, .education, .portfolio .img-card', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 200, origin: 'top', interval: 200 });
*/