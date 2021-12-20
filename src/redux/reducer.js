import produce from 'immer';
import {defaultState} from './defaultState';
import {constants} from './constants';

const reducer = (state = defaultState, action) => {
    return (
        produce(state, draft=>{
            const {
                index = null, 
                newCode = null, 
                gridItemIndex = null, 
                icon = null, 
                docGridIndex = null, 
                docGridItemIndex = null} = action.payload;

            switch(action.type){
                case constants.MODIFY_MAIN_GRID_CODE:
                    draft[index].mainGrid.code = newCode;
                    break;
                case constants.MODIFY_MAIN_GRID_ITEM_CODE:
                    draft[index].mainGrid.gridItems[gridItemIndex].code = newCode;
                    break;
                case constants.DELETE_MAIN_GRID_ITEM:
                    draft[index].mainGrid.gridItems.pop();
                    break;
                case constants.ADD_MAIN_GRID_ITEM:
                    const gridIndex = state[index].mainGrid.gridItems.length - 1;
                    draft[index].mainGrid.gridItems.push({gridItemId: gridIndex, code: '/*place code here*/'})
                    break;

                case constants.SELECT_ICON:
                    draft[index].selectedIcon = (draft[index].selectedIcon === icon? null: icon);
                    break;

                case constants.MODIFY_GRID_CODE:
                    draft[index].subExamples[docGridIndex].code = newCode;
                    break;
                case constants.MODIFY_GRID_ITEM_CODE:
                    draft[index].subExamples[docGridIndex].gridItems[docGridItemIndex].code = newCode;
                    break;
                case constants.DELETE_GRID_ITEM:
                    draft[index].subExamples[docGridIndex].gridItems.splice(docGridItemIndex, 1);
                    break;
                case constants.ADD_GRID_ITEM:
                    draft[index].subExamples[docGridIndex].gridItems.push({gridItemId: draft[index].gridItems.length - 1, code: ''})
                    break;

                default:
                    break;
            }
        })
    );
}

export default reducer;