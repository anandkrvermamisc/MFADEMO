import React from "react";
import { Link } from "react-router-dom";
import './../../../Shared/Styles/commonstyles.css';

const WidgetHeader = () => {
    return (
        <div className='menuContainer'>
            <table className='menu'>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/counter'>
                                <button className='linkbutton'>Counter</button>
                            </Link>
                        </td>
                        <td>&nbsp;|&nbsp;</td>
                        <td>
                            <Link to='/cart'>
                                <button className='linkbutton'>Shopping Cart</button>
                            </Link>
                        </td>
                        <td>&nbsp;|&nbsp;</td>
                        <td>
                            <Link to='/about'>
                                <button className='linkbutton'>About Widgets</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetHeader;