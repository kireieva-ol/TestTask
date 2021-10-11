import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Сatalog from './Catalog';
import AddNewProduct from './AddNewProduct';
import './App.css';

const App = () => (
    <div className='app'>
        <Header />

        <Route path='/' exact>
            <Сatalog className='сatalog' />
        </Route>

        <Route path='/addNewProduct' component={AddNewProduct}>
            <AddNewProduct />
        </Route>
    </div>
);

export default App;
