import React from 'react'
import { GoPlus } from 'react-icons/go'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                type='text'
                autoFocus
                id='addItem'
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
            />
            <button type='submit'>
                <GoPlus className='addIcon' onClick={()=>handleSubmit}/>
            </button>
        </form>
    )
}

export default AddItem