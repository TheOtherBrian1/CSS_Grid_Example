import React from 'react';
import {Card} from 'antd';
import './Docs.css';
import GridGenerator from '../Grid/Grid';
import { Collapse } from 'antd';
import CssEditor from '../CssEditor/CssEditor';

const { Panel } = Collapse;

const Docs = ({docGrids, index})=>{
    return(
        <div className = "carousel">
            {
                docGrids.map((exmp, i)=>
                    <React.Fragment key = {exmp.title + 'example'}>
                            <div className = "card-wrapper">
                                <Card bordered = {false} title = {exmp.title} className = "card explanation">
                                    <hr />
                                    <Collapse accordion = {true} onChange={(e)=>console.log(e)}>                        
                                        <Panel header="code" className = "panel" key = "one">
                                            <CssEditor disable = {true} style = {exmp}/>
                                        </Panel>
                                    </Collapse>
                                    {exmp.text}
                                </Card>
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
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);

*/