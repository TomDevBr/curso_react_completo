import React from "react";
import Products from "./Products";
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];


const Home = () => {

    const { pathname } = window.location;

    console.log(pathname)
    return(
       <div>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/Products">Produtos</a>
            </li>
        </ul>
        
        

        <h1>{pathname === "/home" ? 'Home' : 'Produtos'}</h1>

        <section>
            {
                pathname ==="/home" ? (
                    <p>Esta é a home do site</p>
                ) : (
                    produtos.map(produto => (
                        <Products productName={produto.nome} productProps={produto.propriedades}/>
                    ))
                )
            }
        </section>
       </div>
    )
};

export default Home;