const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const formatTimeString = timeNumber => {
  return timeNumber < 10 ? '0' + timeNumber : timeNumber
}

const updateDateAndTime = () => {
	const date_event = new Date('2024-09-05');
	const date = new Date();
	const days = $('#days').firstElementChild;
	const hours = $('#hours').firstElementChild;
	const minutes = $('#minutes').firstElementChild;
	const seconds = $('#seconds').firstElementChild;

	const diff = date_event - date;

	const days_diff = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours_diff = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes_diff = Math.floor(diff / 1000 / 60) % 60;
	const seconds_diff = Math.floor(diff / 1000) % 60;

  if (days_diff + hours_diff + minutes_diff + seconds_diff <= 0) {
    hours.style.display = "none"
    minutes.style.display = "none"
    seconds.style.display = "none"
    hours.parentElement.parentElement.innerHTML = "<span class=\"value\">¡La Expo ya ha comenzado!</span>"
  }

	days.textContent = formatTimeString(days_diff)
	hours.textContent = formatTimeString(hours_diff)
	minutes.textContent = formatTimeString(minutes_diff)
	seconds.textContent = formatTimeString(seconds_diff)
};

setInterval(updateDateAndTime, 1000);

updateDateAndTime();

// nav responsive
$('.header__menu-btn').addEventListener("click", () => {
	$('.header__nav-responsive').classList.toggle('show__nav__responsive')
	$('.header__menu-btn').classList.toggle('header__menu-btn-show')
})
