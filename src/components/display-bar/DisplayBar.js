import React from 'react';
import "./GridDisplay.css";
import Docs from './Docs';
import Code from './Code';


const DisplayBar = ()=>{
    return(
        <aside className = "dropdowns">
            <div className = {`dropdown-content ${iconSelected?'displayBar': 'hide'}`}>
                {iconSelected === 'code'? <code><Code /></code>: <Docs/>}
            </div>
        </aside>
    )
}

export default DisplayBar;

