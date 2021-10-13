import './login.css';
import { Link, useHistory } from 'react-router-dom';


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

            <h1>login</h1>
            <form>
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