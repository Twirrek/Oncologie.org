// Encapsulation du code dans une fonction immédiatement invoquée
(function() {
	
  // Déclaration des variables
  const themeSwitcher = {
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    currentTheme: null
  };


	const systemThemePreference = themeSwitcher.prefersDark.matches ? 'dark' : 'light';
	themeSwitcher.currentTheme = systemThemePreference;
	
	if (localStorage.getItem('system-theme-preference')) {
	   const storedSystemThemePreference = localStorage.getItem('system-theme-preference');
	   if (storedSystemThemePreference === systemThemePreference) {
	      if (localStorage.getItem('theme-preference'))
		      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
	   } else {
	       localStorage.setItem('system-theme-preference', systemThemePreference);
	       localStorage.setItem('theme-preference', systemThemePreference);
	   }
	} else {
	       localStorage.setItem('system-theme-preference', systemThemePreference);
	       localStorage.setItem('theme-preference', systemThemePreference);		
	}
    document.documentElement.setAttribute('data-theme-preference', themeSwitcher.currentTheme);


})();
