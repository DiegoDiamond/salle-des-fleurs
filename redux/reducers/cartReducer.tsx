type stateType = {
    cartItems: Array<number>
}

const defaultState: stateType = {
    cartItems: [],
}

const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS'
const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_CART_ITEMS:
            const newCartItems = state.cartItems.filter((item) => item !== action.payload)
            return {
                ...state,
                cartItems: [...newCartItems, action.payload],
            }
        case REMOVE_CART_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item !== action.payload),
            }
        default:
            return state
    }
}

export const updateCartItemsAction = (payload) => ({
    type: UPDATE_CART_ITEMS,
    payload,
})
export const removeCartItemsAction = (payload) => ({
    type: REMOVE_CART_ITEMS,
    payload,
})

export default cartReducer
