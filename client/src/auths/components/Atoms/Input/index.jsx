import React from 'react'
import './input.scss'

const Input = ({label, ...rest}) => {
    return (
        <div className="input-wrapper">
            <p className="form-label">{label}</p>
            <input 
                className="form-input"
                name=""
                id="" 
                {...rest}/>
        </div>
    )
}

export default Input
