import React, { useState } from 'react';
import Goods from './Goods.js';
import { data } from './data.json';

class Сatalog extends React.Component {
    constructor(props) {
        super(props);

        localStorage.setItem('goods', JSON.stringify(data));
        let calculatedGoods = this.calculateGoods(data);
        this.state = {
            totalCount: calculatedGoods.totalCount,
            totalPrice: calculatedGoods.totalPrice,
            avgPrice: calculatedGoods.avgPrice,
        };
    }

    calculateGoods(goodsData) {
        let totalCount = 0;
        let totalPrice = 0;
        let avgPrice = 0;

        goodsData.forEach(item => {
            totalCount++;
            totalPrice += parseInt(item.price);
        });
        avgPrice = !!totalCount ? totalPrice / totalCount : 0;

        return {
            totalCount: totalCount,
            totalPrice: totalPrice,
            avgPrice: avgPrice.toFixed(2),
        };
    }

    removeItem(id) {
        const currentProducts = JSON.parse(localStorage.getItem('goods'))
            .filter(item => item.id !== id)
            .map(i => i);
        localStorage.setItem('goods', JSON.stringify(currentProducts));

        let calculatedGoods = this.calculateGoods(currentProducts);
        this.setState({
            totalCount: calculatedGoods.totalCount,
            totalPrice: calculatedGoods.totalPrice,
            avgPrice: calculatedGoods.avgPrice,
        });
    }

    removeAllItems() {
        localStorage.setItem('goods', JSON.stringify([]));
        this.setState({
            totalCount: 0,
            totalPrice: 0,
            avgPrice: 0,
        });
    }

    getId(id) {
        this.removeItem(id);
    }

    render() {
        return (
            <>
                <div className='summary'>
                    <p>Total amount : {this.state.totalCount}</p>
                    <p>Total price : {this.state.totalPrice}</p>
                    <p>Average price : {this.state.avgPrice}</p>
                    <div>
                        <button className='button-delete-all' onClick={this.removeAllItems.bind(this)}>
                            Delete All
                        </button>
                    </div>
                </div>

                <div className='сatalog-wrapper'>
                    {JSON.parse(localStorage.getItem('goods')).map(item => (
                        <Goods id={item.id} key={item.id} productName={item.productName} productImageLink={item.productImageLink} shortDescription={item.shortDescription} getIdHandler={this.getId.bind(this)} />
                    ))}
                </div>
            </>
        );
    }
}

export default Сatalog;
