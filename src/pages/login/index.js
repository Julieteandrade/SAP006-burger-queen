import './login.css';
import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import GeekBurger from '../../img/GeekBurger.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase.js';


function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const logar = async () => {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        )
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};


// const Login = () => {
//     const history = useHistory();
//     //TODO gerenciar estados dos inputs
//     const logar = (e) => {
//         e.preventDefault();
//         //TODO login de usuário
//         console.log("fazer requisição na API em /auth")

//         //TODO deu bom? navega para a tela de menu
//         history.push("/menu");
//     };

    return (



        <>
            <div className='div-logo'>
                <img className='img-burger' src={GeekBurger} alt='icon-logo' />
                <h1 className='title-logo'>Geek Burger</h1>
            </div>
            <form className="form-login">
                <input 
                type="email" 
                name="email" 
                placeholder="E-mail*" 
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail}
                />
                <input 
                type="password" 
                name="password" 
                placeholder="Senha*" 
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                />
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