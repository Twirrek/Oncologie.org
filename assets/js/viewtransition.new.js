// Encapsulation du code dans une fonction immédiatement invoquée

(function() {
	
	import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4'

	const config = {
	  style: 'vertical',
	}

	const ctrl = new Pane({
	  title: 'Config',
	  expanded: true,
	})

	ctrl.addBinding(config, 'style', {
	  label: 'Style',
	  options: {
		Default: 'default',
		Vertical: 'vertical',
		Wipe: 'wipe',
		Slides: 'slides',
		Flip: 'flip',
		Angled: 'angled',
	  },
	})

	const change = () => {
	  document.documentElement.dataset.style = config.style
	}
	change()
	ctrl.on('change', change)
		
    // Déclaration des variables
	const TOGGLES = document.querySelectorAll('.js-theme-switcher');
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// Initialisation du thème
	function initTheme() {
		if (localStorage.getItem('theme-preference')) {
		  theme = localStorage.getItem('theme-preference');
		} else if (themeSwitcher.prefersDark.matches) {
		  theme = 'dark';
		} else {
		  theme = 'light';
		}
		SWITCH(theme);
	}

	TOGGLE.setAttribute('aria-pressed', prefersDark.toString())

	const SWITCH = (theme) => {
	  // biome-ignore lint: this needs to be cast else it doesn't work
	  const isDark = theme || TOGGLE.matches('[aria-pressed=true]') ? false : true
	  TOGGLES.forEach( TOGGLE => TOGGLE.setAttribute('aria-pressed', isDark) );
	  document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
	}

	const TOGGLE_THEME = () => {
	  const isDark = theme || TOGGLE.matches('[aria-pressed=true]') ? false : true;
	  if (!document.startViewTransition) SWITCH()
	  document.startViewTransition(SWITCH)
	}

   TOGGLES.forEach( TOGGLE => TOGGLE.addEventListener('click', TOGGLE_THEME) );
	
	// Initialisation
	initTheme();

})();