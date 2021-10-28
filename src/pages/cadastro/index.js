import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebase.js';
import './cadastro.css';


function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);

    });


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };


    return (

        <>

            <h1>Cadastro</h1>
            <form>
                <input type="name" name="name" placeholder="Nome*" />
                <select name="role">
                    <option value="chef">Chefe</option>
                    <option value="waiter">Atendente</option>
                </select>
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
                <h2>Usuário logado em:</h2>
                {user?.email}
                <button type="submit" onClick={register}>
                    Entrar
                </button>
            </form>
            <Link to="/">Já tenho conta</Link>
        </>
    );

};
export default Cadastro;