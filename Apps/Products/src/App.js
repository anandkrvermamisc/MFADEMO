import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Product from './components/Product';
import Products  from './components/ProductList';
import ProductHeader from './components/ProdHeader';

const App = () => {
    return (
      <>
        <div>
          <Router >
              <ProductHeader/>
              <Routes>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/product/" element={<Product />} />
                  <Route exact path="/products" element={<Products />} />
                  <Route path="/" element={<Products />} />
              </Routes>
          </Router>
        </div>
      </>
    );
};

export default App;