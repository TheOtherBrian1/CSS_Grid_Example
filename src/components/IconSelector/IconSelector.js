import React from 'react';
import AvailableIcons from './AvailableIcons';
import {useSelector, useDispatch} from 'react-redux';
import {selectIcon} from '../../redux/actions/icon-actions';
import './IconSelector.css';


const chooseCSS = (selectedIcon, icon)=>`drop-down-icons ${selectedIcon === icon?'icon-selected':''}`;
const toggleIcon = (selectedIcon, icon)=>selectedIcon === icon? null: icon;

const IconSelector = ({exampleId})=> {
    const {availableIcons, selectedIcon} = useSelector(state=>state.iconReducer[exampleId]);
    const dispatch = useDispatch();
    return(
        <div className = "dropdown-icon-container">
            {
                availableIcons.map((icon, i)=>
                    <div 
                        key = {exampleId + icon}
                        className= {chooseCSS(selectedIcon, icon)} 
                        onClick = {()=>dispatch(
                            selectIcon(
                                {
                                    exampleId, 
                                    selectedIcon: toggleIcon(selectedIcon, icon)
                                }
                            )
                        )}
                    >
                        <AvailableIcons icon = {icon} />
                        <span className = "drop-down-subtitle">
                            {icon}
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default IconSelector;