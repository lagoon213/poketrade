import Logo from '../assets/logo-PokeTrade.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    return(
        <div className="login-page">
        <div className="login-logo">
            <img src={Logo} alt="poketrade logo"/>
            <h1>PokeTrade</h1>
        </div>
        <h2>Login</h2>
            <div className="login-container">
        <form className="login-form">
            <label>Email or username</label>
            <input type="text" placeholder="..." />
            <label>Password</label>
            <input type="password" placeholder="..." />
            <a>Forgot password?</a>
            <button type="submit">Login</button>
            <p>Don't have an account?<a> Sign up</a></p>
        </form>
        </div>
            <h3 onClick={() => navigate("/")}>cancel</h3>
        </div>
    );
}

export default Login;
