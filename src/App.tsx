import HeroLanding from "./components/HeroLanding";
import Feature from "./components/feature";
import About from "./components/about";
import Video from "./components/video";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <HeroLanding />
      <Feature />
      <About />
      <Video />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;