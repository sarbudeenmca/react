import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {

  const savedList = JSON.parse(localStorage.getItem('updatedItems'))
  const initialList = []
  const [items, setItems] = useState(savedList ? savedList : initialList)

  const showSuccessToast = (msg) => {
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom
    })
  }

  const showDeleteToast = (msg) => {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom
    })
  }

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
    showDeleteToast('Item Deleted')
  }

  useEffect(() => {
    console.log('Toast is displayed');
    const timeoutId = setTimeout(() => {
      console.log('Toast closed');
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [items])

  return (
    <div>
      <Header
        myTitle='To do List' myLink='colors'
      />
      <Content
        items={items}
        handleCheckbox={handleCheckbox}
        handleRemove={handleRemove}
        setItems={setItems}
        afterHandle={afterHandle}
        showSuccessToast={showSuccessToast}
      />
      <Footer
        listLength={items.length}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
