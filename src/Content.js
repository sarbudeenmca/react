import React, { useState } from 'react'
import ItemsList from './ItemsList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const Content = ({ items, handleCheckbox, handleRemove, afterHandle }) => {

  const [newItem, setNewItem] = useState('');
  const [search, searchResult] = useState('');
  const addItem = (newItem) => {
    const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1
    const addNewItem = { id: newId, checked: false, desc: newItem }
    const listItems = [...items, addNewItem]
    afterHandle(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

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
            <ItemsList
              items={items.filter(item => (item.desc.toLowerCase()).includes(search.toLowerCase()))}
              handleCheckbox={handleCheckbox}
              handleRemove={handleRemove}
            />
          ) : (
            <li><label>No list found</label></li>
          )
        }
      </ul >
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
