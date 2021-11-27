import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Editor from 'react-simple-code-editor';
import {actions} from '../../redux/reducers/mainGridsReducer';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
import './CssEditor.css';
 

 
const CssEditor = ({exampleId})=>{
    const dispatch = useDispatch();
    const style = useSelector(state=>state.mainGridsReducer[exampleId].mainGrid);
    return (
        <div className = "editor-container">
            <div className = "">
                Grid
                <Editor
                    value={style.code}
                    onValueChange={code => dispatch(actions.modifyMainGridCode({exampleId, newCode: code}))}
                    highlight={j => highlight(style.code, languages.css)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
            {
                style.gridItems.map((item, i)=>
                    <div className = "">
                        Grid Item {i}
                        <Editor
                            value={item.code}
                            onValueChange={code => dispatch(actions.modifyMainGridItemCode({exampleId, gridItemId: item.gridItemId, gridItemCode: code}))}
                            highlight={j => highlight(item.code, languages.css)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }}
                        />
                    </div>
                )
            }
        </div>
    );
}
export default CssEditor;
