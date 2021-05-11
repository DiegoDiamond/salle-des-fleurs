import React from 'react'

type inputValuesTypes = {
    id: number
    inputValue: number
}

type stateTypes = {
    targetIndex: number
    modalActive: boolean
    bookmarksActive: Array<number>
    inputValues: Array<inputValuesTypes>
}

const defaultState: stateTypes = {
    targetIndex: 0,
    modalActive: false,
    bookmarksActive: [],
    inputValues: [],
}

const SET_TARGET_INDEX = 'SET_TARGET_INDEX'
const SET_MODAL_ACTIVE = 'SET_MODAL_ACTIVE'
const BOOKMARK_ADD = 'SET_BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'SET_BOOKMARK_REMOVE'
const INPUT_VALUE_CHANGE = 'INPUT_VALUE_CHANGE'

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TARGET_INDEX:
            return {
                ...state,
                targetIndex: action.payload,
            }
        case SET_MODAL_ACTIVE:
            return {
                ...state,
                modalActive: action.payload,
            }
        case BOOKMARK_ADD:
            return {
                ...state,
                bookmarksActive: [...state.bookmarksActive, action.payload],
            }
        case BOOKMARK_REMOVE:
            return {
                ...state,
                bookmarksActive: state.bookmarksActive.filter((item) => item !== action.payload),
            }
        case INPUT_VALUE_CHANGE:
            const newInputValues = state.inputValues.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                inputValues: [...newInputValues, { ...action.payload }],
            }
        default:
            return state
    }
}

export const targetIndexAction = (payload) => ({
    type: SET_TARGET_INDEX,
    payload,
})
export const modalActiveAction = (payload) => ({
    type: SET_MODAL_ACTIVE,
    payload,
})
export const bookmarkAddAction = (payload) => ({
    type: BOOKMARK_ADD,
    payload,
})
export const bookmarkRemoveAction = (payload) => ({
    type: BOOKMARK_REMOVE,
    payload,
})
export const inputValueChangeAction = (payload) => ({
    type: INPUT_VALUE_CHANGE,
    payload,
})

export default modalReducer
