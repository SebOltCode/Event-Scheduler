import { Outlet,Link } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";
const MainLayout = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('api_key') ? true : false;
        setIsAuthenticated(auth);
    }, [isAuthenticated]);
    function logout() {
        localStorage.removeItem('api_key');
        localStorage.removeItem('id');
        setIsAuthenticated(false);
    }
    return (
        
        <div className="flex flex-col min-h-screen bg-[url('/media-src/white-shapes-abstract-background-free-vector.jpg')] bg-cover">
        <nav className="bg-gray-700 p-5">
        <div className="container mx-auto flex justify-between items-center">
            <img src="\media-src\logoipsum-248.svg" alt="Logo" />
            <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white">
                Home
                </Link>
                {!isAuthenticated && (
                    <>
                        <Link to="LogIn" className="text-gray-300 hover:text-white">
                        Log in
                        </Link>
                        <Link to="Register" className="text-gray-300 hover:text-white">
                        Register
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <Link to="Createevent" className="text-gray-300 hover:text-white">
                        Createevent
                        </Link>
                        <Link to="LogIn" className="text-gray-300 hover:text-white" onClick={logout}>
                        Change Account ?
                        </Link>
                    </>
                )}
            </div>
        </div>
    </nav>
        
        <div className= "container mx-auto">
            <Outlet context={{isAuthenticated ,setIsAuthenticated}}/>
        </div>
        <main className="flex-1">
        {children} 
      </main>
        <Footer className="mt-auto"/>
        </div>
    
    );
    };

    export default MainLayout;