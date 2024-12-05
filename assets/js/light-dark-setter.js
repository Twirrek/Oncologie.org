// Encapsulation du code dans une fonction immédiatement invoquée
(function() {
	
  // Déclaration des variables
  const themeSwitcher = {
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    currentTheme: null
  };


  // Initialisation du thème
  function initTheme() {
		
	const systemThemePreference = themeSwitcher.prefersDark.matches ? 'dark' : 'light';
	
	if (localStorage.getItem('system-theme-preference')) {
	   const storedSystemThemePreference = localStorage.getItem('system-theme-preference');
	   if (storedSystemThemePreference === systemThemePreference) {
	      if (localStorage.getItem('theme-preference'))
		      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
	   } else {
		   if (themeSwitcher.prefersDark.matches)
		      themeSwitcher.currentTheme = 'dark';	
		   else if (localStorage.getItem('theme-preference'))
		      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
	   }
	}
	localStorage.setItem('system-theme-preference', systemThemePreference);
    SWITCH();
  }

  // Fonction pour définir le thème
  function SWITCH() {
	const theme = themeSwitcher.currentTheme;
    document.documentElement.setAttribute('data-theme-preference', theme);
  }

  // Initialisation
  initTheme();
})();
