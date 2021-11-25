import {type} from '../actions/main-grid-actions';
import produce from 'immer';
//Immer JS is so amazing! https://www.smashingmagazine.com/2020/06/better-reducers-with-immer/



const mainGridDefaultState = [
    {
        gridId: 0,
        style: '',
    }
]
const mainGridsReducer = (state = mainGridDefaultState, action) =>(
    produce(state, draft=>{
        switch(action.type){
            case type.UPDATE_GRID_STYLE:  
                const [gridId, style] = action.payload;
                draft[gridId].style = style;
                break;
            default:
                break;
        }
    })
);

export default mainGridsReducer;