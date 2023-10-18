import { mount } from 'products/ProductApp';
import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductApp = () => {
    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      mount(ref.current, {
        initialPath: location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = location.location;
  
          if (pathname !== nextPathname) {
            navigate(nextPathname);
          }
        },
      });
    }, [location]);
  
    return <div ref={ref} />;
};

export default ProductApp;