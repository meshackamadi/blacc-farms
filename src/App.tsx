import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import About from "./components/about";
import Video from "./components/video";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <Hero />
      <Feature />
      <About />
      <Video />
    </div>
  );
}

export default App;