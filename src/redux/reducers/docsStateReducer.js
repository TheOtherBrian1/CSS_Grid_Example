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

const docsStateReducer = (state = docsState, action) => produce((draft, action)=>{
        const {exampleId = null, subId = null, newCode = null, gridItemId = null, gridItemCode = null} = action.payload;
        switch(action.type){
            case subGridTypes.MODIFY_GRID_CODE:
                draft[exampleId].subExamples[subId].code = newCode;
                break;
            case subGridTypes.MODIFY_GRID_ITEM_CODE:
                draft[exampleId].subExamples[subId].gridItems[gridItemId].code = gridItemCode;
                break;
            case subGridTypes.DELETE_GRID_ITEM:
                draft[exampleId].subExamples[subId].gridItems[gridItemId] = state[exampleId].gridItems.filter(item=>item.gridItemId !== gridItemId);
                break;
            case subGridTypes.ADD_GRID_ITEM:
                const gridIndex = state[exampleId].gridItems.length - 1;
                draft[exampleId].subExamples[subId].gridItems.push({gridItemId: gridIndex, code: ''})
                break;
            default:
                break;
        }
    }
)

export default docsStateReducer;