import React, {useRef} from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import {actions} from '../../redux/reducers/iconDisplayReducer'
import './Grid.css';
import styled from 'styled-components'
const GRID_COLORS = ['#dc97a9', '#f2cb7c', '#edaf88', '#d3bfb6', '#addad7', '#e5a88b', '#cf9683', '#cf7956', '#d16644', '#878f84', '#eedac2'];



const GridGenerator =({initialHeight, initialWidth, code, gridItems, title})=>{
    const Grid = styled.div`${code}`;
    const gridDimensions = useRef(null);
    return(
        <div className = "grid-container">
            <div className = "horizontal-width-display" style = {{width: gridDimensions.current?.offsetWidth}}>
                <span className = 'grid-dimensions-style'>{gridDimensions.current?.offsetWidth  || initialWidth}</span>
                <hr className = 'grid-hr' style = {{width: gridDimensions.current?.offsetWidth}}/>
            </div>
            <div className = "hr-height-style" style = {{width: gridDimensions.current?.offsetHeight}}>
                <span  className = 'grid-dimensions-style'>{gridDimensions.current?.offsetHeight || initialHeight}</span>
                <hr className = 'grid-hr' style = {{width: gridDimensions.current?.offsetHeight}} />
            </div>
            <Grid className = 'grid' ref = {gridDimensions}>
                {
                    gridItems.map((style, i)=>{
                        const GridItem = styled.div`${style.code}`;
                        return (
                            <GridItem 
                                style = {{backgroundColor: GRID_COLORS[i]}}
                                className = 'grid-item' 
                                key={`${i + title + style.gridItemId}`}  
                            >
                                {i}
                            </GridItem>
                        );
                    })
                }
            </Grid>
        </div>
    )
}

export default GridGenerator;