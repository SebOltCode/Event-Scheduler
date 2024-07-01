import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <>
        <Navbar />
        
        <div className= "container mx-auto">
            <Outlet />
        </div>
        </>
    );
    };

    export default MainLayout;