import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Product()
{
    const locationState = useLocation().state;
    const productsList = [
        { id: 1, name: 'Speaker', price: 150, currency: 'GBP' },
        { id: 2, name: 'Camera', price: 350, currency: 'GBP' },
        { id: 3, name: 'Watch', price: 23.5, currency: 'GBP' },
        { id: 4, name: 'Phone', price: 1500, currency: 'GBP' },
    ]
    
    const [productDetail, setProductDetail] = useState({
         id: 0, 
         name: 'Not Found',
         price: 0, 
         currency: '' 
    })

    useEffect(() => {
        const defaultProduct = productDetail;
        setProductDetail(productsList.find(c => c.id === locationState.id || 0) || defaultProduct);
    }, []);
    
    return(
        <>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Product ID</td><td>{productDetail.id}</td>
                        </tr>
                        <tr>
                            <td>Name</td><td>{productDetail.name}</td>
                        </tr>
                        <tr>
                            <td>Price</td><td>{productDetail.price}</td>
                        </tr>
                        <tr>
                            <td>currency</td><td>{productDetail.currency}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Product;