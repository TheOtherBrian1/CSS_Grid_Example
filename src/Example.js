import React, {useState} from 'react';
import './Example.css';
import './iconSelectors.css';
import {CodeOutlined, FileTextOutlined} from '@ant-design/icons';
import GridGenerator from './Grid';


const chooseCSS = (selectedIcon, icon)=>`drop-down-icons ${selectedIcon === icon?'icon-selected':''}`;

const Example = ()=>{
    const [selectedIcon, setSelectedIcon] = useState(null);
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
                    <div 
                        className = {chooseCSS(selectedIcon, 'CSS')}
                        onClick = {()=>setSelectedIcon('CSS'===selectedIcon?null:'CSS')}
                    >
                        <CodeOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            CSS
                        </span>
                    </div>
                    <div 
                        className = {chooseCSS(selectedIcon, 'Docs')}
                        onClick = {()=>setSelectedIcon('Docs'===selectedIcon?null:'Docs')}
                    >
                        <FileTextOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            Docs
                        </span>
                    </div>
            </div>
            <section className = "example-main-visual">
                <GridGenerator />
            </section>
        </div>
    )
}

export default Example;