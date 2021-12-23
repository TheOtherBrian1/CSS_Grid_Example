import React from 'react';

const SectionHeader = ({title, subtitle, text})=>{
    return(
        <>
            <div className = 'example-title-container'>
                <h2 className = "example-title">
                    {title}
                </h2>
                <span className = "example-subtitle">
                    {subtitle}
                </span>
            </div>
            <p>
                {text}
            </p>
            <hr />
        </>
    )
}
export default SectionHeader;