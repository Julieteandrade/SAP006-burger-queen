import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import NerdBurger from '../../img/NerdBurger.png';
import './cadastro.css';


const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();


    const criarNovoUsuario = () => {
        //TODO cadastrar novo usuário
        console.log('cadastrar user');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                console.log(user)

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert('Tente novamente')
            });
        //TODO navegar para Menu
    };

    return (
        <>
            <div className='div-logo'>
                <img className='img-burger' src={NerdBurger} alt='icon-logo' />
                <h1 className='title-logo'>Nerd Burger</h1>
            </div>
            <form className='form-cadastro'>
                <input type="name" name="name" placeholder="Nome" />
                <select name="role">
                    <option value="chef">Chefe</option>
                    <option value="waiter">Atendente</option>
                </select>
                <input type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={criarNovoUsuario}>
                    Entrar
                </button>
            </form>
            <Link to="/">Já tenho conta</Link>
        </>
    );
};

export default Cadastro;
