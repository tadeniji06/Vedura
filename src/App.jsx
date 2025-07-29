import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/routes";
import AnalyticsScript from "./components/AnalyticsScript";

export default function App() {
	const location = useLocation();

	useEffect(() => {
		// Delay execution just slightly in case gtag is still initializing
		const timeout = setTimeout(() => {
			if (window.gtag) {
				window.gtag("config", "G-EE3EV4FPS7", {
					page_path: location.pathname + location.search,
				});
			}
		}, 300); // 300ms

		return () => clearTimeout(timeout);
	}, [location]);

	return (
		<>
			<AnalyticsScript />
			<AppRoutes />
		</>
	);
}
