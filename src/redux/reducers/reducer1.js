import {type} from '../actions/icon-actions';
import produce from 'immer';
const mainGridState = [
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
    
const iconReducer = (state = iconDefaultState, action) => produce(state, draft=>{
    const {exampleId = null} = action.payload;
    switch(action.type){
        case type.SELECT_ICON:
            const newIcon = action.payload.icon;
            draft[exampleId].selectedIcon = newIcon==='code'?'docs':'code';
            break;
        case type.MODIFY_MAIN_GRID_CODE:
            const newCode = action.payload.code;
            draft[exampleId].mainGrid.code = newCode;
            break;
        case type.MODIFY_MAIN_GRID_ITEM_CODE:
            const {gridItemId, gridItemCode} = action.payload;
            draft[exampleId].mainGrid.gridItems[gridItemId].code = gridItemCode;
            break;
        case type.DELETE_MAIN_GRID_ITEM:
            const {gridItemId} = action.payload;
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
export default iconReducer;