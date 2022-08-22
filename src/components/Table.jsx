import { Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router';
// import { useHistory } from "react-router-dom"

const Tables = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const { apiResponse } = useSelector(state => state.api)
    // Name, Created, Edited

    const handletableclick = (data) => {
        console.log(data, ":000")
        dispatch({
            type: 'SET_CURRENT_DETAILS', payload: data
        })
        navigate("/about", { replace: true });

    }

    let colums = [{
        key: 'name',
        title: 'name',
        dataIndex: 'name',

    },
    {
        key: 'created',
        title: 'created',
        dataIndex: 'created'
    },
    {
        key: 'edited',
        title: 'edited',
        dataIndex: 'edited'
    },
    {
        key: 'deatils',
        title: 'edited',
        render: (res, data) => (<button onClick={() => handletableclick(data)}> details</ button>)
    },

    ]

    console.log(apiResponse)
    return (
        <Table dataSource={apiResponse} columns={colums} onc />
    )
}

export default Tables