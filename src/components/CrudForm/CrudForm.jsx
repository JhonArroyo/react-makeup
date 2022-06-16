import React, { useState } from 'react';
import Products from '../../Products.json';

const CrudForm = () => {
    const [getProducts] = useState(Products);
    return (
        <div>
            <h1>CRUD Form</h1>
            <form>
                <label>Product name:</label><br />
                <input type="text" /><br />
                <label>Quantity:</label><br />
                <input type="text" /><br />
                <label>Price:</label><br />
                <input type="text" /><br />
            </form>
            <ul>
                {getProducts.map(element => (
                    <li key={element.id}>
                        Product: {element.product}
                        <br />
                        Quantity: {element.quantity}
                        <br />
                        Price: {element.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudForm;