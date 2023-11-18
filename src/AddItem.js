import React, { useRef } from 'react'
import { GoPlus } from 'react-icons/go'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef()
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                type='text'
                ref={inputRef}
                autoFocus
                id='addItem'
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
            />
            <button type='submit'>
                <GoPlus type='submit' className='addIcon' onClick={() => inputRef.current.focus()} />
            </button>
        </form>
    )
}

export default AddItem