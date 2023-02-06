import './Card.css'
import React from 'react'
export default props =>{
    const style= {
        backgroundColor: props.backgroundColor || "#424549"
    }
    return (
        <div className='Card' style={style}>
            <div className='Title'>{props.title}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}