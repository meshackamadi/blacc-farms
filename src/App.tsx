import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import About from "./components/about";
import Video from "./components/video";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a1f14] flex flex-col font-sans transition-colors duration-200">
        <Header />
        <Hero />
        <Feature />
        <About />
        <Video />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;