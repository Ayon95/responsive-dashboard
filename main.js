import './style.css';

const themeToggler = document.querySelector('.main__theme-toggler');
const lightModeButton = themeToggler.querySelector('[data-theme-toggle="light"]');
const darkModeButton = themeToggler.querySelector('[data-theme-toggle="dark"]');

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// By default, light mode will be active (in the HTML)

if (prefersDarkScheme.matches) {
	lightModeButton.classList.remove('active');
	darkModeButton.classList.add('active');
	document.body.classList.add('dark-theme');
}

themeToggler.addEventListener('click', function (e) {
	const button = e.target.closest('button');
	if (!button || button.classList.contains('active')) return;

	const currentActiveButton = e.currentTarget.querySelector('.active');

	currentActiveButton.classList.remove('active');
	button.classList.add('active');

	document.body.classList.toggle('dark-theme');
});
