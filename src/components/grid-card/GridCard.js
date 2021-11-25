import React from 'react';
import {Card} from 'antd'
import './knowledge-card.css';
import { useSelector } from 'react-redux';
import GridGenerator from '../GridGenerator/GridGenerator';

const GridCard = ({elementId})=>{
    const {title, subGridId} = useSelector(state=>state.subGrids[elementId]);
    return(
        <Card className = "knowledge-card" title={<><h3 className = 'card-h3'>{/*title*/}</h3><hr /></ >}>
            <GridGenerator />
        </Card>
    )
}

export default GridCard;