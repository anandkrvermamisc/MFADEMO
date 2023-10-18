import React from "react";
import { Link } from "react-router-dom";
import  ShoppingCart from 'widgets/WidgetCart';

import './../../../Shared/Styles/commonstyles.css';

function HostHeader() {
    return (
        <div className='menuContainer'>
            <table className='menu'>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/'>
                                <button className='linkbutton'>Home</button>
                            </Link>
                        </td>
                        <td>&nbsp;|&nbsp;</td>
                        <td>
                            <Link to='/products'>
                                <button className='linkbutton'>Products</button>
                            </Link>
                        </td>
                        <td>&nbsp;|&nbsp;</td>
                        <td>
                            <Link to='/about'>
                                <button className='linkbutton'>About</button>
                            </Link>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td><ShoppingCart itemCount={15}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HostHeader;