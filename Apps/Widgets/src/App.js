import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Counter  from './components/Counter';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/WidgetHeader';

const App = () => {
    return (
      <>
        <div>
          <Router >
              <Header/>
              <Routes>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/cart" element={<ShoppingCart itemCount={10} />} />
                  <Route exact path="/counter" element={<Counter />} />
                  <Route path="/" element={<Counter />} />
              </Routes>
          </Router>
        </div>
      </>
    );
};

export default App;