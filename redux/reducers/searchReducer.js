const defaultState = {
    searchTerm: '',
}

const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            }
        default:
            return state
    }
}

export const searchTermAction = (payload) => ({
    type: SET_SEARCH_TERM,
    payload,
})

export default searchReducer
