// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay } from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay ])
document.addEventListener('DOMContentLoaded', () => {
	const sliderTop = new Swiper('.event__slider', {
		speed: 800,
		// autoHeight: true,
		loop: false,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			dragSize: 'auto',
		},


	})
		// accordions
		const accordions = document.querySelectorAll(".accordion");

		const openAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.add("accordion__active");
			content.style.maxHeight = content.scrollHeight + "px";
		};
	
		const closeAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.remove("accordion__active");
			content.style.maxHeight = null;
		};
	
		accordions.forEach((accordion) => {
			const intro = accordion.querySelector(".accordion__intro");
			const content = accordion.querySelector(".accordion__content");
	
			intro.onclick = () => {
				if (content.style.maxHeight) {
					closeAccordion(accordion);
				} else {
					accordions.forEach((accordion) => closeAccordion(accordion));
					openAccordion(accordion);
				}
			};
		});
	
		// accordions

	

})
