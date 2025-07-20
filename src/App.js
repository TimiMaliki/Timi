import './App.css';
import AboutMe from './sections/About';
import Achievement from './sections/Certs';
import Hero from './sections/HeroSection';
import Navbar from './sections/Navbar';
import Services from './sections/Services';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Achievement/>
      <Services/>
    </>
  );
}

export default App;
