import React from 'react';
import './Example.css';
import GridGenerator from './Grid';

const Example = ()=>{

    return (
        <div className = "example-container">
            <div className = 'example-title-container'>
                <h2 className = "example-title">
                    Basic Grid: 
                </h2>
                <span className = "example-subtitle">
                    Hello everyone can you dig it
                </span>
            </div>
            <hr />
            <div className = "example-documentation">

            </div>
            <section className = "example-main-visual">
                <GridGenerator />
            </section>
        </div>
    )
}

export default Example;