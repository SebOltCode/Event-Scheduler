import Home from "./Home.jsx";
import { useState } from "react";
const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   const [showHome, setShowHome] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data= await response.json();
            if (response.ok) {
                localStorage.setItem('api_key', JSON.stringify(data.token));
                localStorage.setItem('id', JSON.stringify(data.user.id));
                setShowHome(true);
                alert("Login successful");
            } else {
                
               alert("email or password is incorrect");
            }
        } catch (error) {
            console.log('Network error: ' + error.message);
            console.log('Network error:', error);
        }
    };
    return (
        <>
        {showHome ? 

            <Home/> :
            <>
        <h1 className="text-3xl font-bold text-center mt-10">Already have an account ?</h1>
        <form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
           <div className="m-3">
                <label className="input input-bordered flex items-center gap-2 mt-44">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input className="grow" placeholder="Email" type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </label>
            </div>
            <button className="btn btn-info m-5" type="submit">Login</button>
        </form>
        </>
}
        </>

    );
    }
export default LogIn;