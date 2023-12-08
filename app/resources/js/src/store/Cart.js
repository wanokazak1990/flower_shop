const defaultState = {
    count: 0,
    product: {
        name: ''
    }
}
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_PRODUCT = "SET_PRODUCT"
export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, count: action.payload};
        case SET_PRODUCT:
            return {...state, product: action.payload};
        default:
            return state;
    }
}
