import './App.css';
import AboutMe from './sections/About';
import Hero from './sections/HeroSection';
import Navbar from './sections/Navbar';
import Services from './sections/Services';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
    </>
  );
}

export default App;
