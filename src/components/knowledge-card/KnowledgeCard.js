import React from 'react';
import {Card} from 'antd'
import './knowledge-card.css';
import { useSelector } from 'react-redux';

const KnowledgeCard = ({elementId})=>{
    //const {title, content, img:{src, alt}} = useSelector(state=>state.docGrids[elementId].focused);
    return(
        <Card className = "knowledge-card" title={<><h3 className = 'card-h3'>{/*title*/}</h3><hr /></ >}>
            {/*src?
                <img src= {src} alt = {alt}/> 
                    :
                content
            */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </Card>
    )
}

export default KnowledgeCard;