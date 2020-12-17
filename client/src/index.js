import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import ProductsProvider from './contexts/ProductsContext';
import CartProvider from './contexts/CartContext';
ReactDOM.render(
      <ProductsProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductsProvider>,
  document.getElementById('root')
);
