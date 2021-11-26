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
        selectedIcon: null,
    }
]

const iconDisplayReducer = (state = iconToggleState, action) => {
    return(
        produce(state, draft=>{
            const pay = action.payload;
            switch(action.type){
                case iconTypes.SELECT_ICON:
                    draft[pay.exampleId].selectedIcon = (draft[pay.exampleId].selectedIcon === pay.selectedIcon? null: pay.selectedIcon);
                    break;
                default:
                    break;
            }
        })
    )
}

export default iconDisplayReducer;