// Encapsulation du code dans une fonction imm�diatement invoqu�e
(function() {
	
	document.querySelector(".infobar")
                .innerHTML +=
		`<button class="theme-switcher js-theme-switcher" type="button">
			<span class="visually-hidden">Changer le mode de couleurs</span>
			<span class="theme-icon">
			  <svg class="theme-icon-light" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-linecap="round">
				<path fill="currentColor" d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/>
				<path fill="currentColor" fill-rule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75ZM4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 0 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05Zm15.2 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 0 1-1.05-1.07l.4-.4a.76.76 0 0 1 1.05 0ZM1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.1 6.15c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 1 1-1.07 1.05l-.4-.4a.75.75 0 0 1 0-1.05Zm-12.3 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 1 1-1.05-1.07l.4-.4a.74.74 0 0 1 1.05 0Zm6.15 2.1c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75Z" clip-rule="evenodd"/>
			  </svg>
			  <svg class="theme-icon-dark" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			  </svg>
			</span>
		  </button>`
	
  // D�claration des variables
  const themeSwitcher = {
    buttons: document.querySelectorAll('.js-theme-switcher'),
    prefersDark: window.matchMedia('(prefers-color-scheme: dark)'),
    currentTheme: null
  };

	document.documentElement.dataset.style = 'wipe';

  // Initialisation du th�me
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

  // Gestion du changement de pr�f�rence syst�me
  themeSwitcher.prefersDark.addEventListener('change', (event) => {
    const theme = themeSwitcher.currentTheme = event.matches ? 'dark' : 'light';
	localStorage.setItem('theme-preference', theme);
	localStorage.setItem('system-theme-preference', theme);
    TOGGLE_THEME();
  });

  // Fonction pour d�finir le th�me
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
