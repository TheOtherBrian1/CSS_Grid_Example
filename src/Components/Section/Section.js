import React from 'react';
import './Section.css';
import './iconSelectors.css';
import {useSelector} from 'react-redux';
import GridGenerator from '../Grid/Grid';
import CssEditor from '../CssEditor/CssEditor';
import SectionHeader from '../SectionHeader/SectionHeader';
import Docs from '../Docs/Docs';
import ToggleDocsOrCSSEditor from '../ToggleDocsOrEditor/ToggleDocsOrCSSEditor';


const Example = ()=>{
    const state = useSelector(state=>state);

    return (
        <section className = "example-organizer">
            {
                state.map((example, index)=>(
                    <div className = "example-container">
                        <SectionHeader 
                            title = {example.mainGrid.title} 
                            subtitle = {example.mainGrid.subtitle}
                            text = {example.mainGrid.text}
                        />
                        <ToggleDocsOrCSSEditor toggle = {example.toggle} index = {index} />
                        {
                            example.toggle.selectedIcon === 'CSS'
                                &&
                            <CssEditor style = {example.mainGrid.mainGrid.code} index = {index} />
                        }
                        {
                            example.toggle.selectedIcon === 'Docs'
                                &&
                            <div>
                                <Docs docGrids = {example.docGrids} index = {index}/>
                            </div>
                        }
                        <section className = "example-main-visual">
                            <GridGenerator
                                initialHeight = {example.mainGrid.initialHeight}
                                initialWidth = {example.mainGrid.initialWidth}
                                code = {example.mainGrid.code}
                                title = {example.title}
                                gridItems = {example.mainGrid.gridItems}
                                exampleId = {index}
                            />
                        </section>
                    </div>
                ))
            }
        </section>
    );
}

export default Example;