import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({children}) => {
    return (
        
        <div className="flex flex-col min-h-screen bg-[url('/media-src/white-shapes-abstract-background-free-vector.jpg')] bg-cover">
        <Navbar />
        
        <div className= "container mx-auto">
            <Outlet />
        </div>
        <main className="flex-1">
        {children} 
      </main>
        <Footer className="mt-auto"/>
        </div>
    
    );
    };

    export default MainLayout;