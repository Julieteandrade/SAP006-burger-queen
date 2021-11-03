import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import NerdBurger from '../../img/NerdBurger.png';
import './cadastro.css';
import Footer from '../../componentes/footer';
import Button from '../../componentes/button';



const Cadastrar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();



    const criarNovoUsuario = (e) => {
        e.preventDefault();
        //TODO cadastro de usuário
        console.log('cadastrar user', email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                console.log(user);

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, errorCode, errorMessage);
                alert('Preencha os campos obrigatórios');

            });

    };

    return (
        <>
            <div className='div-logo'>
                <img className='img-burger' src={NerdBurger} alt='icon-logo' />
                <h1 className='title-logo'>Nerd Burger</h1>
            </div>
            <form className="form-cadastro">
                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha*"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <select name="role">
                    <option value="chef">Chefe</option>
                    <option value="waiter">Atendente</option>
                </select>
                <Button className="button-global" onClick={criarNovoUsuario}>
                    Cadastrar
                </Button>
            </form>
            <a href="/" className="doLogin">
                Já tenho conta!
            </a>
            <Footer />
        </>
    );
};

export default Cadastrar;
