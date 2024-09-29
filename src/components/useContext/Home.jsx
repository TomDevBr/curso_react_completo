// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const Home = () => {
    const global = useContext(GlobalContext)
    console.log(global)
    if (global.data === null) return <p>sem produtos</p>
    return <>
    <button onClick={global.clearData}>Limpar produtos</button>
        <div>{global.data.map(product => (
            <ul>
                <li>{product.nome}</li>
            </ul>
        ))}</div>
    
    </>
  
}