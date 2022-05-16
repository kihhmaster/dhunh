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

	

})
