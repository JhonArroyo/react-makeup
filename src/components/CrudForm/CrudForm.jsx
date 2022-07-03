import React, { useState } from 'react';
import Products from '../../json/Products.json';
import styled from 'styled-components';
//import { saveLocalStorageValues } from '../../localstorage';

const CrudForm = () => {
    const [getProducts, setProducts] = useState(Products);
    const [getSubmitForm, setSubmitForm] = useState(
        {
            product: '',
            quantity: '',
            price: '',
        });
    const [search, setSearch] = useState('');

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
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </form>
            <div>
                {getProducts.filter((element) =>
                    element.product.toLowerCase().includes(search.toLowerCase())
                ).map((element, key) => (
                    <div key={key}>
                        <p>{element.product}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CrudForm;