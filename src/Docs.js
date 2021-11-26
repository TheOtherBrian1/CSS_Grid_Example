import React, {useState} from 'react';
import {Card} from 'antd';
import './Docs.css';
const Docs = ()=>{

    return(
        <div className = "carousel">
            <div className = "card-wrapper">
                <Card bordered = {false} title = "content" className = "card explanation">
                    <hr />
                    Content
                </Card>
                <div className = "card card-grid">
                    Content
                </div>
            </div>
            <div className = "card-wrapper">
                <Card bordered = {false} title = "content" className = "card explanation">
                    <hr />
                    Content
                </Card>
                <div className = "card card-grid">
                    Content
                </div>
            </div>
        </div>
    );
};

export default Docs;