import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const validateInput = () => {
        
        if (!email || !password) {
            setErrorMessage('Eines oder beide Eingabefelder sind leer.');
            return false;
        }
        if (password.length < 8) {
            setErrorMessage('Das Passwort muss mindestens 8 Zeichen lang sein.');
            return false;
        }
        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setErrorMessage('');

        if (!validateInput()) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(`Response status: ${response.status}, Response message: ${data.error}`);
            if (response.ok) {
                setErrorMessage("Registration was succesfull, you will be navigated to the Log in section!");
                console.log('Registration successful');

                setTimeout(() => navigate('/login'), 3000);
            } else {
                console.log(data);
                if (response.status === 409) {
                    setErrorMessage('Der Benutzer existiert bereits in der Datenbank.');
                } else {
                    setErrorMessage('Email oder Passwort sind im falschen Format.');
                }
            }
        } catch (error) {
            console.log('Network error: ' + error.message);
            console.log('Network error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold flex pt-6" >Register</h1>
            <p className="text-l font-semibold flex p-4">Welcome to our awesome Event Scheduler App! Here you can create an account if you want to create an Event: </p>
            {errorMessage && <div style={{color: 'gray'}}>{errorMessage}</div>}
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                        
                        <label className="input input-bordered flex items-center gap-2 mt-44">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            type="email"
                            value= { email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='grow'
                            placeholder="Email"
                        />
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
                                <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className=''
                                placeholder="create a new password"
                                />
                        </label>
                        
                    <button className="btn btn-info m-5 ml-20" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;