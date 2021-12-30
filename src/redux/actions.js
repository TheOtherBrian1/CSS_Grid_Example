
import {constants} from './constants'
//payload = {index, newCode}
const modifyMainGridCode = (payload)=>({
    type: constants.MODIFY_MAIN_GRID_CODE,
    payload
})

//payload = {exampleID, gridItemId, gridItemCode}
const modifyMainGridItemCode = (payload)=>({
    type: constants.MODIFY_MAIN_GRID_ITEM_CODE,
    payload
})

//payload = {exampleID}
const deleteMainGridItem = (payload)=>({
    type: constants.DELETE_MAIN_GRID_ITEM,
    payload
})

//payload = {exampleID}
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

//expected payload: {icon: 'code'/'docs'}
const toggleIcon = (payload)=>({
    type: constants.SELECT_ICON,
    payload
})


export const toggleActions = {
    toggleIcon
};

//payload = {exampleID, subId, newCode}
const modifyGridCode = (payload)=>({
    type: constants.MODIFY_DOCS_GRID_CODE,
    payload
})

//payload = {exampleID, subId, gridItemId, newCode}
const modifyGridItemCode = (payload)=>({
    type: constants.MODIFY_DOCS_GRID_ITEM_CODE,
    payload
})

//payload = {exampleID, subId, gridItemId}
const deleteGridItem = (payload)=>({
    type: constants.DELETE_DOCS_GRID_ITEM,
    payload
})

//payload = {exampleID, subId}
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