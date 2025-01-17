import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import { useEffect, useState } from 'react';
import Head from '../head/Head';

const Produto = () => {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const productUrl = `https://ranekapi.origamid.dev/json/api/produto/${id}`;


    useEffect(()=> {
        async function fetchData(url) {

            if (!url) {
                setError('URL inválida');
                return;
              }

            try {
                setLoading(true);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                  }
          
                const json = await response.json();

                if (!json || Object.keys(json).length === 0) {
                    setError('Nenhum dado encontrado.');
                    return;
                  }

                setProduto(json);

            } catch (erro) {
                setError('Um erro ocorreu' + erro.message)
            } finally {
                setLoading(false)
            }
           
        }

        fetchData(productUrl)
    },[productUrl])

    if(loading) return <div>Carregando...</div>;
    if(error) return <p>{error}</p>;
    if (produto === null) return null;

    return(
        <section className={styles.produto + ' animeLeft'}>
            <Head title={`Ranek | ${produto.nome}`} description={`Ranek | Esse é um produto: ${produto.nome}`}/>
            {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.title}/>)}
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto;