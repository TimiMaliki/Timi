import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Header from "../components/Headers";

const Layout = () => {
    return ( 
    <>
   <Header/>
   <Outlet/>
   <ScrollRestoration/>
    </> );
}
 
export default Layout;