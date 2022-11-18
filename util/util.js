const Util = {};

// Functions
(() => {
	const defaultOptions = {
		backButton: true,
	};

	Util.init = (options = {}) => {
		Util.options = Object.assign(defaultOptions, options);

		if (Util.options.backButton) {
			const html = "<a href=\"/\" class=\"back-button\"><div><i class=\"material-icons\">home</i></div></a>";
			document.body.innerHTML += html;
		}
	};

})();
