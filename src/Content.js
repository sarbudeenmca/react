import React, { useState } from 'react';
import { GoTrash } from 'react-icons/go';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      desc: "Install New OS",
      checkbox: true
    },
    {
      id: 2,
      desc: "Software Update",
      checkbox: false
    },
    {
      id: 3,
      desc: "Install Basic Softwares",
      checkbox: false
    },
    {
      id: 4,
      desc: "Copy important files",
      checkbox: false
    }
  ]);

  const handleCheckbox = (key) => {
    const updatedItems = items.map((item) => {
      return item.id === key ? { ...item, checkbox: !item.checkbox } : item
    })
    setItems(updatedItems)
  }

  const handleRemove = (key) => {
      const updatedItems = items.filter((item) => {
        return item.id!==key;
      })
      setItems(updatedItems);
  }

  return (
    <main>
      <ul className='list'>
        {items.map((item) => (
          <li key={item.id}>
            <div className='cbox'>
              <input type='checkbox' onChange={() => handleCheckbox(item.id)} checked={item.checkbox} />
            </div>
            <div className='cont'>
              <label className='desc'>{item.desc}</label>
            </div>
            <div className='action'>
              <GoTrash role='button' onClick={() => handleRemove(item.id)} className='icon' />
            </div>
          </li>
        ))
        }
      </ul>
    </main>
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
