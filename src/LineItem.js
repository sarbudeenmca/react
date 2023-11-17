import React from 'react'
import { GoTrash } from 'react-icons/go'
const LineItem =  ({item, handleCheckbox, handleRemove}) => {
    return (
        <li>
            <div className='cbox'>
                <input type='checkbox' onChange={() => handleCheckbox(item.id)} checked={item.checkbox} />
            </div>
            <div className='cont'>
                <label className={`desc ${item.checkbox && 'strike'}`} onDoubleClick={() => handleCheckbox(item.id)}>{item.desc}</label>
            </div>
            <div className='action'>
                <GoTrash role='button' onClick={() => handleRemove(item.id)} className='icon' />
            </div>
        </li>
    )
}

export default LineItem