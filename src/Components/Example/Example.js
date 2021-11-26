import React from 'react';
import './Example.css';
import './iconSelectors.css';
import {actions} from '../../redux/reducers/iconDisplayReducer';
import {useSelector, useDispatch} from 'react-redux';
import {CodeOutlined, FileTextOutlined} from '@ant-design/icons';
import GridGenerator from '../Grid/Grid';
import CssEditor from '../CssEditor/CssEditor';
import Docs from '../Docs/Docs';

const chooseCSS = (selectedIcon, icon)=>`drop-down-icons ${selectedIcon === icon?'icon-selected':''}`;

const Example = ()=>{
    //YOU WILL REQUIRE AN EXAMPLE ID FOR THIS. THIS IS PROBABLY BEST PASSED AS A PROP
    const dispatch = useDispatch();
    const state = useSelector(state=>state.iconDisplayReducer[0]);
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
                        className = {chooseCSS(state.selectedIcon, 'CSS')}
                        onClick={()=>dispatch(actions.toggleIcon({exampleId:state.exampleId, selectedIcon: 'CSS'}))}
                    >
                        <CodeOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            CSS
                        </span>
                    </div>
                    <div 
                        className = {chooseCSS(state.selectedIcon, 'Docs')}
                        onClick = {()=>dispatch(actions.toggleIcon({exampleId:state.exampleId, selectedIcon: 'Docs'}))}
                    >
                        <FileTextOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            Docs
                        </span>
                    </div>
            </div>
            <CssEditor />
                <div>
                    <Docs></Docs>
                </div>
            <section className = "example-main-visual">
                <GridGenerator />
            </section>
        </div>
    )
}

export default Example;