import Hero from "../components/home/Hero";
import ShowCase from "../components/home/ShowCase";
import Welcome from "../components/home/Welcome";
import HighLights from "../components/home/HighLights";
import Waitlist from "../components/home/Waitlist";
const Home = () => {
  return (
    <main>
      <Hero />
      <ShowCase />
      <Welcome />
      <HighLights />
      <Waitlist />
    </main>
  );
};
export default Home;
