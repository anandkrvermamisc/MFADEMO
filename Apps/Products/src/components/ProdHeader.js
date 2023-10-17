import React from "react";
import { Link } from "react-router-dom";
import './../../../Shared/Styles/commonstyles.css';

function ProductHeader() {
    return (
        <div className='menuContainer'>
            <table className='menu'>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/products'>
                                <button className='linkbutton'>Products</button>
                            </Link>
                        </td>
                        <td>&nbsp;|&nbsp;</td>
                        <td>
                            <Link to='/about'>
                                <button className='linkbutton'>About Products</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductHeader;