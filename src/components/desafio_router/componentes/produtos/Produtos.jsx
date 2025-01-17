import { useEffect, useState } from "react"
import styles from "./Produtos.module.css"
import {Link} from 'react-router-dom'
import Head from "../head/Head";
const Produtos = () => {
    const [produtos, setProdutos] = useState(null);

    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto').then(response => response.json()
        ).then(json => setProdutos(json))
    },[])

    if (produtos === null) return null
    return (
        <div className={styles.produtos + ' animeLeft'}>
            <Head title={`Ranek`} description={`Descirção do site Ranek`}/>
            {produtos.map(produto => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
                    <h1 className={styles.name}>{produto.nome}</h1>
                </Link>
            ))}
        </div>
    )
}

export default Produtos;