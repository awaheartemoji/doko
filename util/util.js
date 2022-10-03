const Util = {
	options: {
		backButton: true,
	},
};

// Functions
(() => {

	Util.init = () => {
		if (Util.options.backButton) {
			const html = "<a href=\"/\" class=\"back-button\"><div><i class=\"material-icons\">home</i></div></a>";
			document.body.innerHTML += html;
		}
	};

})();
