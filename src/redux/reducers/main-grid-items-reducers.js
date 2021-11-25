import {type} from '../actions';
import produce from 'immer';
//Immer JS is so amazing! https://www.smashingmagazine.com/2020/06/better-reducers-with-immer/



const mainGridItemDefaultState = [
    {
        gridId: 0,
        gridItem: [
            {
                itemId: 0,
                style: `
                
                `
            }
        ]
    }
]
const mainGridItemsReducer = (state = mainGridItemDefaultState, action) =>(
    produce((state, draft)=>{
        const {gridId = null, itemId = null, style = null} = action.payload;
        switch(action.type){
            case type.UPDATE_GRID_ITEM_STYLE:  
                draft[gridId].gridItem[itemId].style = style;
                break;
            case type.ADD_GRID_ITEM:
                draft[gridId].gridItem.push({itemId, style})
                break;
            case type.REMOVE_GRID_ITEM:
                    draft[gridId].gridItem.pop();
                    break;
            default:
                break;
        }
    })
);

export default mainGridItemsReducer;