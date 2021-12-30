import React,{useState} from 'react';
import './Docs.css';
import GridGenerator from '../Grid/Grid';
import CssEditor from '../CssEditor/CssEditor';
import {CaretUpOutlined} from '@ant-design/icons'


const Docs = ({docGrids, index})=>{
    const [isHover, setIsHover] = useState(false);
    return(
        <div className = "carousel">
            {
                docGrids.map((exmp, i)=>
                    <React.Fragment key = {exmp.title + 'example'}>
                            <div className = "card-wrapper">
                                <div 
                                  className = "card explanation"
                                >
                                    
                                    <h4>{exmp.title}</h4>
                                    <hr />
                                    <div className = "editor-code">
                                      <CssEditor index = {index} isDocs = {true} style = {exmp} docGridIndex = {i}/>
                                    </div>
                                    <span className = 'text'>{exmp.text}</span>
                                </div>
                                <div className = "card card-grid">
                                    <GridGenerator 
                                        initialHeight = {exmp.initialHeight}
                                        initialWidth = {exmp.initialWidth}
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


/*
<Collapse accordion = {true} onChange={(e)=>console.log(e)}>                        
                                        <Panel header="code" className = "panel" key = "one">
                                            <CssEditor disable = {true} style = {exmp}/>
                                        </Panel>
                                    </Collapse>
*/