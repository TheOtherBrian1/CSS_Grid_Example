import produce from 'immer';

const iconTypes = {
    SELECT_ICON: 'SELECT_ICON'
};

//expected payload: {icon: 'code'/'docs'}
const toggleIcon = (payload)=>({
    type: iconTypes.SELECT_ICON,
    payload
})


export const actions = {
    toggleIcon
};


const iconToggleState = [
    {
        exampleId: 0,
        selectedIcon: 'code',
    }
]

const iconDisplayReducer = (state = iconToggleState, action) => produce((draft, action)=>{
    const {exampleId = null, icon = null} = action.payload;
    switch(action.type){
        case iconTypes.SELECT_ICON:
            draft[exampleId].selectedIcon = (icon ==='code')?'docs':'code';
            break;
        default:
            break;
    }
})

export default iconDisplayReducer;