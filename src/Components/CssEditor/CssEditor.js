import React from 'react';
import {useDispatch} from 'react-redux';
import Editor from 'react-simple-code-editor';
import {mainGridActions} from '../../redux/actions';
import { highlight, languages } from 'prismjs/components/prism-core';
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
import './CssEditor.css';
 

 
const CssEditor = ({index, style})=>{
    const dispatch = useDispatch();
    return (
        <div className = "editor-container">
            <div className = "">
                Grid
                <Editor
                    value={style.code}
                    onValueChange={code => dispatch(mainGridActions.modifyMainGridCode({index, newCode: code}))}
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
                    <div key = {`${i}${index}editor`}>
                        Grid Item {i} 
                        
                        <Editor
                            value={item.code}
                            onValueChange={code => dispatch(mainGridActions.modifyMainGridItemCode({index, gridItemId: item.gridItemId, gridItemCode: code}))}
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
            <div className = "grid-modifier-container">
                <label 
                    className = "grid-icon-modifier"
                    onClick = {()=>dispatch(mainGridActions.addMainGridItem({index}))}
                >   
                    Remove
                    <MinusCircleOutlined style = {{margin: 10, color:"#eb2f96"}} />
                </label>
                <label 
                    className = "grid-icon-modifier"
                    onClick = {()=>dispatch(mainGridActions.deleteMainGridItem({index}))}
                >
                    Add
                    <PlusCircleOutlined style = {{margin: 10, color:"#52c41a"}} />
                </label>
            </div>
        </div>
    );
}
export default CssEditor;
