import './App.css';
import AboutMe from './sections/About';
import Achievement from './sections/Certs';
import Hero from './sections/HeroSection';
import Navbar from './sections/Navbar';
import Services from './sections/Services';
import LatestWorks from './sections/Works';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Achievement/>
      <Services/>
      <LatestWorks/>
    </>
  );
}

export default App;
