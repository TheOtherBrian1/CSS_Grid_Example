const type = {
    UPDATE_GRID_ITEM_STYLE: 'UPDATE_GRID_ITEM_STYLE',
    ADD_GRID_ITEM: 'ADD_GRID_ITEM',
    REMOVE_GRID_ITEM: 'REMOVE_GRID_ITEM',
}

//expected payload: {gridId, itemId, style}
const updateGridItemStyle = (payload)=>({
    type: type.UPDATE_GRID_ITEM_STYLE,
    payload
})

//expected payload: {gridId, itemId, style}
const addGridItem = (payload)=>({
    type: type.ADD_GRID_ITEM,
    payload
})

//expected payload: {gridId}
const removeGridItem = (payload)=>({
    type: type.REMOVE_GRID_ITEM,
    payload
})

export {type};

const actions = {
    addGridItem,
    removeGridItem,
    updateGridItemStyle
}

export default actions;