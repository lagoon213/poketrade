import Logo from '../assets/logo-PokeTrade.png';

function Login(){
    return(
        <div className="logo">
            <img src={Logo} alt="poketrade logo"/>
            <h1>PokeTrade</h1>
        </div>
    )
}

export default Login;