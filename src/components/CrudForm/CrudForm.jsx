import React, { useState } from 'react';
import Products from '../../json/Products.json';
//import { saveLocalStorageValues } from '../../localstorage';

const CrudForm = (props) => {
    const [getProducts, setProducts] = useState(Products);
    const [getSubmitForm, setSubmitForm] = useState(
    {
        product: '',
        quantity: '',
        price: '',
    });

    const handleChangeForm = (e) => {
        e.preventDefault();
        const fieldProduct = e.target.name;
        const fieldValue = e.target.value;

        const newFormProduct = { ...getSubmitForm };
        newFormProduct[fieldProduct] = fieldValue;

        setSubmitForm(newFormProduct);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const newProduct = {
            product: getSubmitForm.product,
            quantity: getSubmitForm.quantity,
            price: getSubmitForm.price,
        };

        const newProducts = [...getProducts, newProduct];
        setProducts(newProducts);
    }

    return (
        <div>
            <h1>CRUD Form</h1>
            <form onSubmit={handleSubmitForm}>
                <label>Product name:</label><br />
                <input 
                    type="text" 
                    name="product"
                    onChange={handleChangeForm}
                /><br />
                <label>Quantity:</label><br />
                <input 
                    type="text" 
                    name="quantity"
                    onChange={handleChangeForm}
                /><br />
                <label>Price:</label><br />
                <input 
                    type="text" 
                    name="price"
                    onChange={handleChangeForm}
                /><br /><br />
                <input 
                    type="submit" 
                    value="Enviar"
                /><br />
                <input 
                    type="text" 
                    placeholder="search"
                />
            </form>
            <ul>
                {getProducts.map((element) => (
                    <li key={element.id}>
                        Product: {element.product}
                        <br />
                        Quantity: {element.quantity}
                        <br />
                        Price: {element.price}
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudForm;