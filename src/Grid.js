import React, {useRef} from 'react';
import './Grid.css';
import styled from 'styled-components'
const GRID_COLORS = ['#dc97a9', '#f2cb7c', '#edaf88', '#d3bfb6', '#addad7', '#e5a88b', '#cf9683', '#cf7956', '#d16644', '#878f84', '#eedac2'];
const gridItems = GRID_COLORS.slice(0,4).map(c=>`background:${c}`);
const tempGrid = 
    {
        exampleId: 0,
        gridId: 0,
        initialHeight: 100,
        initialWidth: 100,
        style: `
        position: relative;
        display: grid;
        grid: 
            "1      2" 100px
            "3      4" 100px
            /100px 100px;
        `,
        gridItems
    };

const GridGenerator =({exampleId})=>{
    const Grid = styled.div`${tempGrid.style}`;
    const gridDimensions = useRef(null);
    return(
        <div>
            <div className = "horizontal-width-display" style = {{width: gridDimensions.current?.offsetWidth}}>
                <span className = 'grid-dimensions-style'>{gridDimensions.current?.offsetWidth  || tempGrid.initialWidth}</span>
                <hr />
            </div>
            <div className = "hr-height-style" style = {{width: gridDimensions.current?.offsetHeight || tempGrid.initialHeight}}>
                <span>{gridDimensions.current?.offsetHeight}</span>
                <hr />
            </div>
                <Grid className = 'grid' ref = {gridDimensions}>
                    {
                        gridItems.map((style, i)=>{
                            const GridItem = styled.div`${style}`;
                            return (
                                <GridItem 
                                    className = 'grid-item' 
                                    key={`${i}`} 
                                    
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