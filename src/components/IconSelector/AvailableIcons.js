import React from 'react';
import {CodeOutlined, FileTextOutlined} from '@ant-design/icons';


const AvailableIcons = ({icon}) =>{

    switch (icon){
        case 'code':
            return <CodeOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
        case 'docs':
            return <FileTextOutlined style = {{color:"#A9A9A9", fontSize: 24}} />
        default:
            return <div>error</div>
    }
}

export default AvailableIcons;