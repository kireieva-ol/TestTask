import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../Photo/logo.jpg';

export default function Header(props) {
    return (
        <header>
            <div className='header-wrapper'>
                <img className='logo-image' src={logoImage} alt='Our Logo' />
            </div>

            <nav className='navigation'>
                <button className='navigation-item'>
                    <Link to='/'>Bicycle catalog</Link>
                </button>
                <button className='navigation-item'>
                    <Link to='/addNewProduct'>Add new product</Link>
                </button>
            </nav>
        </header>
    );
}
