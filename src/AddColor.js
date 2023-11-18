import React from 'react'

const AddColor = ({ color, setColor, handleColorSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleColorSubmit}>
            <input
                type='text'
                placeholder='Enter Color Name'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddColor