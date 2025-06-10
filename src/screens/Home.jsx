import Hero from "../components/home/Hero";
import ShowCase from "../components/home/ShowCase";
import Welcome from "../components/home/Welcome";
import HighLights from "../components/home/HighLights";
import Waitlist from "../components/home/Waitlist";
import Perks from "../components/home/Perks";
import WhoisVeduraFor from "../components/home/WhoisVeduraFor";
const Home = () => {
  return (
    <main>
      <Hero />
      <ShowCase />
      <Welcome />
      <WhoisVeduraFor />
      <HighLights />
      <Perks />
      <Waitlist />
    </main>
  );
};
export default Home;
