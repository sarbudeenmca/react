import React, { useState } from 'react';

const Content = () => {

  function names() {
    const name = ["Hello", "Hi", "Hey", "Wow", "Good"];
    const rand = Math.floor(Math.random() * name.length);
    return name[rand];
  }

  const [cart, setCart] = useState(() => 99);
  const [name, setName] = useState(() => names());

  const handleName = () => {
    setName(names());
  }

  const handleRemove = () => {
    setCart(cart - 1);
  };

  const handleAdd = () => {
    setCart((prevCart) => { return prevCart + 1 });
  };

  return (
    <main>
      <div className="box">
        <button onClick={handleRemove}>Remove (-)</button>
        <h1>{cart}</h1>
        <button onClick={handleAdd}>Add (+)</button>
      </div>

      <div className="box">
        <button onClick={handleName}>Change</button>
        <h1>{name}</h1>
      </div>
    </main >
  );
};

export default Content;
