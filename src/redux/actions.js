const type = {
    SELECT_ICON: 'SELECT_ICON',
    UPDATE_GRID_STYLE: 'UPDATE_GRID_STYLE',
    UPDATE_GRID_ITEM_STYLE: 'UPDATE_GRID_ITEM_STYLE'
}

const selectIcon = (payload)=>({
    type: type.SELECT_ICON,
    payload
})

const updateGridStyle = (payload)=>({
    type: type.UPDATE_GRID_STYLE,
    payload
});

const updateGridItemStyle = (payload)=>({
    type: type.UPDATE_GRID_ITEM_STYLE,
    payload
})

export {type};

const actions = {
    selectIcon,
    updateGridStyle,
    updateGridItemStyle
}

export default actions;