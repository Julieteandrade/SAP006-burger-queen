import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import './style.css';

const Menu = () => {
    const [products , setProducts] = useState([]);
    const [carrinho , setCarrinho] = useState([]);
    const db = getFirestore();
//TODO trazer os produtos da api

useEffect(() => {
//     const data = [
//         { id: 1, name: 'Café americano'},
//         { id: 2, name: 'Café com leite'},
//         { id: 3, name: 'Sanduíche de presunto e queijo'},
//     ];
    // setProducts(data);

    getDocs(collection(db, 'products')).then((productsArrayFirestore) => {
        const newArray = [];
        productsArrayFirestore.forEach((doc) => {
         
        // console.log(doc);

        const obj = {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
};
newArray.push(obj);
});
console.log(newArray);
setProducts(newArray);
});
},[db]);

    

//TODO manipular add de produtos

const adicionaProduto = (prod) => {
};

const enviarNovoPedido = (e) => {
    e.preventDefault();

//TODO montar body da requisição
console.log('navegar para /pedidos');
};

return(
<>

<h1>Menu</h1>
<main>
    <section>
        <ul>
            {products.map((prod) => (
                <li key={prod.id}>
                    {prod.name} {prod.price}
                    <button type="button" onClick={() => adicionaProduto(prod)}>
                    +
                    </button>
                    </li>
            ))}
        </ul>
    </section>
    <section>
    {carrinho.map((pedido) => (
        <li key={pedido.id}>{pedido.name}</li>
    ))}
    <button type="button" onClick={enviarNovoPedido}>
        Fazer novo pedido
    </button>
    </section>
</main>
<a href="/pedidos">Ver todos os pedidos</a>
</>
);
    };

    export default Menu;



