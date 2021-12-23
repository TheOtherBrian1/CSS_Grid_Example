import React from 'react';
import './Grid.css';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
const GRID_COLORS = ['#dc97a9', '#f2cb7c', '#edaf88', '#d3bfb6', '#addad7', '#e5a88b', '#cf9683', '#cf7956', '#d16644', '#878f84', '#eedac2'];





const GridGenerator =({initialHeight, initialWidth, code, gridItems, title})=>{
    const Grid = styled.div`${code}`;
    
    return(
        <div className = "grid-container">
            <Grid className = 'grid'>
                {
                    gridItems.map((style, i)=>{
                        const GridItem = styled.div`${style.code}`;
                        return (
                            <GridItem 
                                style = {{backgroundColor: GRID_COLORS[i]}}
                                className = 'grid-item' 
                                key={`${uuidv4()}`}  
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