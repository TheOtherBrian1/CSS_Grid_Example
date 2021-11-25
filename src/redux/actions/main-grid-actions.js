const type = {
    UPDATE_GRID_STYLE: 'UPDATE_GRID_STYLE',
}

//expected payload: [gridId, style]
const updateGridItemStyle = (payload)=>({
    type: type.UPDATE_GRID_STYLE,
    payload
})


export {type};

const actions = {
    updateGridItemStyle
}

export default actions;