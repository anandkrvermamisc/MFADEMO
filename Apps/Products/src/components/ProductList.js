import React, { Suspense, useState }  from 'react'
import { Link } from 'react-router-dom'
import  Counter from 'widgets/WidgetCounter';

function Products()
{
    const productsList = [
        { id: 1, name: 'Speaker', price: 150, currency: 'GBP' },
        { id: 2, name: 'Camera', price: 350, currency: 'GBP' },
        { id: 3, name: 'Watch', price: 23.5, currency: 'GBP' },
        { id: 4, name: 'Phone', price: 1500, currency: 'GBP' },
    ]

    return(
        <div>
            <table>
                <tbody>
                {productsList.map(item => (
                    <tr key={item.id}>
                        <td>
                            <Link to='/product' state={{id: item.id}}>
                                <button className='linkbutton'>
                                    {item.name}
                                </button>
                            </Link>
                            
                        </td> 
                        <td>{item.price}</td>
                        <td>{item.currency}</td>
                        <td>
                            <Suspense fallback={<h2>🌀 Loading...</h2>}>
                                <Counter/>
                            </Suspense>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;