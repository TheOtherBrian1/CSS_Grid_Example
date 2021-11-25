import React, {useState, useRef} from 'react';
import GRID_COLORS from '../../constants'
import "./GridDisplay.css";
import Docs from './Docs';
import Code from './Code';
import {CodeOutlined, FileTextOutlined} from '@ant-design/icons';

const GridDisplay = ()=> {
    const [iconSelected, setIconSelected] = useState(null);
    const gridDimensions = useRef(null);
    
    return(
        <section className = 'ex-section'>
            <h2 className = "ex-title-box">
                <strong className = 'ex-title'>
                    Grid Intro: 
                </strong>
                <span className = 'ex-subtitle'>
                     Creating a grid container
                </span>
            </h2>
            <div className = 'controls' style = {{display: 'none'}}>

            </div>
            <aside className = "dropdowns">
                <div className = {`dropdown-content ${iconSelected?'displayBar': 'hide'}`}>
                    {iconSelected === 'code'? <code><Code /></code>: <Docs/>}
                </div>
            </aside>

            <div className = "example">
                <div className = "size-display">
                    <div className = "hr-top" style = {{width: gridDimensions.current?.offsetWidth}}>
                        <span>{gridDimensions.current?.offsetWidth}</span>
                        <hr />
                    </div>
                    <div className = "hr-side" style = {{width: gridDimensions.current?.offsetHeight}}>
                        <span className = 'span-side'>{gridDimensions.current?.offsetHeight}</span>
                        <hr />
                    </div>
                    <div className = 'grid' ref = {gridDimensions}>
                        {
                            GRID_COLORS.slice(0, 4).map((clr, i)=>
                                <div className = 'grid-item' key={`${clr}${i}`} style = {{backgroundColor: clr}}>
                                    {i}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default GridDisplay;