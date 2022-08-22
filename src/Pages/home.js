import React from 'react'
import { useSelector } from 'react-redux'
import DropDown from '../components/DropDown'
import Tables from '../components/Table'
import '../App.css'

const Home = () => {
    const { theme } = useSelector(state => state.api)
    const color = theme ? { backgroundColor: '#000000' } : { backgroundColor: '#FFFFFF' }
    return (
        <div style={color}>
            <DropDown />
            <Tables />
        </div>
    )
}

export default Home