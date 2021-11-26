import produce from 'immer';


const subGridTypes = {
    MODIFY__GRID_CODE: 'MODIFY_GRID_CODE',
    MODIFY_GRID_ITEM_CODE: 'MODIFY_GRID_ITEM_CODE',
    DELETE_GRID_ITEM: 'DELETE_GRID_ITEM',
    ADD_GRID_ITEM: "ADD_GRID_ITEM"
};

//payload = {exampleID, subId, newCode}
const modifyGridCode = (payload)=>({
    type: subGridTypes.MODIFY_GRID_CODE,
    payload
})

//payload = {exampleID, subId, gridItemId}
const modifyGridItemCode = (payload)=>({
    type: subGridTypes.MODIFY_GRID_ITEM_CODE,
    payload
})

//payload = {exampleID, subId, gridItemId}
const deleteGridItem = (payload)=>({
    type: subGridTypes.DELETE_GRID_ITEM,
    payload
})

//payload = {exampleID, subId}
const addGridItem = (payload)=>({
    type: subGridTypes.ADD_GRID_ITEM,
    payload
})

export const actions = {
    modifyGridCode,
    modifyGridItemCode,
    deleteGridItem,
    addGridItem
}


const docsState = [
    { 
        exampleId: 0,
        subExamples:[
           {
                subId: 0,
                title: '',
                text: '',
                code: '',
                gridItems: [
                    {
                        gridItemId: 0,
                        code: ''
                    },
                    {
                        gridItemId: 0,
                        code: ''
                    },
                    {
                        gridItemId: 0,
                        code: ''
                    },
                    {
                        gridItemId: 0,
                        code: ''
                    }
                ]
            },
        ]
    }
];

const docsStateReducer = (state = docsState, action) => {
    return (
        produce(state, draft=>{
            const pay = action.payload;
            switch(action.type){
                case subGridTypes.MODIFY_GRID_CODE:
                    draft[pay.exampleId].subExamples[pay.subId].code = pay.newCode;
                    break;
                case subGridTypes.MODIFY_GRID_ITEM_CODE:
                    draft[pay.exampleId].subExamples[pay.subId].gridItems[pay.gridItemId].code = pay.gridItemCode;
                    break;
                case subGridTypes.DELETE_GRID_ITEM:
                    draft[pay.exampleId].subExamples[pay.subId].gridItems.splice(pay.gridItemId, 1);
                    break;
                case subGridTypes.ADD_GRID_ITEM:
                    const gridIndex = draft[pay.exampleId].gridItems.length - 1;
                    draft[pay.exampleId].subExamples[pay.subId].gridItems.push({gridItemId: gridIndex, code: ''})
                    break;
                default:
                    break;
            }
        }
    )
)};

export default docsStateReducer;