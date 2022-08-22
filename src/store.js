import { createStore, combineReducers } from 'redux'

import { API } from './reducer'

const reducer = combineReducers({
    api: API
})

export let store = createStore(reducer)
