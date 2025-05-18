import Expectations from "../components/features/Expectations";
import FeaturesHero from "../components/features/FeaturesHero";
import Glimpse from "../components/features/Glimpse";
import Waitlist from "../components/home/Waitlist";
const Features = () => {
  return (
    <div>
      <FeaturesHero />
      <Glimpse />
      <Expectations />
      <Waitlist />
    </div>
  );
};
export default Features;
