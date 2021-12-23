import React from 'react';
import {Card} from 'antd';
import './Docs.css';
import GridGenerator from '../Grid/Grid';

const Docs = ({docGrids, index})=>{
    return(
        <div className = "carousel">
            {
                docGrids.map((exmp, i)=>
                    <React.Fragment key = {exmp.title + 'example'}>
                            <div className = "card-wrapper">
                                <Card bordered = {false} title = {exmp.title} className = "card explanation">
                                    <hr />
                                    {exmp.text}
                                </Card>
                                <div className = "card card-grid">
                                    <GridGenerator 
                                        initialHeight = {exmp.initialHeight}
                                        initialWidth = {exmp.initialWidth}
                                        code = {exmp.code}
                                        gridItems = {exmp.gridItems}
                                        title = {exmp.title}
                                    />
                                </div>
                            </div>
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default Docs;