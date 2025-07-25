import About from "../sections/About";
import Achievement from "../sections/Certs";
import Hero from "../sections/HeroSection";
import Services from "../sections/Services";
import LatestWorks from "../sections/Works";

const HomePage = () => {
    return ( 
        <>
        <Hero/>
        <About/>
        <Achievement/>
        <LatestWorks/>
        <Services/>
        </>
     );
}
 
export default HomePage;