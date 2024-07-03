import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = () => {
        
        if (!email || !password) {
            setErrorMessage('Eines oder beide Eingabefelder sind leer.');
            return false;
        }
        // Hier könnten weitere Validierungen für das Format von E-Mail und Passwort hinzugefügt werden.
        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setErrorMessage('');

        if (!validateInput()) {
            return; // Validierung fehlgeschlagen, Anfrage nicht senden
        }

        try {
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            await response.json();
            if (response.ok) {
                setErrorMessage("Registration was succesfull!");
                console.log('Registration successful');

            } else {
                
                const data = await response.json();
                if (data.message === 'User exists') {
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
        <div>
            <h1>Register</h1>
            {errorMessage && <div style={{color: 'gray'}}>{errorMessage}</div>} {/* Informationsfenster anzeigen */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value= { email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;