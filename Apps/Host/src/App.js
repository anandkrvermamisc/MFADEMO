import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HostHeader  from './components/HostHeader';
import About from './components/About';
import Home from './components/Home';
import ProductApp from './components/remotes/ProductApp'; 

const App = () => {
    return (
      <div>
        <Router >
            <div>
                <HostHeader/>
            </div>
            <Routes>
                <Route exact path="/products" element={<ProductApp />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
      </div>
    );
};

export default App;