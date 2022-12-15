import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log('what is pw state atm', password);
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            apple: username,
            password: password
        }
        axios.post("http://localhost:3001/login", data)
            .then(res => {
                console.log("you made it this far", res)
                if (!res.data) {
                    // display error message to user
                    console.log('user not found');
                } else {
                    navigate('/dashboard')
                }
            })
        //send {username} and {password} to backend
    };
    return (
        <div>
            <h1>LOG IN PAGE</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="username">Username:</label>
                <input //attributes below
                    type="text"
                    id="username"
                    // ref={userRef} //Joey
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)} //Joey
                    // value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input //attributes below
                    type="password"
                    id="password"
                    // ref={userRef} //Joey
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)} //Joey
                    // value={user}
                    required
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}


export default Login;
