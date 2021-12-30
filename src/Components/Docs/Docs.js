import React from 'react';
import './Docs.css';
import GridGenerator from '../Grid/Grid';
import CssEditor from '../CssEditor/CssEditor';


const Docs = ({docGrids, index})=>{
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
                                    <span className = 'text'>{exmp.text}</span>
                                    <div className = "editor-code">
                                      <CssEditor index = {index} isDocs = {true} style = {exmp} docGridIndex = {i}/>
                                    </div>
                                </div>
                                <div className = "card-visuals card-grid">
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