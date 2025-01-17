import './login.css';
import { useHistory } from 'react-router-dom';
import NerdBurger from '../../img/NerdBurger.png';
import Footer from '../../componentes/footer';
import Button from '../../componentes/button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const auth = getAuth();
    const history = useHistory();

    //TODO gerenciar estados dos inputs
    const logar = (e) => {
        e.preventDefault();
        //TODO login de usuário
        console.log("fazer requisição na API em /auth")

        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                console.log(user);

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, errorCode, errorMessage);
                alert("Preencha os campos obrigatórios");
                //TODO deu bom? navega para a tela de menu
                history.push("/menu");
            });
    }

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
                <Button className="button-global" onClick={logar}>
                    Entrar
                </Button>
                <a href="/cadastro" className="cadastre">
                    Cadastre-se!
                </a>
            </form>
            <Footer />

        </>

    );
};

export default Login;