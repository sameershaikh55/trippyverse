$(document).ready(function () {
	AOS.init({
		once: true,
	});

	var swiper = new Swiper(".mySwiper", {
		effect: "cube",
		grabCursor: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: false,
	});

	var swiper1 = new Swiper(".mySwiper1", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		grabCursor: true,
		pagination: false,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			992: {
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			100: {
				navigation: false,
			},
		},
	});

	swiper();
});

function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds,
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector(".days");
	const hoursSpan = clock.querySelector(".hours");
	const minutesSpan = clock.querySelector(".minutes");
	const secondsSpan = clock.querySelector(".seconds");

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
		minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
		secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("clockdiv", deadline);
