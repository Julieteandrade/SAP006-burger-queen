import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';



const Menu = () => {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const db = getFirestore();
    //TODO trazer os produtos da api

    useEffect(() => {


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
            setProdutos(newArray)
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



