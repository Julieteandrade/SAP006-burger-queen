import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndpassword } from 'firebase/auth';

const cadastrar = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();

    const criarNovoUsuario = (e) => {
        e.preventDefault();
        console.log('cadastrar user', email, password);
        createUserWithEmailAndpassword = (auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                alert('Tente denovo')
            });
    };

    return (

        <>

            <h1>Cadastro</h1>
            <form>
                <input type="name" name="name" placeholder="Nome" />
                <select name="role">
                    <option value="chef">Chefe</option>
                    <option value="waiter">Atendente</option>
                </select>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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