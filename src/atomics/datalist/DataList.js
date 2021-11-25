import React, {useState} from 'react';
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const treeData = [
  {
    title: 'Units',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

const DataList = ()=>{
    const [userSelection, setUserSelection] = useState('');

    return(
        <TreeSelect
        style={{ width: '100%' }}
        value={userSelection}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Grid units"
        treeDefaultExpandAll
        onChange={(val)=>setUserSelection(val)}
      />
    )
}

export default DataList;