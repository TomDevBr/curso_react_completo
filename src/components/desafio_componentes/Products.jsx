
import React from "react";

const Products = ({productName, productProps}) => {
    return (
        <div style={{border: '1px solid', width: '100%', height: 'auto', padding: '1rem', margin: '1rem'}}>
            <p>{productName}</p>
            <ul>
                {productProps.map(product => (
                        <li key={product}>{product}</li>
                ))}
           </ul>
        </div>
    )
}

export default Products;