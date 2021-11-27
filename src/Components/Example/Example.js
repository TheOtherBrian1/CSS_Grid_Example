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

const Example = ({exampleId})=>{
    //YOU WILL REQUIRE AN EXAMPLE ID FOR THIS. THIS IS PROBABLY BEST PASSED AS A PROP
    const dispatch = useDispatch();
    const state = useSelector(state=>state.mainGridsReducer[exampleId]);
    const iconState = useSelector(state=>state.iconDisplayReducer[exampleId]);
    console.log(state, 'milk');
    return (
        <div className = "example-container">
            <div className = 'example-title-container'>
                <h2 className = "example-title">
                    {state.title}
                </h2>
                <span className = "example-subtitle">
                    {state.subtitle}
                </span>
            </div>
            <p>
                {state.text}
            </p>
            <hr />
            <div className = "example-documentation">
                    <div 
                        className = {chooseCSS(iconState.selectedIcon, 'CSS')}
                        onClick={()=>dispatch(actions.toggleIcon({exampleId:iconState.exampleId, selectedIcon: 'CSS'}))}
                    >
                        <CodeOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            CSS
                        </span>
                    </div>
                    <div 
                        className = {chooseCSS(iconState.selectedIcon, 'Docs')}
                        onClick = {()=>dispatch(actions.toggleIcon({exampleId:iconState.exampleId, selectedIcon: 'Docs'}))}
                    >
                        <FileTextOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                        <span className = "drop-down-subtitle">
                            Docs
                        </span>
                    </div>
            </div>
            <CssEditor />
                <div>
                    <Docs exampleId = {exampleId}/>
                </div>
            <section className = "example-main-visual">
                <GridGenerator
                    initialHeight = {state.mainGrid.initialHeight}
                    initialWidth = {state.mainGrid.initialWidth}
                    code = {state.mainGrid.code}
                    title = {state.title}
                    gridItems = {state.mainGrid.gridItems}
                />
            </section>
        </div>
    )
}

export default Example;