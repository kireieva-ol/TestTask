import React from 'react';
import PropTypes from 'prop-types';

export default function Goods(props) {
    function handleDelete(e) {
        e.preventDefault();
        props.getIdHandler(props.id);
    }

    return (
        <div className='goods'>
            <button id={props.id} onClick={handleDelete}>
                X
            </button>
            <div className='product-name'>{props.productName}</div>
            <img src={props.productImageLink} alt='Bicycle' />
            <div className='short-description'>{props.shortDescription}</div>
        </div>
    );
}

Goods.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    productName: PropTypes.string,
    productImageLink: PropTypes.string,
    shortDescription: PropTypes.string,
};
