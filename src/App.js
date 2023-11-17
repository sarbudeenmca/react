import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {

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
  ])

  const handleCheckbox = (key) => {
    const updatedItems = items.map((item) => {
      return item.id === key ? { ...item, checkbox: !item.checkbox } : item
    })
    setItems(updatedItems)
    localStorage.setItem('updatedItems', updatedItems);
  }

  const handleRemove = (key) => {
    const updatedItems = items.filter((item) => {
      return item.id !== key;
    })
    setItems(updatedItems);
    localStorage.setItem('updatedItems', updatedItems);
  }

  return (
    <div>
      <Header
        myTitle='To do List'
      />
      <Content 
        items = {items}
        handleCheckbox = {handleCheckbox}
        handleRemove={handleRemove}
      />
      <Footer 
        listLength={items.length}
      />
    </div>
  );
}

export default App;
