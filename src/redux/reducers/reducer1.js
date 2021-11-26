import {type} from '../actions/icon-actions';
import produce from 'immer';

const mainGridsState = [
    {
        exampleId: 0,
        selectedIcon: 'code',
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
]
    
const mainGridsReducer = (state = mainGridsState, action) => produce(state, draft=>{
    const {exampleId = null, icon = null, newCode = null, gridItemId = null, gridItemCode = null,} = action.payload;
    switch(action.type){
        case type.SELECT_ICON:
            draft[exampleId].selectedIcon = (icon ==='code')?'docs':'code';
            break;
        case type.MODIFY_MAIN_GRID_CODE:
            draft[exampleId].mainGrid.code = newCode;
            break;
        case type.MODIFY_MAIN_GRID_ITEM_CODE:
            draft[exampleId].mainGrid.gridItems[gridItemId].code = gridItemCode;
            break;
        case type.DELETE_MAIN_GRID_ITEM:
            draft[exampleId].mainGrid.gridItems[gridItemId] = state[exampleId].mainGrid.gridItems.filter(item=>item.gridItemId !== gridItemId);
            break;
        case type.ADD_MAIN_GRID_ITEM:
            const gridIndex = state[exampleId].mainGrid.gridItems.length - 1;
            draft[exampleId].mainGrid.gridItems.push({gridItemId: gridIndex, code: ''})
            break;
        default:
            break;
    }
})



const docsStateReducer = (state = docsState, action) => produce(state, draft=>{
    const {exampleId = null, subId = null, newCode = null, gridItemId = null, gridItemCode = null,} = action.payload;
    switch(action.type){
        case type.MODIFY_GRID_CODE:
            draft[exampleId].subExamples[subId].code = newCode;
            break;
        case type.MODIFY_GRID_ITEM_CODE:
            draft[exampleId].subExamples[subId].gridItems[gridItemId].code = gridItemCode;
            break;
        case type.DELETE_GRID_ITEM:
            draft[exampleId].subExamples[subId].gridItems[gridItemId] = state[exampleId].gridItems.filter(item=>item.gridItemId !== gridItemId);
            break;
        case type.ADD_GRID_ITEM:
            const gridIndex = state[exampleId].gridItems.length - 1;
            draft[exampleId].subExamples[subId].gridItems.push({gridItemId: gridIndex, code: ''})
            break;
        default:
            break;
    }
})

export default iconReducer;