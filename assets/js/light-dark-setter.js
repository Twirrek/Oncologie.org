// Encapsulation du code dans une fonction imm�diatement invoqu�e
(function() {
	
  // D�claration des variables
  const themeSwitcher = {
    buttons: document.querySelectorAll('.js-theme-switcher'),
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    currentTheme: null
  };


  // Initialisation du th�me
  function initTheme() {
		
	const systemThemePreference = themeSwitcher.prefersDark.matches ? 'dark' : 'light';
	
	if (localStorage.getItem('system-theme-preference')) {
	   const storedSystemThemePreference = localStorage.getItem('system-theme-preference');
	   if (storedSystemThemePreference === systemThemePreference) {
	      if (localStorage.getItem('theme-preference'))
		      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
	   } else 
		   themeSwitcher.currentTheme = systemThemePreference;
	}
	localStorage.setItem('system-theme-preference', systemThemePreference);
    SWITCH();
  }

  // Fonction pour d�finir le th�me
  function SWITCH() {
	const theme = themeSwitcher.currentTheme;
    const pressed = theme === 'dark' ? 'true' : 'false';
    document.documentElement.setAttribute('data-theme-preference', theme);
    themeSwitcher.buttons.forEach( button => button.setAttribute('aria-pressed', pressed));
  }

  // Initialisation
  initTheme();
})();