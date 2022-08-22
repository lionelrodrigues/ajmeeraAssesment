import React from 'react'
import { useSelector } from 'react-redux'



const Detail = () => {
    const { details, theme } = useSelector(state => state.api)
    const color = theme ? { backgroundColor: '#000000' } : { backgroundColor: '#FFFFFF' }
    const det = []
    if (details) {
        for (const property in details) {
            det.push(

                <div>
                    <p>{property}:{details[property]}</p>
                </div>
            )
        }
    }


    return (
        <div style={color}>
            {det
            }
        </div>
    )
}

export default Detail