import React from "react";
import './../../../Shared/Styles/commonstyles.css';

function About()
{
    return (
        <>
            <div className='aboutContainer'>
                <p>
                    A microfrontend is a microservice that exists within a browser.
                    Shared widgets can be defined under this shared project and can be exposed via webpack federation configuration.
                </p>
            </div>
        </>
    );
}

export default About;