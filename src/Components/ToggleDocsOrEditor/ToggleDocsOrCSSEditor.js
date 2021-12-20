import React from 'react';
import {useDispatch} from 'react-redux';
import {CodeOutlined, FileTextOutlined} from '@ant-design/icons';
import {toggleActions} from '../../redux/actions';

const chooseCSS = (selectedIcon, icon)=>`drop-down-icons ${selectedIcon === icon?'icon-selected':''}`;


const ToggleDocsOrCSSEditor = (toggle, index)=>{
    const dispatch = useDispatch();

    return(
        <div className = "example-documentation">
                <div 
                    className = {chooseCSS(toggle.selectedIcon, 'CSS')}
                    onClick={()=>dispatch(toggleActions.toggleIcon({exampleId: index, selectedIcon: 'CSS'}))}
                >
                    <CodeOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                    <span className = "drop-down-subtitle">
                        CSS
                    </span>
                </div>
                <div 
                    className = {chooseCSS(toggle.selectedIcon, 'Docs')}
                    onClick = {()=>dispatch(toggleActions.toggleIcon({exampleId:index, selectedIcon: 'Docs'}))}
                >
                    <FileTextOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
                    <span className = "drop-down-subtitle">
                        Docs
                    </span>
                </div>
        </div>
    )
}

export default ToggleDocsOrCSSEditor;