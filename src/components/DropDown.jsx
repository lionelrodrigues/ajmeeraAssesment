import React, { useEffect, useState } from 'react'
import { Select, Switch } from 'antd'
import { data } from '../data.js'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import SwitchS from './Switch.jsx'




const DropDown = () => {
    const [select, setSelect] = useState(data[0].value)
    const dispatch = useDispatch()


    //get data from api

    const apiCall = (link) => {
        axios.get(link).then(res => {
            dispatch({
                type: 'SET_API_RESPONSE', payload: res.data.results
            })
        })
    }

    useEffect(() => {
        apiCall(select)
        return () => {
            apiCall(select)
        }
    }, [])


    const seletchHandler = (value) => {
        setSelect(value)
        apiCall(value)
    }

    return (
        <div className="top_container">

            <Select onSelect={seletchHandler} defaultValue={data[0].key} width={100}>
                {
                    data.map((options) => <Select.Option value={options.value} key={options.key}>{options.key}</Select.Option>)
                }
            </Select >
            <SwitchS />
        </div>
    )
}

export default DropDown