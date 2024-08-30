// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React from "react"
import Products from "./Products";



const Home = () => {
    const [uriFetched, setUriFetched] = React.useState(null);
    const [products, setProducts] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const uriOfProduct = {
        tabletUri: 'https://ranekapi.origamid.dev/json/api/produto/tablet',
        smartphoneUri: 'https://ranekapi.origamid.dev/json/api/produto/smartphone',
        notebookUri: 'https://ranekapi.origamid.dev/json/api/produto/notebook'
    }

    const getData = async (baseUri) => {
      setLoading(true);
      const response = await fetch(baseUri)

      const json = await response.json()

      setProducts(json);
      setLoading(false);
    }
    

    
    return (
        <div>
            <h1>Use state</h1>

            <button onClick={() => {getData(uriOfProduct.tabletUri)}}>Tablet</button>
            <button onClick={() => {getData(uriOfProduct.smartphoneUri)}}>Smartphone</button>
            <button onClick={() => {getData(uriOfProduct.notebookUri)}}> notebook</button>

            <section>
                    {loading && <p>...Carregando</p>}
                    {!loading && products && <Products dados={products}/>   }
            </section>
        </div>
    )
}

export default Home;