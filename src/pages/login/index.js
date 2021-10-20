import './login.css';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo/NerdBurger.png';


const Login = () => {
    const history = useHistory()
    //TODO gerenciar estados dos inputs
    const logar = (e) => {
        e.preventDefault();
        //TODO login de usuário
        console.log("fazer requisição na API em /auth")

        //TODO deu bom? navega para a tela de menu
        history.push("/menu");
    };

    return (



        <>
        <h1>Login</h1>
        <form className="form-login">
            <img src={logo} className='App-logo' alt='logo' />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit" onClick={logar}>
                Entrar
            </button>
            <Link to="/cadastro">cadastre-se</Link>
        </form>
        </>

    );
};

export default Login;