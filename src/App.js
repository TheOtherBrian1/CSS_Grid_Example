import React from 'react';
import KnowledgeCard from './components/knowledge-card/KnowledgeCard';
import GridGenerator from './components/GridGenerator/GridGenerator';
//import {EXAMPLE_ID_LIST} from './constants';
//{EXAMPLE_ID_LIST.map((i, ind)=><GridGenerator exampleId = {i} key={ind} />)}

const App = () => {
    return (
    <div className="App">
        <GridGenerator />
    </div>
  );
}


export default App;
