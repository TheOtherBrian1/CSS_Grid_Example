import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Editor from 'react-simple-code-editor';
import {actions} from '../../redux/reducers/mainGridsReducer';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
import './PopupEditor.css'; 

 
const PopupEditor = ({exampleId, isGridItem})=>{
    const dispatch = useDispatch();
    const style = useSelector(state=>state.mainGridsReducer[exampleId].mainGrid);

    const modifyGrid = (code)=>{
        if(isGridItem.available)
            dispatch(actions.modifyMainGridItemCode({exampleId, gridItemId: isGridItem.id, gridItemCode: code}));
        else
            dispatch(actions.modifyMainGridCode({exampleId, newCode: code}));
    }
    const getGridValue = ()=>{
        if(isGridItem.available)
            return style.gridItems[isGridItem.id].code;
        else
            return style.code;
    }

    const currentCode = getGridValue();

    return (
        <div className = "popup-editor-container">
            <div className = "popup-container">
                <Editor
                    value={currentCode}
                    onValueChange={code => modifyGrid(code)}
                    highlight={j => highlight(currentCode, languages.css)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
        </div>
    );
}
export default PopupEditor;
