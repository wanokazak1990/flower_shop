const defaultState = {
    ids: []
}

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, ids: [...state.ids, ...[action.payload]]};
        default:
            return state;
    }
}
