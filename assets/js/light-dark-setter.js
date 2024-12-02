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
		
    if (localStorage.getItem('theme-preference'))
      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
    else 
	  themeSwitcher.currentTheme = themeSwitcher.prefersDark.matches ? 'dark' : 'light';

    SWITCH();
  }

  // Fonction pour d�finir le th�me
  function SWITCH() {
	const theme = themeSwitcher.currentTheme;
    document.documentElement.setAttribute('data-theme-preference', theme);
  }

  // Initialisation
  initTheme();
})();
