import React from 'react';
import {useDispatch} from 'react-redux';
import Editor from 'react-simple-code-editor';
import {mainGridActions} from '../../redux/actions';
import { highlight, languages } from 'prismjs/components/prism-core';
//import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
import './CssEditor.css';
//import { v4 as uuidv4 } from 'uuid'; 

 
const CssEditor = ({index, style, disable = true})=>{
    console.log(index, 'style');
    const dispatch = useDispatch();
    return (
        <div className = "editor-container">
            <div className = "">
                Grid
                <Editor
                    value={style.code}
                    onValueChange={code => 
                        // !disable
                        //     &&
                        dispatch(mainGridActions.modifyMainGridCode({index, newCode: code}))}
                    highlight={j => highlight(style.code, languages.css)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
            {
                /*
                style.gridItems.map((item, itemIndex)=>
                    <div key = {`${itemIndex}${uuidv4()}editor`}>
                        Grid Item {itemIndex} 
                        
                        <Editor
                            value={item.code}
                            onValueChange={code => dispatch(mainGridActions.modifyMainGridItemCode({index, gridItemIndex: itemIndex, newCode: code}))}
                            highlight={j => highlight(item.code, languages.css)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }}
                        />
                    </div>
                )
                */
            }
            {
                /*
                disable && <div className = "grid-modifier-container">
                {   
                    style.gridItems.length > 4 
                        &&
                    <label 
                        className = "grid-icon-modifier"
                        onClick = {()=>dispatch(mainGridActions.deleteMainGridItem({index}))}
                    >  
                
                        Remove
                        <MinusCircleOutlined style = {{margin: 10, color:"#eb2f96"}} />
                     </label>
                }
                {
                    style.gridItems.length <= 11 
                        &&
                    <label 
                        id = 'scroll-to'
                        className = "grid-icon-modifier"
                        onClick = {()=>dispatch(mainGridActions.addMainGridItem({index}))}
                    >
                            Add
                        <PlusCircleOutlined style = {{margin: 10, color:"#52c41a"}} />
                    </label>
                }
            </div>
            */}
        </div>
    );
}
export default CssEditor;
