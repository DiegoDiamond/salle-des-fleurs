export const sortOptionsData = [
    { id: 1, title: 'по цене', field: 'price' },
    { id: 2, title: 'по алфавиту', field: 'title' },
    { id: 3, title: '*по популярности', field: 'popular' },
    { id: 4, title: '*по дате добавления', field: 'date' },
    { id: 5, title: '*по рейтингу', field: 'rate' },
]

const defaultState = {
    sortDirection: true,
    sortOption: sortOptionsData[0].field,
}

const SET_SORT_OPTION = 'SET_SORT_OPTION'
const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION'

const sortReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SORT_OPTION:
            return {
                ...state,
                sortOption: sortOptionsData[action.payload].field,
            }
        case SET_SORT_DIRECTION:
            return {
                ...state,
                sortDirection: action.payload,
            }
        default:
            return state
    }
}

export const sortOptionAction = (payload) => ({
    type: SET_SORT_OPTION,
    payload,
})
export const sortDirectionAction = (payload) => ({
    type: SET_SORT_DIRECTION,
    payload,
})

export default sortReducer
