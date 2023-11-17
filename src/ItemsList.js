import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({ items, handleCheckbox, handleRemove }) => {
    return (
        items.map((item) => (
            <LineItem
                handleCheckbox={handleCheckbox}
                handleRemove={handleRemove}
                item={item}
                key={item.id}
            />
        )) 
    )
}

export default ItemsList