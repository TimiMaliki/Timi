import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="px-6 py-10 ovo-regular">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <Link to="/">
          <div>
            <h2 className="text-2xl font-bold mb-4">Timi</h2>
          </div>
          </Link>
         
  
          {/* Navigation Links */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
            <Link to="/">Home</Link>  
              <li id="about" className="hover:underline">About me</li>
              <li id="achievement" className="hover:underline">Little Achievements</li>
              <li id="work" className="hover:underline">My Works</li>
              <li id="service" className="hover:underline">Services</li>
              <li id="contact" className="hover:underline">Contact</li>
            </ul>
          </div>
  
          {/* Legal Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:underline ">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline ">Terms of Use</a></li>
            </ul>
          </div>
  
        
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-8 border-t  pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()}  Timi. All rights reserved.
        </div>
      </footer>
     );
}
 
export default Footer;