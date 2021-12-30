import React from 'react';
import './Section.css';
import './iconSelectors.css';
import {useSelector} from 'react-redux';
import GridGenerator from '../Grid/Grid';
import CssEditor from '../CssEditor/CssEditor';
import SectionHeader from '../SectionHeader/SectionHeader';
import Docs from '../Docs/Docs';
import ToggleDocsOrCSSEditor from '../ToggleDocsOrEditor/ToggleDocsOrCSSEditor';


const Section = ()=>{
    const state = useSelector(state=>state);
    return (
        <section className = "example-organizer">
            {
                state.map((example, index)=>(
                    <div className = "example-container" key = {index + 'SectionExample'}>
                        <SectionHeader 
                            title = {example.section.title} 
                            subtitle = {example.section.subtitle}
                            text = {example.section.text}
                        />
                        <ToggleDocsOrCSSEditor toggle = {example.toggle} index = {index} />
                        {
                            example.toggle.selectedIcon === 'CSS'
                                &&
                            <CssEditor style = {example.section.mainGrid} index = {index} />
                        }
                        {
                            example.toggle.selectedIcon === 'Docs'
                                &&
                            <div style = {{width: "100%"}}>
                                <Docs docGrids = {example.docGrids} index = {index}/>
                            </div>
                        }
                        <section className = "example-main-visual">
                            <GridGenerator
                                initialHeight = {example.section.mainGrid.initialHeight}
                                initialWidth = {example.section.mainGrid.initialWidth}
                                code = {example.section.mainGrid.code}
                                title = {example.title}
                                gridItems = {example.section.mainGrid.gridItems}
                                index = {index}
                            />
                        </section>
                    </div>
                ))
            }
        </section>
    );
}

export default Section;
