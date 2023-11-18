import React from 'react'

const SearchItem = ({search, searchResult}) => {
    return (
        <form className='addForm'>
            <input
            type="text"
            id='search'
            role='searchbox'
            placeholder='Search Items'
            value={search} 
            onChange={(e) => searchResult(e.target.value)} />
        </form>
    )
}

export default SearchItem