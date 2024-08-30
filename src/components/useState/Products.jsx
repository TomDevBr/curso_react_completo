import React from "react"
const Products = ({dados}) => {
    return (
        <section>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </section>
    )
}

export default Products;