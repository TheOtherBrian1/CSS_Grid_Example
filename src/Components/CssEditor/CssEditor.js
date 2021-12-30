import React from 'react';
import {useDispatch} from 'react-redux';
import Editor from 'react-simple-code-editor';
import {mainGridActions, docsGridActions} from '../../redux/actions';
import { highlight, languages } from 'prismjs/components/prism-core';
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
import './CssEditor.css';

 
const CssEditor = ({index, style, disable = true, isDocs=false, docGridIndex = null})=>{
    
    const dispatch = useDispatch();
    return (
        <div className = "editor-container">
            <div className = "editor-items">
                Grid
                <Editor
                    value={style.code}
                    onValueChange={code => 
                        // !disable
                        //     &&
                        dispatch(isDocs? docsGridActions.modifyGridCode({index,docGridIndex, newCode:code}):mainGridActions.modifyMainGridCode({index, newCode: code}))}
                    highlight={j => highlight(style.code, languages.css)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
            <div className = "editor-items">
                {
                    style.gridItems.map((item, itemIndex)=>
                        <div key = {`${index}${itemIndex}editor`}>
                            Grid Item {itemIndex} 
                            
                            <Editor
                                value={item.code}
                                onValueChange={newCode => dispatch(isDocs?docsGridActions.modifyGridItemCode({index, docGridIndex: itemIndex, newCode}):mainGridActions.modifyMainGridItemCode({index, gridItemIndex: itemIndex, newCode}))}
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
            {
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
            }
        </div>
    );
}
export default React.memo(CssEditor);
