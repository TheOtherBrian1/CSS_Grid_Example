import React, {useState} from 'react';
import './Grid.css';
import styled from 'styled-components';
import PopupEditor from '../PopupEditor/PopupEditor';
const GRID_COLORS = ['#dc97a9', '#f2cb7c', '#edaf88', '#d3bfb6', '#addad7', '#e5a88b', '#cf9683', '#cf7956', '#d16644', '#878f84', '#eedac2'];




const GridGenerator =({exampleId, initialHeight, initialWidth, code, gridItems, title})=>{
    const Grid = styled.div`${code}`;
    const [displayEditor, setDisplayEditor] = useState(false);
    return(
        <div className = {`grid-container ${displayEditor !== 'no-editor'? 'blank-screen': 'no-editor'}`}
            onClick = {e=>{setDisplayEditor('no-editor')}} 
        >
            <Grid className = 'grid'
                onClick = {e=>{e.stopPropagation(); setDisplayEditor('grid') }} 
            >
                <PopupEditor exampleId = {exampleId} isGridItem = {{available:false}}/>
                {
                    gridItems.map((style, i)=>{
                        const GridItem = styled.div`${style.code}`;
                        return (
                            <GridItem 
                                style = {{backgroundColor: GRID_COLORS[i]}}
                                className = 'grid-item' 
                                key={`${i + title + style.gridItemId}`} 
                                onClick = {e=>{e.stopPropagation(); setDisplayEditor(i) }} 
                            >
                                {   displayEditor === i 
                                        && 
                                    <PopupEditor 
                                        exampleId = {exampleId} 
                                        isGridItem = {{available:true, id:style.gridItemId}}
                                    />
                                }
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