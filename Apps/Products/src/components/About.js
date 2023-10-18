import React from "react";

import { ShowMessage } from "../../../Shared/Script/commonfunctions";
import './../../../Shared/Styles/commonstyles.css';

function About()
{
    return (
        <>
            <div className='aboutContainer'>
                <p>
                    .... This is a Products App About Page ....
                </p>
                <br/><br/>
                <button onClick={()=> ShowMessage('This is a Message from Products About Page Button')}>
                    Invoke a Common Library Function
                </button>
            </div>
        </>
    );
}

export default About;