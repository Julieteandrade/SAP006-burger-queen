import './login.css';
import { useHistory } from 'react-router-dom';
import NerdBurger from '../../img/NerdBurger.png';
import Footer from '../../componentes/footer';
// import { getAuth, singInWithEmailAndPassword } from 'firebase/auth';


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
                <img className='img-burger' src={NerdBurger} alt='icon-logo' />
                <h1 className='title-logo'>Nerd Burger</h1>
            </div>
            <form className="form-login">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha*"
                />
                <button type="submit" onClick={logar}>
                    Entrar
                </button>
                <a href="/cadastro" className="cadastre">
                    Cadastre-se!
                </a>
            </form>
            <Footer />

        </>

    );
};

export default Login;