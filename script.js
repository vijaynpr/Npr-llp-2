const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const navBar = document.getElementById('nav-bar');
let currentTheme = 'dark-theme';

themeBtn.addEventListener('click', () => {
	if (currentTheme === 'light-theme') {
		document.body.classList.add('dark-theme');
		document.body.classList.remove('light-theme');
        navBar.classList.add('dark-theme');
		navBar.classList.remove('light-theme');
		themeIcon.src = 'img/icons8-sun-white.png';
		currentTheme = 'dark-theme';
	} else {
		document.body.classList.add('light-theme');
		document.body.classList.remove('dark-theme');
		navBar.classList.add('light-theme');
        navBar.classList.remove('dark-theme');
		themeIcon.src = 'img/icons8-moon-50.png';
		currentTheme = 'light-theme';
	}
});