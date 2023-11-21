import React, { useState } from 'react'
import ItemsList from './ItemsList'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import Colors from './Colors'
import apiRequest from './apiRequest'
import Buttons from './Buttons'
import apiPlaceholderData from './apiPlaceholderData'

const Content = ({ items, handleCheckbox, handleRemove, afterHandle, showSuccessToast, showDeleteToast, API_URL }) => {

  const PH_URL = 'https://jsonplaceholder.typicode.com'
  const [newItem, setNewItem] = useState('')
  const [search, searchResult] = useState('')
  const [phDatas, setPhDatas] = useState([])

  const handleTodos = async () => {
    const phOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const limit = 10
    const dbName = 'todos'
    const getURL = `${PH_URL}/${dbName}?_limit=${limit}`
    const response = await apiPlaceholderData(getURL, phOptions)
    setPhDatas(response )
  }

  const handlePosts = async () => {
    const phOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const limit = 10
    const dbName = 'posts'
    const getURL = `${PH_URL}/${dbName}?_limit=${limit}`
    const response = await apiPlaceholderData(getURL, phOptions)
    setPhDatas(response)
  }

  const handlePhotos = async () => {
    const phOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const limit = 10
    const dbName = 'photos'
    const getURL = `${PH_URL}/${dbName}?_limit=${limit}`
    const response = await apiPlaceholderData(getURL, phOptions)
    setPhDatas(response)
  }

  const addItem = async (newItem) => {
    const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1
    const addNewItem = { id: newId, checkbox: false, desc: newItem }
    const listItems = [...items, addNewItem]
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) showDeleteToast(result)
    afterHandle(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
    showSuccessToast('New Item Added')
  }

  const filteredItems = items.filter(item => item.desc.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <AddItem
        items={items}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        searchResult={searchResult}
      />
      <ul className='list'>
        {
          (items.length) ? (
            (filteredItems.length > 0) ? (
              <ItemsList
                items={filteredItems}
                handleCheckbox={handleCheckbox}
                handleRemove={handleRemove}
              />
            ) : (
              <li><label>No Result Found!</label></li>
            )
          ) : (
            <li><label>No list found</label></li>
          )
        }
      </ul >
      <Colors />
      <Buttons
        phDatas={phDatas}
        handleTodos={handleTodos}
        handlePosts={handlePosts}
        handlePhotos={handlePhotos}
      />
    </main >
  )
}

// const Content = () => {

//   function names() {
//     const name = ["Hello", "Hi", "Hey", "Wow", "Good"];
//     const rand = Math.floor(Math.random() * name.length);
//     return name[rand];
//   }

//   const [cart, setCart] = useState(() => 99);
//   const [name, setName] = useState(() => names());

//   const handleName = () => {
//     setName(names());
//   }

//   const handleRemove = () => {
//     setCart(cart - 1);
//   };

//   const handleAdd = () => {
//     setCart((prevCart) => { return prevCart + 1 });
//   };

//   return (
//     <main>
//       <div className="box">
//         <button onClick={handleRemove}>Remove (-)</button>
//         <h1>{cart}</h1>
//         <button onClick={handleAdd}>Add (+)</button>
//       </div>

//       <div className="box">
//         <button onClick={handleName}>Change</button>
//         <h1>{name}</h1>
//       </div>
//     </main >
//   );
// };

export default Content;
