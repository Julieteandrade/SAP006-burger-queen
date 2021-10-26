import './login.css';
import { Link, useHistory } from 'react-router-dom';
import GeekBurger from '../../img/GeekBurger.png';


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
        <div className='div-logo'>
        <img className='img-burger' src={GeekBurger} alt='icon-logo' />
        <h1 className='title-logo'>Geek Burger</h1>
        </div>
        <form className="form-login">
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit" onClick={logar}>
                Entrar
            </button>
            <a href="/cadastro" className="cadastre">
                Cadastre-se!
            </a>
        </form>
        </>

    );
};

export default Login;