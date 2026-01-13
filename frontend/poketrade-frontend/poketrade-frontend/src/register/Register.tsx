import Logo from '../assets/logo-PokeTrade.png';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateAccount() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Account succesvol aangemaakt");
                setFormData({username: "", email: "", password: ""});
            } else {
                const errorData = await response.json();
                setMessage(`Fout: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            setMessage("Server niet bereikbaar");
            console.error(error);
        }
    };

        return (
            <div className="register-page">
                <div className="register-logo">
                    <img src={Logo} alt="poketrade logo"/>
                    <h1>PokeTrade</h1>
                </div>
                <h2>Register</h2>
                <div className="register-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="..." value={formData.username} onChange={handleChange} />
                        <label>Email</label>
                        <input type="Email" name="email" placeholder="..." value={formData.email} onChange={handleChange} />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="..." value={formData.password} onChange={handleChange} />
                        <button type="submit">Register</button>
                        <p>Already have an account?<a onClick={() => navigate("/login")}> Login</a></p>
                    </form>
                    <p className="register-message">{message}</p>

                </div>
                <h3 onClick={() => navigate("/")}>cancel</h3>
            </div>
        )
    }


