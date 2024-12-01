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
    if (localStorage.getItem('theme-preference')) {
      themeSwitcher.currentTheme = localStorage.getItem('theme-preference');
    } else if (themeSwitcher.prefersDark.matches) {
      themeSwitcher.currentTheme = 'dark';
    } else {
      themeSwitcher.currentTheme = 'light';
    }
    setTheme(themeSwitcher.currentTheme);
  }

  // Gestion du clic sur le bouton
  themeSwitcher.buttons.forEach( button => button.addEventListener('click', function() {
    themeSwitcher.currentTheme = document.documentElement.getAttribute('data-theme-preference') === "dark" ? "light" : "dark";
    TOGGLE_THEME(themeSwitcher.currentTheme);
  }));

  // Gestion du changement de pr�f�rence syst�me
  themeSwitcher.prefersDark.addEventListener('change', function(event) {
    themeSwitcher.currentTheme = event.matches ? 'dark' : 'light';
    TOGGLE_THEME(themeSwitcher.currentTheme);
  });

	const TOGGLE_THEME = (theme) => {
	  if (!document.startViewTransition) setTheme(theme)
	  else document.startViewTransition((theme) => setTheme(theme));
	}

  // Fonction pour d�finir le th�me
  function setTheme(theme) {
    const pressed = theme === 'dark' ? 'true' : 'false';
    document.documentElement.setAttribute('data-theme-preference', 'dark');
    localStorage.setItem('theme-preference', 'dark');
    themeSwitcher.buttons.forEach( button => button.setAttribute('aria-pressed', pressed));
  }

  // Initialisation
  initTheme();
})();