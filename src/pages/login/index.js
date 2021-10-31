import './login.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import NerdBurger from '../../img/NerdBurger.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



function Login() {
    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const auth = getAuth();
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

    history.push("/menu");


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