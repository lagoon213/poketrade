import Logo from '../assets/logo-PokeTrade.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);
                setMessage("Inloggen succesvol");
                setTimeout(() => navigate("/"), 1500);
            } else {
                const errorData = await response.json();
                setMessage("Fout: " + JSON.stringify(errorData));
            }
        } catch{
            setMessage("Server niet bereikbaar");
        }
    };


    return(
        <div className="login-page">
        <div className="login-logo">
            <img src={Logo} alt="poketrade logo"/>
            <h1>PokeTrade</h1>
        </div>
        <h2>Login</h2>
            <div className="login-container">
                <p>{message}</p>
        <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder="..." name="username" value={credentials.username} onChange={handleChange} />
            <label>Password</label>
            <input type="password" placeholder="..." name="password" value={credentials.password} onChange={handleChange} />
            <a>Forgot password?</a>
            <button type="submit">Login</button>
            <p>Don't have an account?<a onClick={() => navigate("/register")}> Sign up</a></p>
        </form>
        </div>
            <h3 onClick={() => navigate("/")}>cancel</h3>
        </div>
    )
}
