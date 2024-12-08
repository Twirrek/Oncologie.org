// Encapsulation du code dans une fonction immédiatement invoquée
(function() {
	
  // Déclaration des variables
  const themeSwitcher = {
    buttons: document.querySelectorAll('.js-theme-switcher'),
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    currentTheme: null
  };

	document.documentElement.dataset.style = 'wipe';

  // Initialisation du thème
  function initTheme() {
		
    if (localStorage.getItem('theme-preference'))
      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
    else 
	  themeSwitcher.currentTheme = themeSwitcher.prefersDark.matches ? 'dark' : 'light';

	const theme = themeSwitcher.currentTheme;
    const pressed = theme === 'dark' ? 'true' : 'false';
    themeSwitcher.buttons.forEach( button => button.setAttribute('aria-pressed', pressed));

  }

  // Gestion du clic sur le bouton
  themeSwitcher.buttons.forEach( button => button.addEventListener('click', () => {
    themeSwitcher.currentTheme = document.documentElement.getAttribute('data-theme-preference') === "dark" ? "light" : "dark";
 	const theme = themeSwitcher.currentTheme;   
	localStorage.setItem('theme-preference', theme);
    TOGGLE_THEME();
  }));

  // Gestion du changement de préférence système
  themeSwitcher.prefersDark.addEventListener('change', (event) => {
    const theme = themeSwitcher.currentTheme = event.matches ? 'dark' : 'light';
	localStorage.setItem('theme-preference', theme);
	localStorage.setItem('system-theme-preference', theme);
    TOGGLE_THEME();
  });

  // Fonction pour définir le thème
  function SWITCH() {
	const theme = themeSwitcher.currentTheme;
    const pressed = theme === 'dark' ? 'true' : 'false';
    document.documentElement.setAttribute('data-theme-preference', theme);
    themeSwitcher.buttons.forEach( button => button.setAttribute('aria-pressed', pressed));
  }

	const TOGGLE_THEME = () => {
	  if (!document.startViewTransition) SWITCH();
	  else document.startViewTransition(SWITCH)
	}

  // Initialisation
  initTheme();
})();
