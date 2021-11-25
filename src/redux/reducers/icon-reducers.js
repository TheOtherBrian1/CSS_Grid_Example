import {type} from '../actions/icon-actions';
import produce from 'immer';
const iconDefaultState = [
    {
        exampleId: 0,
        selectedIcon: 'code',
        availableIcons: ['code', 'docs']
    }
]
// I now remember why I hate redux
const iconReducer = (state = iconDefaultState, action) => produce(state, draft=>{
    const {exampleId = null, selectedIcon = null} = action.payload;
    switch(action.type){
        case type.SELECT_ICON:
            draft[exampleId].selectedIcon = selectedIcon;
            break;
        default:
            break;
    }
})
export default iconReducer;