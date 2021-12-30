import produce from 'immer';
import {defaultState} from './defaultState';
import {constants} from './constants';

const reducer = (state = defaultState, action) => {
    const {
        index = null, 
        newCode = null, 
        gridItemIndex = null, 
        icon = null, 
        docGridIndex = null, 
        docGridItemIndex = null
    } = action.payload ?? {};
    console.log(action);
    return (
        produce(state, draft=>{
            switch(action.type){
                case constants.MODIFY_MAIN_GRID_CODE:
                    draft[index].mainGrid.mainGrid.code = newCode;
                    break;
                case constants.MODIFY_MAIN_GRID_ITEM_CODE:
                    draft[index].mainGrid.mainGrid.gridItems[gridItemIndex].code = newCode;
                    break;
                case constants.DELETE_MAIN_GRID_ITEM:
                    draft[index].mainGrid.mainGrid.gridItems.pop();
                    break;
                case constants.ADD_MAIN_GRID_ITEM:
                    draft[index].mainGrid.mainGrid.gridItems.push({code: '/*place code here*/'})
                    break;

                case constants.SELECT_ICON:
                    draft[index].toggle.selectedIcon = (state[index].toggle.selectedIcon === icon? null: icon);
                    break;

                case constants.MODIFY_DOCS_GRID_CODE:
                    draft[index].docGrids[docGridIndex].code = newCode;
                    break;
                case constants.MODIFY_DOCS_GRID_ITEM_CODE:
                    draft[index].docGrids[docGridIndex].gridItems[docGridItemIndex].code = newCode;
                    break;
                case constants.DELETE_DOCS_GRID_ITEM:
                    draft[index].docGrids[docGridIndex].gridItems.splice(docGridItemIndex, 1);
                    break;
                case constants.ADD_DOCS_GRID_ITEM:
                    draft[index].docGrids[docGridIndex].gridItems.push({gridItemId: draft[index].gridItems.length - 1, code: ''})
                    break;

                default:
                    break;
            }
        })
    );
}

export default reducer;