import React from 'react';
import {Card} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../redux/reducers/docsStateReducer';
import './Docs.css';
const Docs = ()=>{
    //does require exampleId
    const dispatch = useDispatch();
    const state = useSelector(state=>state.docsStateReducer[0]);
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