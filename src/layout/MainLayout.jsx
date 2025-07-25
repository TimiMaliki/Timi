import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";


const MainLayout = () => {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        </>
     );
}
 
export default MainLayout;