import Logo from '../assets/logo-PokeTrade.png';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    return(
        <div className="register-page">
            <div className="register-logo">
                <img src={Logo} alt="poketrade logo"/>
                <h1>PokeTrade</h1>
            </div>
            <h2>Login</h2>
            <div className="register-container">
                <form className="register-form">
                    <label>Username</label>
                    <input type="text" placeholder="..." />
                    <label>Email</label>
                    <input type="Email" placeholder="..." />
                    <label>Password</label>
                    <input type="password" placeholder="..." />
                    <a>Forgot password?</a>
                    <button type="submit">Register</button>
                    <p>Already have an account?<a onClick={() => navigate("/login")}> Login</a></p>
                </form>
            </div>
            <h3 onClick={() => navigate("/")}>cancel</h3>
        </div>
    );
}

export default Register;
