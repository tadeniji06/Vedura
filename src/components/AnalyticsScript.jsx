import { useEffect } from "react";

const AnalyticsScript = () => {
	useEffect(() => {
		// Inject the gtag script
		const script = document.createElement("script");
		script.src =
			"https://www.googletagmanager.com/gtag/js?id=G-EE3EV4FPS7";
		script.async = true;
		document.head.appendChild(script);

		// Inject the config script
		const inlineScript = document.createElement("script");
		inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EE3EV4FPS7');
    `;
		document.head.appendChild(inlineScript);
	}, []);

	return null; // No UI
};

export default AnalyticsScript;
