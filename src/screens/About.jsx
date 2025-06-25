import AboutHero from "../components/about/AboutHero";
import AboutSection from "../components/about/AboutSection";
import BusinessCenter from "../components/about/BusinessCenter";
import Clusters from "../components/about/Clusters";
import FAQ from "../components/about/FAQ";
import WhyArepo from "../components/about/WhyArepo";
import WhyInvest from "../components/about/WhyInvest";
import Waitlist from "../components/home/Waitlist";
const About = () => {
	return (
		<div>
			<AboutHero />
			<AboutSection />
			<WhyArepo />
			<BusinessCenter />
			<FAQ />
			<WhyInvest />
			<Clusters />
			<Waitlist />
		</div>
	);
};
export default About;
