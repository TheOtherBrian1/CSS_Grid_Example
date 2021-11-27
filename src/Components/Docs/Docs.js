import React from 'react';
import {Card} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../redux/reducers/docsStateReducer';
import './Docs.css';
import GridGenerator from '../Grid/Grid';

const Docs = ({exampleId})=>{
    //does require exampleId
    //const dispatch = useDispatch();
    const state = useSelector(state=>state.docsStateReducer[exampleId]);
    return(
        <div className = "carousel">
            {
                state.subExamples.map((exmp, i)=>
                    <React.Fragment key = {exmp.title}>
                            <div className = "card-wrapper">
                                <Card bordered = {false} title = {exmp.title} className = "card explanation">
                                    <hr />
                                    {exmp.text}
                                </Card>
                                <div className = "card card-grid">
                                    <GridGenerator 
                                        initialHeight = {exmp.initalHeight}
                                        initialWidth = {exmp.initalWidth}
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