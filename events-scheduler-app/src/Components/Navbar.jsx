import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('api_key') ? true : false;
        setIsAuthenticated(auth);
    }, []);

    return (
        <nav className="bg-gray-700 p-5">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className=" text-gray-300 hover:text-white">
            Event Scheduler
            </Link>
            <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white">
                Home
                </Link>
                {/* {!isAuthenticated && ( */}
                    <>
                        <Link to="LogIn" className="text-gray-300 hover:text-white">
                        Log in
                        </Link>
                        <Link to="Register" className="text-gray-300 hover:text-white">
                        Register
                        </Link>
                    </>
                )}
                {/* {isAuthenticated && ( */}
                    <Link to="Createevent" className="text-gray-300 hover:text-white">
                    Createevent
                    </Link>
                )}
            </div>
        </div>
    </nav>

    );
};
export default Navbar;