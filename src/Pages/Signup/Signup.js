import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [isConfirmationStep, setIsConfirmationStep] = useState(false);
    const navigate = useNavigate();

    // Handle the sign-up process
    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email, // Required for sign-up
                },
            });
            console.log(user);
            setIsConfirmationStep(true); // Move to the confirmation step
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Handle confirmation code submission
    const handleConfirmSignUp = async (e) => {
        e.preventDefault();

        try {
            await Auth.confirmSignUp(username, confirmationCode);
            navigate('/login'); // Redirect to login page after confirmation
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                {isConfirmationStep ? (
                    <>
                        <h2>Confirm Sign Up</h2>
                        <form onSubmit={handleConfirmSignUp}>
                            <div>
                                <label>Confirmation Code:</label>
                                <input
                                    type="text"
                                    value={confirmationCode}
                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Confirm</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div>
                                <label>Username:</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
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
                            <button type="submit">Sign Up</button>
                        </form>
                    </>
                )}

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default SignUp;