import produce from 'immer';
    

const mainGridTypes = {
    MODIFY_MAIN_GRID_CODE: 'MODIFY_MAIN_GRID_CODE',
    MODIFY_MAIN_GRID_ITEM_CODE: 'MODIFY_MAIN_GRID_ITEM_CODE',
    DELETE_MAIN_GRID_ITEM: 'DELETE_MAIN_GRID_ITEM',
    ADD_MAIN_GRID_ITEM: "ADD_MAIN_GRID_ITEM"
};

//payload = {exampleID, newCode}
const modifyMainGridCode = (payload)=>({
    type: mainGridTypes.MODIFY_MAIN_GRID_CODE,
    payload
})

//payload = {exampleID, gridItemId, gridItemCode}
const modifyMainGridItemCode = (payload)=>({
    type: mainGridTypes.MODIFY_MAIN_GRID_ITEM_CODE,
    payload
})

//payload = {exampleID, gridItemId}
const deleteMainGridItem = (payload)=>({
    type: mainGridTypes.DELETE_MAIN_GRID_ITEM,
    payload
})

//payload = {exampleID}
const addMainGridItem = (payload)=>({
    type: mainGridTypes.ADD_MAIN_GRID_ITEM,
    payload
})

export const actions = {
    modifyMainGridCode,
    modifyMainGridItemCode,
    deleteMainGridItem,
    addMainGridItem
}

const mainGridsState = [
    {
        exampleId: 0,
        title: '',
        subtitle: '',
        text: '',
        mainGrid: {
            code: '',
            gridItems: [
                {
                    gridItemId: 0,
                    code: ''
                }
            ]
        }
    }
];

const mainGridsReducer = (state = mainGridsState, action) =>  produce(state, draft=>{
    const {exampleId = null, newCode = null, gridItemId = null, gridItemCode = null,} = action.payload;
    switch(action.type){
        case mainGridTypes.MODIFY_MAIN_GRID_CODE:
            draft[exampleId].mainGrid.code = newCode;
            break;
        case mainGridTypes.MODIFY_MAIN_GRID_ITEM_CODE:
            draft[exampleId].mainGrid.gridItems[gridItemId].code = gridItemCode;
            break;
        case mainGridTypes.DELETE_MAIN_GRID_ITEM:
            draft[exampleId].mainGrid.gridItems[gridItemId] = state[exampleId].mainGrid.gridItems.filter(item=>item.gridItemId !== gridItemId);
            break;
        case mainGridTypes.ADD_MAIN_GRID_ITEM:
            const gridIndex = state[exampleId].mainGrid.gridItems.length - 1;
            draft[exampleId].mainGrid.gridItems.push({gridItemId: gridIndex, code: ''})
            break;
        default:
            break;
    }
})

export default mainGridsReducer;
