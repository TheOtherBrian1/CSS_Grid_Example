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
        title: 'milk',
        subtitle: 'raisin  butter',
        text: 'evil pandas',
        mainGrid: {
            initialHeight: '200',
            initialWidth: '200',
            code: `
            position: relative;
            display: grid;
            grid: 
                "1      2" 100px
                "3      4" 100px
                /100px 100px;
            `,
            gridItems: [
                {
                    gridItemId: 0,
                    code: ''
                }
            ]
        }
    }
];

const mainGridsReducer = (state = mainGridsState, action) => {
    return (
        produce(state, draft=>{
            const pay = action.payload;
            switch(action.type){
                case mainGridTypes.MODIFY_MAIN_GRID_CODE:
                    draft[pay.exampleId].mainGrid.code = pay.newCode;
                    break;
                case mainGridTypes.MODIFY_MAIN_GRID_ITEM_CODE:
                    draft[pay.exampleId].mainGrid.gridItems[pay.gridItemId].code = pay.gridItemCode;
                    break;
                case mainGridTypes.DELETE_MAIN_GRID_ITEM:
                    draft[pay.exampleId].mainGrid.gridItems.splice(pay.gridItemId, 1);
                    break;
                case mainGridTypes.ADD_MAIN_GRID_ITEM:
                    const gridIndex = draft[pay.exampleId].mainGrid.gridItems.length - 1;
                    draft[pay.exampleId].mainGrid.gridItems.push({gridItemId: gridIndex, code: ''})
                    break;
                default:
                    break;
            }
        })
    );
}

export default mainGridsReducer;
