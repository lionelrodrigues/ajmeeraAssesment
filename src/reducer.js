
const initialState = {
    apiResponse: [],
    details: {},
    theme: 'light'
}

export const API = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_API_RESPONSE':

            return { ...state, apiResponse: action.payload }
        case 'SET_CURRENT_DETAILS':

            return { ...state, details: action.payload }
        case 'SET_THEME_MODE':
            return { ...state, theme: action.payload }
        default:
            return { ...state }
    }
}