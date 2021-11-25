const type = {
    SELECT_ICON: 'SELECT_ICON',
}
//Expected payload: {exampleId, selectedIcon}
const selectIcon = (payload)=>({
    type: type.SELECT_ICON,
    payload
})

export {type};

const actions = {
    selectIcon,
}


export default actions;