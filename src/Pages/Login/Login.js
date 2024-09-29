import React, { useState } from 'react';
import { Auth } from 'aws-amplify'; // Ensure correct import of Auth
import { useNavigate, Link } from 'react-router-dom'; // Import Link to navigate to the Sign Up page
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await Auth.signIn(username, password);
            navigate('/playbook'); // Redirect to playbook or other routes
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>

                {/* Display error message if login fails */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                {/* Add Create Account button below the Login button */}
                <div className="create-account-container">
                    <p>Don't have an account?</p>
                    <Link to="/signup">
                        <button className="create-account-button">Create Account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;