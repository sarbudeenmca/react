import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {

  const savedList = JSON.parse(localStorage.getItem('updatedItems'))
  const initialList = []
  const [items, setItems] = useState(savedList ? savedList : initialList)

  const afterHandle = (updatedItems) => {
    setItems(updatedItems)
    localStorage.setItem('updatedItems', JSON.stringify(updatedItems));
  }

  const handleCheckbox = (key) => {
    const updatedItems = items.map((item) => {
      return item.id === key ? { ...item, checkbox: !item.checkbox } : item
    })

    afterHandle(updatedItems)

  }

  const handleRemove = (key) => {
    const updatedItems = items.filter((item) => {
      return item.id !== key;
    })
    afterHandle(updatedItems)
  }

  return (
    <div>
      <Header
        myTitle='To do List'
      />
      <Content
        items={items}
        handleCheckbox={handleCheckbox}
        handleRemove={handleRemove}
        setItems={setItems}
        afterHandle={afterHandle}
      />
      <Footer
        listLength={items.length}
      />
    </div>
  );
}

export default App;
