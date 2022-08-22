import React from 'react'
import { Switch } from 'antd'
import { useDispatch } from 'react-redux'

const SwitchS = () => {
    const dispatch = useDispatch()
    const handleSwitch = (boolean) => {
        console.log(boolean)
        dispatch({
            type: 'SET_THEME_MODE', payload: boolean
        })
    }
    return (
        <Switch onChange={handleSwitch} />
    )
}

export default SwitchS