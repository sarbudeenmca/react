import React from 'react'

const Buttons = ({ phDatas, handleTodos, handlePosts, handlePhotos }) => {
    return (
        <div className='buttons'>
            <button type='button' className='btn1' onClick={() => handleTodos()}>Users</button>
            <button type='button' className='btn1' onClick={() => handlePosts()}>Post</button>
            <button type='button' className='btn1' onClick={() => handlePhotos()} >Photos</button>
            <div className='phdatas'>
                <ul>
                    {
                        phDatas.map(item => (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Buttons