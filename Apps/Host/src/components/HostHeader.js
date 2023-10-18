import React from "react";
import { Link } from "react-router-dom";
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
                            <Link to='/about'>
                                <button className='linkbutton'>About</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HostHeader;