import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import './GridGenerator.css';
import styled from 'styled-components'



const GridGenerator =({exampleId})=>{
    const {grids} = useSelector(state=>state.gridReducer[exampleId]);
    const gridDimensions = useRef(null);
    console.log(grids);
    return(
        <div>
            <div className = "horizontal-width-display" style = {{width: gridDimensions.current?.offsetWidth}}>
                <span className = 'grid-dimensions-style'>{gridDimensions.current?.offsetWidth  || '000'}</span>
                <hr />
            </div>
            <div className = "hr-height-style" style = {{width: gridDimensions.current?.offsetHeight || '000'}}>
                <span>{gridDimensions.current?.offsetHeight}</span>
                <hr />
            </div>
            <div className = 'grid' ref = {gridDimensions}>
                {
                    grids[exampleId].map((style, i)=>{
                        const GridItem = styled.div`${style}`;
                        return (
                            <GridItem 
                                className = 'grid-item' 
                                key={`${exampleId}}${i}`} 
                                
                            >
                                {i}
                            </GridItem>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default GridGenerator;