import React, { Component } from 'react';

class AddNewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productImageLink: '',
            shortDescription: '',
            price: '',
        };
    }

    isFilledForm = () => {
        return !!this.state.productName && !!this.state.productImageLink && !!this.state.shortDescription && !!this.state.price;
    };

    addItemToLocalStorage = addedProduct => {
        let currentProducts = JSON.parse(localStorage.getItem('goods'));
        currentProducts.push(addedProduct);
        localStorage.setItem('goods', JSON.stringify(currentProducts));

        this.setState({
            productName: '',
            productImageLink: '',
            shortDescription: '',
            price: '',
        });
    };

    getMaxId() {
        let currentProducts = JSON.parse(localStorage.getItem('goods'));
        let maxId = currentProducts.length != 0 ? currentProducts[0].id : 0;
        currentProducts.forEach(element => {
            if (element.id !== undefined) {
                maxId = Math.max(maxId, parseInt(element.id, 10));
            }
        });
        return maxId;
    }

    onFormSubmit = e => {
        e.preventDefault();

        if (this.isFilledForm(this.state.productName, this.state.productImageLink, this.state.shortDescription, this.state.price)) {
            const addedProduct = {
                id: this.getMaxId() + 1,
                productName: this.state.productName,
                productImageLink: this.state.productImageLink,
                shortDescription: this.state.shortDescription,
                price: this.state.price,
            };

            this.addItemToLocalStorage(addedProduct);
        }
    };

    render() {
        return (
            <div className='add-new-product-container'>
                <h2>Please fill in the information about the new bicycle model</h2>
                <form onSubmit={this.onFormSubmit} id='form'>
                    <div className='input_wrapper'>
                        <label>Product name</label>
                        <input type='text' value={this.state.productName} onChange={e => this.setState({ productName: e.target.value })} />
                    </div>
                    <div className='input_wrapper'>
                        <label>Product image link</label>
                        <input type='text' value={this.state.productImageLink} onChange={e => this.setState({ productImageLink: e.target.value })} />
                    </div>
                    <div className='input_wrapper'>
                        <label>Short description</label>
                        <input type='text' value={this.state.shortDescription} onChange={e => this.setState({ shortDescription: e.target.value })} />
                    </div>
                    <div className='input_wrapper'>
                        <label>Price</label>
                        <input type='number' value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                    </div>
                    <div className='input_wrapper'>
                        <input type='submit' value='Submit' className='submit_button'></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddNewProduct;
