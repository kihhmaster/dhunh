// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller ])
document.addEventListener('DOMContentLoaded', () => {
	const sliderTop = new Swiper('.event__slider', {
		speed: 800,
		loop: true,
		autoplay: {
			delay: 0,
		},
		freeMode: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},	
	})

	

})
