import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import apiRequest from "./apiRequest";
function App() {

  const API_URL = 'http://localhost:3001/items'
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        const listItems = await response.json()
        setItems(listItems)
      } catch (error) {
        showDeleteToast(error)
        console.log(error.stack)
      }
    }
    (async () => await fetchItems())()
  }, [])

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
    // localStorage.setItem('updatedItems', JSON.stringify(updatedItems));
  }

  const handleCheckbox = async (key) => {
    const updatedItems = items.map((item) => {
      return item.id === key ? { ...item, checkbox: !item.checkbox } : item
    })

    const changedItem = updatedItems.filter((item) => item.id === key)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checkbox: changedItem[0].checkbox })
    }
    const patchUrl = `${API_URL}/${key}`
    const result = await apiRequest(patchUrl, updateOptions)
    if (result) showDeleteToast(result)
    afterHandle(updatedItems)
  }

  const handleRemove = async (key) => {
    const updatedItems = items.filter((item) => {
      return item.id !== key;
    })

    const deleteOptions = {
      method:'DELETE',
    }
    const deleteUrl= `${API_URL}/${key}`
    const result = await apiRequest(deleteUrl,deleteOptions)

    if(result) showDeleteToast(result)

    afterHandle(updatedItems)
    showDeleteToast('Item Deleted')
  }

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
        showDeleteToast={showDeleteToast}
        API_URL={API_URL}
      />
      <Footer
        listLength={items.length}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
