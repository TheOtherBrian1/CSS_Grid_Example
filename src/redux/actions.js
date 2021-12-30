
import {constants} from './constants'
//payload = {index, newCode}
const modifyMainGridCode = (payload)=>({
    type: constants.MODIFY_MAIN_GRID_CODE,
    payload
})

//payload = {index, gridItemIndex, gridItemCode}
const modifyMainGridItemCode = (payload)=>({
    type: constants.MODIFY_MAIN_GRID_ITEM_CODE,
    payload
})

//payload = {index}
const deleteMainGridItem = (payload)=>({
    type: constants.DELETE_MAIN_GRID_ITEM,
    payload
})

//payload = {index}
const addMainGridItem = (payload)=>({
    type: constants.ADD_MAIN_GRID_ITEM,
    payload
})


export const mainGridActions = {
    modifyMainGridCode,
    modifyMainGridItemCode,
    deleteMainGridItem,
    addMainGridItem,
}

//expected payload: {index, icon: 'code'/'docs'}
const toggleIcon = (payload)=>({
    type: constants.SELECT_ICON,
    payload
})


export const toggleActions = {
    toggleIcon
};

//payload = {index, docGridIndex, newCode}
const modifyGridCode = (payload)=>({
    type: constants.MODIFY_DOCS_GRID_CODE,
    payload
})

//payload = {index, gridItemId, docGridIndex, newCode}
const modifyGridItemCode = (payload)=>({
    type: constants.MODIFY_DOCS_GRID_ITEM_CODE,
    payload
})

//payload = {exampleID, docGridIndex, gridItemId}
const deleteGridItem = (payload)=>({
    type: constants.DELETE_DOCS_GRID_ITEM,
    payload
})

//payload = {exampleID, docGridIndex}
const addGridItem = (payload)=>({
    type: constants.ADD_DOCS_GRID_ITEM,
    payload
})

export const docsGridActions = {
    modifyGridCode,
    modifyGridItemCode,
    deleteGridItem,
    addGridItem
}