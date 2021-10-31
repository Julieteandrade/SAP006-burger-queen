import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';



const Menu = () => {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const db = getFirestore();
    //TODO trazer os produtos da api

    useEffect(() => {
        const data = [
            { id: 1, name: 'Café americano' },
            { id: 2, name: 'Café com leite' },
            { id: 3, name: 'Sanduíche de presunto e queijo' },
            { id: 4, name: 'Suco de fruta natural' },
            { id: 5, name: 'Hambúrger simples' },
            { id: 6, name: 'Hambúrger duplo' },
            { id: 7, name: 'Batata frita' },
            { id: 8, name: 'Anéis de cebola' },
            { id: 9, name: 'Água 500ml' },
            { id: 10, name: 'Água 750ml' },
            { id: 11, name: 'Bebida gaseificada 500ml' },
            { id: 12, name: 'Bebida gaseificada 750ml' },
        ];

        setProdutos(data);

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
            setProdutos(newArray);
        });
    }, [db]);



    //TODO manipular add de produtos

    const adicionaProduto = (prod) => {
    };

    const enviarNovoPedido = (e) => {
        e.preventDefault();

        //TODO montar body da requisição
        console.log('fazer pedido na API');

        //TODO requisição deu bom , navegar para a tela de pedidos
        console.log('navegar para /pedidos');
    };

    return (
        <>

            <h1>Menu</h1>
            <main>
                <section>
                    <ul>
                        {produtos.map((prod) => (
                            <li key={prod.id}>
                                {prod.name} {prod.price}
                                <button type="button" onClick={() => adicionaProduto(prod)}>
                                    +
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                <button type="button" onClick={enviarNovoPedido}>
                    Fazer novo pedido
                </button>

            </main>
            <a href="/pedidos">Ver todos os pedidos</a>
        </>
    );
};

export default Menu;



